import { IConverter } from "./converterinterface";

export default class ParagraphConverter implements IConverter {
  public html2unity(input: string): string {
    return this.convert(input, "<p>(.*?)<\/p>", (r: RegExpMatchArray) => `${r[1]}`, "\n");
  }

  public unity2html(input: string): string {
    return this.convert(input, "(.*)", (r: RegExpMatchArray) => `<p>${r[1]}</p>`, "");
  }

  private convert(input: string, pattern: string, fill: (r: RegExpMatchArray) => string, separator: string): string {
    const matcharray = pattern !== "(.*)" ? input.match(new RegExp(pattern, "g")) : input.split("\n");
    if (!matcharray) {
      throw new Error(`error no paragraph in html input ${input}`);
    }
    const output = matcharray.map((item) => {
      const regexp = new RegExp(pattern);
      const regExpMatchArray = item.match(regexp);
      if (!regExpMatchArray) {
        throw new Error(`error invalid paragraph in ${item}`);
      }
      return fill(regExpMatchArray);
    }).join(separator);

    return output;
  }
}
