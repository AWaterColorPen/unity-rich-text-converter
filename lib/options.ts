export default interface IOptions {
  defaultsize: number | undefined;
  defaultcolor: string | undefined;
}

export class Options implements IOptions {
  public defaultsize: number | undefined;
  public defaultcolor: string | undefined;
}
