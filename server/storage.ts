import { db } from "./db";
import {
  contactSubmissions,
  type ContactSubmission,
  type InsertContactSubmission,
} from "@shared/schema";

export interface IStorage {
  createContactSubmission(
    submission: InsertContactSubmission,
  ): Promise<ContactSubmission>;
}

export class DatabaseStorage implements IStorage {
  async createContactSubmission(
    submission: InsertContactSubmission,
  ): Promise<ContactSubmission> {
    const [newSubmission] = await db
      .insert(contactSubmissions)
      .values(submission)
      .returning();
    return newSubmission;
  }
}

export const storage = new DatabaseStorage();
