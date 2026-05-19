declare const pm: {
  environment: {
    set(key: string, value: any): void;
    get(key: string): string;
    unset(key: string): void;
  };
  variables: {
    replaceIn(template: string): string;
    get(key: string): string;
  };
  test(name: string, fn: () => void): void;
  expect(value: any): any;
  response: {
    json(): any;
    code: number;
    to: { have: { status(code: number): void } };
  };
};