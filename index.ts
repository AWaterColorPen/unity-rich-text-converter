import { IConverter } from "./lib/converterinterface";
import LinearConverter from "./lib/linearconverter";
import NestedConverter from "./lib/nestedconverter";
import ParagraphConverter from "./lib/paragraphconverter";

export default class Converter implements IConverter {
  private converters: IConverter[];
  constructor() {
    this.converters = [
      new LinearConverter(),
      new NestedConverter(),
      new ParagraphConverter(),
    ];
  }

  public html2unity(input: string): string {
    return this.convert(input, (c: IConverter, i: string) => c.html2unity(i));
  }

  public unity2html(input: string): string {
    return this.convert(input, (c: IConverter, i: string) => c.unity2html(i));
  }

  private convert(input: string, func: (c: IConverter, i: string) => string): string {
    this.converters.forEach((converter) => {
      input = func(converter, input);
    });
    return input;
  }
}
