import morgan from "morgan";

export class Morgan {
  static format(format: string) {
    if (!format) throw new Error("Format is required");
    return morgan(format);
  }
}