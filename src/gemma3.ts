import axios from "axios";;
import { Config } from "./configs";
import { convertOllamaRes } from "./utils/convertOutput";

const OLLAMA_API_URL = Config.GENERATE_OLLAMA_API_URL;

export async function getOllamaResponseGemma3(prompt: string): Promise<string|undefined> {
  try {
    console.log("waiting");
    const response = await axios.post(OLLAMA_API_URL, {
      model: "gemma3",
      prompt: prompt,
    });
    // console.log("gemma3 Response:", response.data);
    console.log("gemma3 Response: ");
    return convertOllamaRes(response);
  } catch (error) {
    console.error("Error connecting to Ollama:", error);
  }
}












// // URL ของ Gemma 3 API (ปรับ URL ตามการตั้งค่าที่คุณใช้งาน)
// // const GEMMA3_API_URL = "http://localhost:11434/api/generate";
// const GEMMA3_API_URL = Config.OLLAMA_API_URL;

// /**
//  * ฟังก์ชันส่งไฟล์รูปภาพ (โดยใช้ FormData) พร้อมกับ prompt ให้ Gemma 3
//  * @param imagePath พาธไฟล์รูปภาพที่ต้องการส่ง (เช่น './images/sample.png')
//  * @param prompt ข้อความ prompt ที่จะส่งไปให้โมเดล
//  */
// export async function sendImageWithFormDataGemma3(imagePath: string, prompt: string) {
//   // สร้าง instance ของ FormData
//   const formData = new FormData();

//   // เพิ่มฟิลด์ที่จำเป็นใน FormData
//   formData.append("model", "gemma3"); // ระบุชื่อโมเดลตามที่ API รองรับ
//   formData.append("prompt", prompt);

//   // ตรวจสอบว่าไฟล์มีอยู่จริง และเพิ่มไฟล์ใน FormData โดยใช้ stream
//   const absoluteImagePath = path.resolve(imagePath);
//   if (!fs.existsSync(absoluteImagePath)) {
//     console.error("ไม่พบไฟล์ที่ระบุ:", absoluteImagePath);
//     return;
//   }
//   formData.append("image", fs.createReadStream(absoluteImagePath));

//   try {
//     // ส่ง POST request โดยกำหนด headers จาก formData.getHeaders()
//     const response = await axios.post(GEMMA3_API_URL, formData, {
//       headers: {
//         ...formData.getHeaders()
//       },
//       // timeout: 15000 // กำหนด timeout 15 วินาที
//     });

//     console.log("Response from Gemma 3:", response.data);
//   } catch (error: any) {
//     console.error("Error connecting to Gemma 3 with FormData:", error.message);
//   }
// }

// ทดสอบส่งรูปภาพด้วย FormData
// sendImageWithFormDataGemma3("./images/sample.png", "โปรดอธิบายเนื้อหาในภาพนี้");



// import axios from "axios";
// import fs from "fs";
// import path from "path";

// const GEMMA3_API_URL = "http://localhost:11434/api/generate";

// async function sendBase64Image(imagePath: string, prompt: string) {
//   const absoluteImagePath = path.resolve(imagePath);
//   if (!fs.existsSync(absoluteImagePath)) {
//     console.error("ไม่พบไฟล์ที่ระบุ:", absoluteImagePath);
//     return;
//   }

//   // อ่านไฟล์และแปลงเป็น Base64
//   const imageBuffer = fs.readFileSync(absoluteImagePath);
//   const base64Image = imageBuffer.toString("base64");

//   try {
//     // ส่ง JSON payload ไปยัง API
//     const response = await axios.post(
//       GEMMA3_API_URL,
//       {
//         model: "gemma3", // ปรับค่าให้ตรงตามที่ API คาดหวัง
//         prompt: imagePath + prompt,
//         // image: base64Image,
//         // image: imagePath,
//         // หาก API ต้องการระบุ MIME type เช่น "image/png" อาจเพิ่ม key เช่น image_mime
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         // timeout: 15000,
//       }
//     );
//     console.log("Response from Gemma 3:", response.data);
//   } catch (error: any) {
//     if (error.response) {
//       console.error("Error Data:", error.response.data);
//     }
//     console.error("Error connecting to Gemma 3 with Base64:", error.message);
//   }
// }

// sendBase64Image("./images/sample.png", "โปรดอธิบายสิ่งที่แสดงในภาพนี้");

