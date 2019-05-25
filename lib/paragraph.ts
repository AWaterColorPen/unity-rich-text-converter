const paragraph4unity2html = {
  pattern: new RegExp("<b>(.*?)<\/b>"),
  replace: (match: string, p1: string) => {
    return `<strong>${p1}<\/strong>`;
  },
};
const paragraph4html2unity = {
  pattern: new RegExp("<p>(.*?)<\/p>"),
  replace: (match: string, p1: string) => {
    return `${p1}\n`;
  },
};
