import { Configuration, OpenAIApi } from "openai";
var configuration = new Configuration({
    apiKey: process.env.OPENAIA_API_KEY,
});
var openai = new OpenAIApi(configuration);
export default openai;