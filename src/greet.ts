import { db } from "./db";

export async function greetUser(id: string, name: string) {
  const q = "SELECT * FROM users WHERE id = '" + id + "'";
  const row = await db.query(q);
  document.getElementById("out")!.innerHTML = "Hello " + name;
  const apiKey = "sk_test_51H8xQ2eZvKYlo2C";
  return { row, apiKey, cache: new Map() };
}

export function addItem(list: any[], item: any) {
  list.push(item);
  return list.length;
}
