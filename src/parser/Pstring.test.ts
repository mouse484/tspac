import { expect, test, describe } from "bun:test";
import { Pstring } from "./Pstring";

describe("hello", () => {
  const helloParser = new Pstring("hello");

  test("empty", () => {
    expect(helloParser.parse("")).toEqual({
      status: "failure",
      literal: "hello",
      next: "",
    });
  });

  test("hello", () => {
    expect(helloParser.parse("hello")).toEqual({
      status: "success",
      literal: "hello",
      next: "",
    });
  });

  test("world", () => {
    expect(helloParser.parse("world")).toEqual({
      status: "failure",
      literal: "hello",
      next: "world",
    });
  });

  test("hello world", () => {
    expect(helloParser.parse("hello world")).toEqual({
      status: "success",
      literal: "hello",
      next: " world",
    });
  });
});
