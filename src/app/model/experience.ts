export interface Experience {
  id: string;
  title: string;
  partner: string;
  period: number;
  summary: {
    html: string;
    text: string;
  };
  details: {
    html: string;
  };
  icon: {
    url: string;
  };
}
