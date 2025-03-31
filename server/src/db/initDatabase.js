import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import createDataBase from "./SQLite/createDB/index.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function initDatabase() {
  try {
    const dbPath = path.join(__dirname, "database.db");
    const jsonPath = path.join(__dirname, "db.json");
    if (fs.existsSync(dbPath)) {
      fs.unlinkSync(dbPath);
    }
    const rawData = await fs.promises.readFile(jsonPath, "utf-8");
    createDataBase(dbPath, rawData);
  } catch (err) {
    console.error("Error initializing database:", err);
    throw err;
  }
}
