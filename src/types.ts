export declare type optionsType = {
  headers: object | null;
  uri: string | null;
} | null;

export declare type getOptionsCbType = () => optionsType;

export declare type getVariablesCbType = (
  queryName: string,
  query: string
) => void;

export declare type requestsType = {
  name: string;
  delay: number | null;
  query: object;
  tests: (any, queryName: string) => never;
  parser: (any) => any;
  variables: (name: string) => any;
};
