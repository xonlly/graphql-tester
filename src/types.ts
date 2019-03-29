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
  delay?: number | null;
  query: any;
  tests?: <T>(data: T, queryName: string) => Promise<never>;
  parser?: <T>(data: T) => T;
  variables: (name: string) => Promise<any>;
};
