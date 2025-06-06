import axios from "axios";
import { Config } from "./configs";
import { convertOllamaRes } from "./utils/convertOutput";

// const OLLAMA_API_URL = "http://localhost:11434/api/generate";
const OLLAMA_API_URL = Config.GENERATE_OLLAMA_API_URL;

export async function getOllamaResponseLlm3(prompt: string): Promise<string|undefined> {
  try {
    console.log("waiting");
    const response = await axios.post(OLLAMA_API_URL, {
      model: "llama3",
      prompt: prompt,
    });
    // console.log("Ollama Response:", response.data);
    if(response.data === undefined) return "";
    return convertOllamaRes(response);//convert data
  } catch (error) {
    console.error("Error connecting to Ollama:", error);
    return undefined;
  }
}


    // const responseLines: string[] = response.data.split("\n").filter((line: any) => line);
    // const parsedData: OllamaResponse[] = responseLines.map(line => JSON.parse(line));  
    // const fullResponse = parsedData.map(e => e.response).join("");// รวมข้อความจาก response ทั้งหมด
    // console.log("ผลลัพธ์ที่ได้:", fullResponse);

