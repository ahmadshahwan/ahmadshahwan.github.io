import {writeFile} from 'fs';
import {js2xml, ElementCompact} from 'xml-js';
import '@angular/compiler';
import {baseRoutes} from '../app.routes';


type Route = {
  path: string,
};

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

function urlFromPath(path: string, prefix: string) {
  const fullPrefix = prefix ? `${BASE_URL}/${prefix}` : BASE_URL;
  return path ? `${fullPrefix}/${path}` : `${fullPrefix}`;
}

function rootUrl(path: string) {
  return urlFromPath(path, '');
}

function enUrl(path: string) {
  return urlFromPath(path, 'en');
}

function frUrl(path: string) {
  return urlFromPath(path, 'fr');
}

function canonicalForRoute({path}: Route) {
  return {
    url: enUrl(path),
    alternates: [
      {url: rootUrl(path), locale: 'en'},
      {url: frUrl(path), locale: 'fr'},
    ],
  };
}

const canonicals: Canonical[] = baseRoutes.map(canonicalForRoute);

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


