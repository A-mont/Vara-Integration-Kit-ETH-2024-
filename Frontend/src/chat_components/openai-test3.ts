// TEXT 2 SPEECH
import fs from "fs";
import path from "path";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const speechFile = path.resolve("./speech.mp3");

async function openai3() {
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "alloy",
    input: "Today is a wonderful day to build something people love!",
  });
  console.log(speechFile);
  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.promises.writeFile(speechFile, buffer);
}
openai3();

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
