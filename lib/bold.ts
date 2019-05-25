const bold4unity2html = {
  pattern: new RegExp("<b>(.*?)<\/b>"),
  replace: (match: string, p1: string) => {
    return `<strong>${p1}</strong>`;
  },
};
const bold4html2unity = {
  pattern: new RegExp("<strong>(.*?)<\/strong>"),
  replace: (match: string, p1: string) => {
    return `<b>${p1}</b>`;
  },
};
