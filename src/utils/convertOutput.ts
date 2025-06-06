import { AxiosResponse } from "axios";
// export const convertOutput = (res: OllamaResponse[]|undefined): string => {
//   console.log(res);
//   let text = "";
//   if(res === undefined) return text;
//   res.map(e => text += e.response );
//   return text;
// }

export const convertOllamaRes = (res: AxiosResponse<any, any>): string => {
  const responseLines: string[] = res.data.split("\n").filter((line: any) => line);
  const parseData: OllamaResponse[] = responseLines.map(line => JSON.parse(line));
  const fullData = parseData.map(e => e.response).join("");// merge all res
  return fullData;
}

export const runAsync = (callback: () => Promise<void>) => {
  callback().then(e => e).catch(error => console.log(error.message));
}

export interface OllamaResponse {
  model: string,
    created_at: string,
    response: string,
    done: boolean,
    done_reason?: string,
    context?: []
}