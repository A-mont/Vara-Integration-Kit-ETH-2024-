// TEXT 2 SPEECH
import fs from "fs";
import path from "path";
import { openai } from "./openAIClient";

const speechFile = path.resolve("./speech.mp3");

async function text2speech() {
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "alloy",
    input: "Today is a wonderful day to build something people love!",
  });
  console.log(speechFile);
  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.promises.writeFile(speechFile, buffer);
}
export default text2speech;

//REPRODUCCIÓN DE AUDIO REALTIME
//from openai import OpenAI
//
//client = OpenAI()
//
//response = client.audio.speech.create(
//    model="tts-1",
//    voice="alloy",
//    input="Hello world! This is a streaming test.",
//)
//
//response.stream_to_file("output.mp3")
