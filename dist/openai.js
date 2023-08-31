import { Configuration, OpenAIApi } from "openai";
var configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
var openai = new OpenAIApi(configuration);
var response = await openai.listEngines();
export default openai;