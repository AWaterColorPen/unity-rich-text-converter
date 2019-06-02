/**
 * Unity colors
 * @type Array<{name: string, color: string}>
 */
const colors: Array<{ name: string, color: string }> = [
  { name: "aqua", color: "#00ffff" },
  { name: "black", color: "#000000" },
  { name: "blue", color: "#0000ff" },
  { name: "brown", color: "#a52a2a" },
  { name: "cyan", color: "#00ffff" },
  { name: "darkblue", color: "#0000a0" },
  { name: "fuchsia", color: "#ff00ff" },
  { name: "green", color: "#008000" },
  { name: "grey", color: "#808080" },
  { name: "lightblue", color: "#add8e6" },
  { name: "lime", color: "#00ff00" },
  { name: "magenta", color: "#ff00ff" },
  { name: "maroon", color: "#800000" },
  { name: "navy", color: "#000080" },
  { name: "olive", color: "#808000" },
  { name: "orange", color: "#ffa500" },
  { name: "purple", color: "#800080" },
  { name: "red", color: "#ff0000" },
  { name: "silver", color: "#c0c0c0" },
  { name: "teal", color: "#008080" },
  { name: "white", color: "#ffffff" },
  { name: "yellow", color: "#ffff00" },
];

const color4unity2html = {
  pattern: new RegExp("<color=([^>]*)>(.*?)<\/color>"),
  replace: (match: string, p1: string, p2: string) => {
    if (!p1.match(new RegExp("#[a-fA-F0-9]{8}"))) {
      throw new Error(`error color code or color name : ${match}`);
    }

    const color = colors.find((v) => v.name === p1);
    return `<span style="color: ${color ? color.color : p1.slice(0, 7).toLowerCase()}">${p2}</span>`;
  },
};

const color4html2unity = {
  pattern: new RegExp("<span style=\"color: *([^>\"]*)\">(.*?(?!<span).*?)<\/span>"),
  replace: (match: string, p1: string, p2: string) => {
    if (!p1.match(new RegExp("#[a-fA-F0-9]{6}"))) {
      throw new Error(`error color code : ${match}`);
    }

    return `<color=${p1.toLowerCase()}ff>${p2}</color>`;
  },
};

export const textcolorconverter = {
  html2unity: color4html2unity,
  unity2html: color4unity2html,
};
