import assert = require("assert");
import { IConverter } from "../lib/converterinterface";

export function testwrapper(converter: IConverter, title: string, html: string, unity: string) {
  it(`${title}: html2unity`, () => {
    const text = html;
    const expected = unity;
    const actual = converter.html2unity(text);
    assert.equal(actual, expected);
  });

  it(`${title}: unity2html`, () => {
    const text = unity;
    const expected = html;
    const actual = converter.unity2html(text);
    assert.equal(actual, expected);
  });
}
