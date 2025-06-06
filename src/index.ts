import axios from "axios";
import { getOllamaResponseGemma3 } from "./gemma3";
import { getOllamaResponseLlm3 } from "./llm3";
import { OllamaResponse, runAsync } from "./utils/convertOutput";
// import { fineTuneModel } from "./fine-tuning/fineTuning";


// getOllamaResponseLlm3("Hello, how are you?");
// sendImageWithFormDataGemma3("./images/sample.png", "โปรดอธิบายเนื้อหาในภาพนี้");

//not work to train
// runAsync(async()=>{
//   await fineTuneModel();
// });

runAsync(async()=>{
  const output =  await getOllamaResponseLlm3("อะไรคือกล้วย");
  console.log(output);
});

// runAsync(async()=>{
//   const output =  await getOllamaResponseGemma3("hello what is banana");
//   console.log(output);
// });


