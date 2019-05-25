const decReg = new RegExp("[1-9]{1}[0-9]*");
const fontsize4unity2html = {
  pattern: new RegExp("<size=([^>]*)>(.*?)<\/size>"),
  replace: (match: string, p1: string, p2: string) => {
    if (!p1.match(decReg)) {
      throw new Error(`error font size : ${match}`);
    }

    return `<span style="font-size: ${p1}px">${p2}</span>`;
  },
};
const fontsize4html2unity = {
  pattern: new RegExp("<span style=\"font-size:([^>\"]*)px\">(.*?)<\/span>"),
  replace: (match: string, p1: string, p2: string) => {
    if (!p2.includes("<span")) {
      throw new Error(`error in span style font-size html paser : ${match}`);
    }

    return `<size=${p1}>${p2}</size>`;
  },
};
