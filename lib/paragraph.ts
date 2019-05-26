const paragraph4unity2html = {
  pattern: new RegExp("(.*?)"),
  replace: (match: string, p1: string) => {
    return `<p>${p1}</p>`;
  },
};
const paragraph4html2unityphase1 = {
  pattern: new RegExp("<p>(.*?)<\/p><p>(.*?)<\/p>"),
  replace: (match: string, p1: string, p2: string) => {
    return `${p1}
${p2}`;
  },
};
const paragraph4html2unityphase2 = {
  pattern: new RegExp("<p>(.*?)<\/p>"),
  replace: (match: string, p1: string, p2: string) => {
    return `${p1}
${p2}`;
  },
};
