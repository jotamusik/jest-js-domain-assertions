declare namespace jest {
  interface AsymmetricMatchers {
    toBeChild (): void;
    toBeAnAdult (): void;
  }

  interface Matchers<R> {
    toBeChild (): R;
    toBeAnAdult (): R;
  }
}
