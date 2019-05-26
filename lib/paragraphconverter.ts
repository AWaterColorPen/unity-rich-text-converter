import { IConverter } from "./converterinterface";

const paragraph4unity2html = {
  pattern: new RegExp("(.*)"),
  replace: (input: string, p1: string) => {
    return `<p>${p1}</p>`;
  },
};

export default class ParagraphConverter implements IConverter {
  public html2unity(input: string): string {
    const pattern = new RegExp("<p>(.*?)<\/p>");
    let output = ``;
    while (true) {
      const matcharray = input.match(pattern);
      if (matcharray && matcharray.groups) {
        output = `${output}
        ${matcharray.groups[0]}`;
      } else {
        break;
      }
    }
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
