import assert = require("assert");
import Converter from "..";

describe("html2unity test", () => {
  const converter = new Converter();
  it("html2unity general case", () => {
// tslint:disable-next-line: max-line-length
    const text = `<p>你<em>好</em>，<strong><span style="color:#d35400"><span style="font-size:16px">世</span>界</span>!</strong></p><p></p>`;
    const expected = "你<i>好</i>，<b><color=#d35400ff><size=16>世</size>界</color>!</b>\n";
    const actual = converter.html2unity(text);
    assert.equal(expected, actual);
  });
});

describe("unity2html test", () => {
  const converter = new Converter();
  it("unity2html general case", () => {
    const text = "你<i>好</i>，<b><color=#d35400ff><size=16>世</size>界</color>!</b>\n";
// tslint:disable-next-line: max-line-length
    const expected = `<p>你<em>好</em>，<strong><span style="color: #d35400"><span style="font-size: 16px">世</span>界</span>!</strong></p><p></p>`;
    const actual = converter.unity2html(text);
    assert.equal(expected, actual);
  });
});
