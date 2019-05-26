const italic4unity2html = {
  pattern: new RegExp("<i>(.*?)<\/i>"),
  replace: (match: string, p1: string) => {
    return `<em>${p1}</em>`;
  },
};

const italic4html2unity = {
  pattern: new RegExp("<em>(.*?)<\/em>"),
  replace: (match: string, p1: string) => {
    return `<i>${p1}</i>`;
  },
};

export const italicconverter = {
  html2unity: italic4html2unity,
  unity2html: italic4unity2html,
};
