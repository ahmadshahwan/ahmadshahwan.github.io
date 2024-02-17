import {writeFile} from 'fs';
import {js2xml} from 'xml-js';
import {baseRoutes} from './route-map';
import {ElementCompact} from 'xml-js';

type TextNode = {
  _text: string,
};

type UrlNode = {
  loc: TextNode,
  lastmod: TextNode,
  'xhtml:link'?: (TextNode & {
    _attributes: {
      rel: string;
      hreflang: string;
    }
  })[],
};

type UrlsetNode = {
  url: UrlNode[]
};

type Sitemap = {
  urlset: UrlsetNode;
};

type Alternate = {
  url: string,
  locale: string,
};

type Canonical = {
  url: string,
  alternates: Alternate[],
};

const BASE_URL = 'https://ahmad.shahwan.pw';

function urlFromPath(path: string, prefix: string = '') {
  const thePrefix = prefix ? `${BASE_URL}/${prefix}` : BASE_URL;
  return path ? `${thePrefix}/${path}` : `${thePrefix}`;
}

function en(path: string) {
  return urlFromPath(path, 'en');
}

function fr(path: string) {
  return urlFromPath(path, 'fr');
}

const canonicals: Canonical[] = baseRoutes
  .map(route => en(route.path))
  .map(url => ({url, alternates: []}));

baseRoutes
  .map(route => route.path)
  .forEach(path => {
    const canonical = canonicals.find(c => c.url === en(path));
    if (canonical) {
      canonical.alternates.push({
        url: urlFromPath(path),
        locale: 'en',
      });
    } else {
      console.error(`Coud not find canonical for redirect link ${path}`);
    }
  });

baseRoutes
  .map(route => route.path)
  .forEach(path => {
    const canonical = canonicals.find(c => c.url === en(path));
    if (canonical) {
      canonical.alternates.push({
        url: fr(path),
        locale: 'fr',
      });
    } else {
      console.error(`Coud not find canonical for fr link ${path}`);
    }
  });

const now = new Date().toISOString().substring(0, 10);
const lastmod = {_text: now};

const urlNodes: UrlNode[] = canonicals.map((c): UrlNode => ({
  loc: {
    _text: c.url,
  },
  lastmod,
  'xhtml:link': c.alternates.map(a => ({
    _attributes: {
      rel: 'alternate',
      hreflang: a.locale,
    },
    _text: a.url,
  })),
}));

const urlset = {
  url: urlNodes,
  _attributes: {
    'xmlns:xhtml': 'http://www.w3.org/1999/xhtml',
    xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
  }
};

const sitemap: Sitemap & ElementCompact = {
  _declaration: {
    _attributes: {
      version: '1.0',
      encoding: 'utf-8',
    }
  },
  urlset
};

const xml = js2xml(sitemap, {compact: true, ignoreComment: true, spaces: 4});
writeFile('src/app/sitemap/sitemap.xml', xml, err => {
  if (err) {
    console.error('Error writing site map', err);
  } else {
    console.log('Sitemap written successfully');
  }
});


