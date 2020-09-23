export type TheyAreLike = {
  better: true;
  yours: false;
};

export interface MySharedInterfaceBringsAllTheBoysToTheYard {
  boys: object[];
  inYard: boolean;
  /** Only exists for TypeScript 3.5 and above */
  andTheyAreLike: Omit<TheyAreLike, "yours">;
  ts31AndUp: true;
}
