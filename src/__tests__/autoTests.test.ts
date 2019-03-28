import autoTests from "../autoTests";

let lastConsole;

describe("auto tests", () => {
  beforeAll(() => {
    lastConsole = console.warn;
    console.warn = () => {};
  });

  afterAll(() => {
    console.warn = lastConsole;
  });

  it("should be test null", () => {
    expect(autoTests(null)).toBe(true);
  });

  it("should be test false", () => {
    expect(autoTests(false)).toBe(true);
  });

  it("should be test string 'test'", () => {
    expect(autoTests("test")).toBe(true);
  });

  it("should be test string empty", () => {
    expect(autoTests("")).toBe(false);
  });

  it("should be test string array empty", () => {
    expect(autoTests([])).toBe(false);
  });

  it("should be test string object empty", () => {
    expect(autoTests({}).length).toBe(0);
  });

  it("should be test string array not empty", () => {
    const res = autoTests(["oui", "", { a: "oui", b: "" }]);

    expect(res[0]).toBe(true);
    expect(res[1]).toBe(false);
    expect(res[2][0]).toBe(true);
    expect(res[2][1]).toBe(false);
  });
});
