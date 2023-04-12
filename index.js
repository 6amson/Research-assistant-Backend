require('dotenv').config({ path: './keys.env' });
const { Configuration, OpenAIApi } = require("openai");



const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_KEY,
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listModels();
(async function (){
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test"
    })

    console.log(response);
})()


