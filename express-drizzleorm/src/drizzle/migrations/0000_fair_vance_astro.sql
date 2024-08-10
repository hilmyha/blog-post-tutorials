CREATE TABLE IF NOT EXISTS "mahasiswas" (
	"id" serial PRIMARY KEY NOT NULL,
	"nama" varchar NOT NULL,
	"nim" varchar NOT NULL,
	"jurusan" varchar NOT NULL,
	"angkatan" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
