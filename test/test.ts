import assert = require("assert");
import { add } from "..";

describe("ts-hi function test", () => {
  it("should return 2", () => {
    const result = add(1, 1);
    assert.equal(2, result);
  });
});
