import Database from "better-sqlite3";
import path from "path";

const db = new Database(path.join(process.cwd(), "emails.db"));

// Create table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS subscribers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

export function addSubscriber(email: string): { success: boolean; message: string } {
  try {
    const stmt = db.prepare("INSERT INTO subscribers (email) VALUES (?)");
    stmt.run(email);
    return { success: true, message: "Successfully subscribed!" };
  } catch (error: unknown) {
    if (error instanceof Error && error.message.includes("UNIQUE constraint failed")) {
      return { success: false, message: "Email already subscribed." };
    }
    return { success: false, message: "Something went wrong." };
  }
}

export function getAllSubscribers(): { id: number; email: string; created_at: string }[] {
  const stmt = db.prepare("SELECT * FROM subscribers ORDER BY created_at DESC");
  return stmt.all() as { id: number; email: string; created_at: string }[];
}

export default db;
