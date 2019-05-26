import { boldconverter } from "./bold";
import { IConverter } from "./converterinterface";
import { italicconverter } from "./italic";

export default class LinearConverter implements IConverter {
  private converters: Array<{
    html2unity: { pattern: RegExp; replace: (match: string, p1: string) => string; };
    unity2html: { pattern: RegExp; replace: (match: string, p1: string) => string; };
  }>;

  constructor() {
    this.converters = [
      boldconverter,
      italicconverter,
    ];
  }

  public html2unity(input: string): string {
    return this.convert(input, (c: { html2unity: any; }) => c.html2unity);
  }

  public unity2html(input: string): string {
    return this.convert(input, (c: { unity2html: any; }) => c.unity2html);
  }

  private convert(input: string, parse: (c: any) => any): string {
    this.converters.forEach((converter) => {
      const parser = parse(converter);
      while (input.match(parser.pattern)) {
        input = input.replace(parser.pattern, parser.replace);
      }
    });
    return input;
  }
}
