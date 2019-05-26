import { IConverter } from "./converterinterface";

const paragraph4unity2html = {
  pattern: new RegExp("(.*)"),
  replace: (input: string, p1: string) => {
    return `<p>${p1}</p>`;
  },
};

export default class ParagraphConverter implements IConverter {
  public html2unity(input: string): string {
    const matcharray = input.match(new RegExp("<p>(.*?)<\/p>", "g"));
    if (!matcharray) {
      throw new Error(`error no paragraph in html input ${input}`);
    }

    const output = matcharray.map((item) => {
      const pattern = new RegExp("<p>(.*?)<\/p>");
      const properties = item.match(pattern);
      if (!properties) {
        throw new Error(`error invalid paragraph in ${item}`);
      }
      return properties[1];
    }).join("\n");

    return output;
  }

  public unity2html(input: string): string {
    const parser = paragraph4unity2html;
    while (input.match(parser.pattern)) {
      input = input.replace(parser.pattern, parser.replace);
    }
    return input;
  }
}
