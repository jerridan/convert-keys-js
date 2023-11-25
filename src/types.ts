export type PlainObject = {
  [key: string]: unknown | PlainObject | PlainArray;
};

export type PlainArray = Array<unknown | PlainObject | PlainArray>;

export type Overrides = {
  [key: string]: string;
};
