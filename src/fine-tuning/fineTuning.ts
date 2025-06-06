import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import axios from "axios";
import { Config } from "../configs";

// กำหนด path สำหรับไฟล์ข้อมูลและไฟล์ config
const dataFilePath = path.join(__dirname, "../../data", "animal_data_th.yaml");
const modelConfigPath = path.join(__dirname, "../../configs", "model_config.yaml");

interface TrainingData {
  prompt: string;
  response: string;
}

interface DatasetYaml {
  dataset: TrainingData[];
}

interface ModelConfig {
  base_model: string;
  parameters: {
    learning_rate: number;
    batch_size: number;
    [key: string]: any;
  };
}

export async function fineTuneModel(): Promise<void> {
  try {
    // อ่านและแปลงไฟล์ YAML สำหรับ dataset
    const dataFileContent = fs.readFileSync(dataFilePath, "utf8");
    const parsedDataset = yaml.load(dataFileContent) as DatasetYaml;

    // อ่านและแปลงไฟล์ YAML สำหรับ model config
    const configFileContent = fs.readFileSync(modelConfigPath, "utf8");
    const parsedConfig = yaml.load(configFileContent) as ModelConfig;

    // สร้าง payload โดยรวม dataset และ model config
    const payload = {
      model: parsedConfig.base_model,  // หรือคุณอาจใช้ชื่อโมเดลที่กำหนดเอง
      parameters: parsedConfig.parameters,
      data: parsedDataset.dataset,
    };

    // อ่าน API URL จาก environment variable หรือใช้ค่าเริ่มต้น
    const apiUrl = Config.TRAIN_OLLAMA_API_URL || "http://localhost:11434/api/train";

    // ส่ง POST request ไปยัง API Fine-Tuning ของ Ollama
    const response = await axios.post(apiUrl, payload);
    console.log("Training response:", response.data);
  } catch (error) {
    console.error("Error during fine-tuning:", error);
  }
}

// fineTuneModel();
