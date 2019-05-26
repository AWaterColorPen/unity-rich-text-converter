import assert = require("assert");
import Converter from "..";

describe("ts-hi function test", () => {
  const converter = new Converter();
  it("should return 2", () => {
// tslint:disable-next-line: max-line-length
    const text = `<p>你<em>好</em>，<strong><span style="color:#d35400"><span style="font-size:16px">世</span>界</span>!</strong></p><p></p>`;
    const result = converter.html2unity(text);
    assert.equal("", result);
  });
});
