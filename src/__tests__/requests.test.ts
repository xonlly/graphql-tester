import { requestsType } from "../types";

import requests from "../requests";

describe("requests", () => {
  it("should be run a query with variables", () => {
    const _requests: requestsType[] = [
      {
        query: "hello world",
        variables: async name => ({ hello: "world" }),
        name: "getHelloWorld",
        parser: x => {
          expect(x).toEqual({
            data: { hello: "world" },
            loading: false,
            networkStatus: 0,
            stale: false
          });
          return x;
        }
      }
    ];

    return requests(_requests, {
      query: async ({ query, variables }) => {
        expect(variables).toEqual({ hello: "world" });

        return {
          data: variables,
          loading: false,
          networkStatus: 0,
          stale: false
        };
      }
    });
  });
});
