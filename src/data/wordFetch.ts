import dataJson from "./data.json";

export function getRandomWordle() {
  return dataJson.words[Math.floor(Math.random() * dataJson.words.length)].toUpperCase();
}
