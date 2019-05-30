import assert = require("assert");
import Converter from "..";

describe("general test", () => {
  const converter = new Converter();
  it("case 1: html2unity", () => {
// tslint:disable-next-line: max-line-length
    const text = `<p>你<em>好</em>，<strong><span style="color: #d35400"><span style="font-size:16px">世</span>界</span>!</strong></p><p></p>`;
    const expected = "你<i>好</i>，<b><color=#d35400ff><size=16>世</size>界</color>!</b>\n";
    const actual = converter.html2unity(text);
    assert.equal(actual, expected);
  });

  it("case 1: unity2html", () => {
    const text = "你<i>好</i>，<b><color=#d35400ff><size=16>世</size>界</color>!</b>\n";
// tslint:disable-next-line: max-line-length
    const expected = `<p>你<em>好</em>，<strong><span style="color: #d35400"><span style="font-size: 16px">世</span>界</span>!</strong></p><p></p>`;
    const actual = converter.unity2html(text);
    assert.equal(actual, expected);
  });
});

describe("paragraph test", () => {
  const converter = new Converter();
  it("case 1: html2unity", () => {
    const text = `<p></p><p>你好</p><p> </p><p>世</p><p></p>`;
    const expected = "\n你好\n \n世\n";
    const actual = converter.html2unity(text);
    assert.equal(actual, expected);
  });

  it("case 1: unity2html", () => {
    const text = "\n你好\n \n世\n";
    const expected = `<p></p><p>你好</p><p> </p><p>世</p><p></p>`;
    const actual = converter.unity2html(text);
    assert.equal(actual, expected);
  });
});
