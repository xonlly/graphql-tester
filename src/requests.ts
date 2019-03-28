import ApolloClient from "apollo-client";

import { requestsType } from "./types";
import autoTests from "./autoTests";

export default async (requests: requestsType[], client: ApolloClient<any>) => {
  for (const request of requests) {
    const res = await client.query({
      query: request.query,
      variables: await request.variables(request.name)
    });
    const parsed = request.parser(res);

    if (!request.tests) {
      autoTests(parsed);
    } else {
      request.tests(parsed, request.name);
    }

    console.log("request", request);
  }
};
