import { describe, expect, it } from "vitest";
import { hello } from ".";

describe("Testcase 1", () => {
  it("should pass CI", () => {
    expect(hello()).toEqual("hello");
  });
});
