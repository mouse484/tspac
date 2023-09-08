export class ParseResult<T> {
  status!: "success" | "failure";
  constructor(private literal: T, private next: string) {}
}

export class ParseResultSuccess<T> extends ParseResult<T> {
  status: "success" | "failure" = "success";
  constructor(literal: T, next: string) {
    super(literal, next);
  }
}

export class ParserResultFailure<T> extends ParseResult<T> {
  status: "success" | "failure" = "failure";
  constructor(literal: T, next: string) {
    super(literal, next);
  }
}

export interface Parser<T> {
  type: string;
  parse(input: string): ParseResult<T>;
}
