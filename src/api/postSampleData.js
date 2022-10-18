import { sampleData } from "../constants/sample-data";
import { post } from "./api";
import { url } from "../constants/url";

export const postSampleData = () => {
  sampleData.map((element) => post(url, element));
};
