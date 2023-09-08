import { ParseResultSuccess, Parser, ParserResultFailure } from "../";

export class Pstring implements Parser<string> {
  type = "string";
  constructor(private value: string) {}
  parse(input: string) {
    if (input.startsWith(this.value)) {
      return new ParseResultSuccess(this.value, input.slice(this.value.length));
    } else {
      return new ParserResultFailure(this.value, input);
    }
  }
}
