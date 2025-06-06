import axios from "axios";
import { Config } from "./configs";

const OLLAMA_API_URL = Config.GENERATE_OLLAMA_API_URL;

export async function prompSelectedModel(model: string, prompt: string) {
  try {
    console.log("waiting");
    const response = await axios.post(OLLAMA_API_URL, {
      model: model,
      prompt: prompt,
    });

    console.log(model,"Response:", response.data);
  } catch (error) {
    console.error("Error connecting to Ollama:", error);
  }
}
