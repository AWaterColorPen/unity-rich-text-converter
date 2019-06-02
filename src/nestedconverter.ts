import { IConverter } from "./converterinterface";
import { fontsizeconverter } from "./fontsize";
import { textcolorconverter } from "./textcolor";

export default class NestedConverter implements IConverter {
  private converters: Array<{
    html2unity: { pattern: RegExp; replace: (match: string, p1: string, p2: string) => string; };
    unity2html: { pattern: RegExp; replace: (match: string, p1: string, p2: string) => string; };
  }>;

  constructor() {
    this.converters = [
      fontsizeconverter,
      textcolorconverter,
    ];
  }

  public html2unity(input: string): string {
    return this.convert(input, (c: { html2unity: any; }) => c.html2unity);
  }

  public unity2html(input: string): string {
    return this.convert(input, (c: { unity2html: any; }) => c.unity2html);
  }

  private convert(input: string, parse: (c: any) => any): string {
    while (true) {
      let ismatch = false;
      this.converters.forEach((converter) => {
        const parser = parse(converter);
        while (input.match(parser.pattern)) {
          input = input.replace(parser.pattern, parser.replace);
          ismatch = true;
        }
      });

      if (ismatch === false) {
        break;
      }
    }

    return input;
  }
}
