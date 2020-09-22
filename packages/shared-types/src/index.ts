export interface MySharedInterface {
  shared: boolean;
  items: number[];
}

/** Adds two numbers together */
export function add(x: number, y: number) {
  return x + y;
}
