import getClient from "./client";
import requests from "./requests";

import {
  optionsType,
  getOptionsCbType,
  getVariablesCbType,
  requestsType
} from "./types";

export default class gqlTester {
  getOptionsCb: getOptionsCbType;
  getVariablesCb: getVariablesCbType;
  requestsList: requestsType[];

  constructor() {
    this.getOptionsCb = () => null;
    this.requests = null;
    this.getVariablesCb = null;
  }

  getOptions(callback: getOptionsCbType) {
    this.getOptionsCb = callback;
    return this;
  }

  requests(requests: requestsType[]) {
    this.requestsList = requests;
    return this;
  }

  getVariables(callback: getVariablesCbType) {
    this.getVariablesCb = callback;
    return this;
  }

  async run() {
    try {
      const options: optionsType = await this.getOptionsCb();
      const client = getClient(options);
      const r = await requests(this.requestsList, client);
    } catch (err) {
      console.error("Error", err);
    }
  }
}
