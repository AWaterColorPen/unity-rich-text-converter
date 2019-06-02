import { IConverter } from "./src/converterinterface";
import LinearConverter from "./src/linearconverter";
import NestedConverter from "./src/nestedconverter";
import IOptions from "./src/options";
import ParagraphConverter from "./src/paragraphconverter";

export default class Converter implements IConverter {
  public options: IOptions | undefined;
  private converters: IConverter[];
  constructor(options?: IOptions) {
    this.converters = [
      new LinearConverter(),
      new NestedConverter(),
      new ParagraphConverter(),
    ];
    this.options = options;
  }

  public html2unity(input: string): string {
    return this.convert(input, (c: IConverter, i: string) => c.html2unity(i));
  }

  public unity2html(input: string): string {
    return this.convert(input, (c: IConverter, i: string) => c.unity2html(i));
  }

  private convert(input: string, func: (c: IConverter, i: string) => string): string {
    this.verityinput(input);
    this.converters.forEach((converter) => {
      input = func(converter, input);
    });
    return input;
  }

  private verityinput(input: string): void {
    if (input === undefined || input === null) {
      throw new Error(`input is undefined or null: ${input}`);
    }

    if (typeof(input) !== "string") {
      throw new Error(`input is not string type: ${input}`);
    }
  }
}
