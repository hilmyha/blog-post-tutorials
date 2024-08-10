import {
  serial,
  pgTable,
  varchar,
  integer,
  timestamp,
} from "drizzle-orm/pg-core";

export const mahasiswaSchema = pgTable("mahasiswas", {
  id: serial("id").primaryKey(),
  nama: varchar("nama").notNull(),
  nim: varchar("nim").notNull(),
  jurusan: varchar("jurusan").notNull(),
  angkatan: integer("angkatan").notNull(),

  created_at: timestamp("created_at").notNull().defaultNow(),
  updated_at: timestamp("updated_at").notNull().defaultNow(),
});
