import dotenv from "dotenv";
import { Request, Response } from "express";

// schema imports
import { mahasiswaSchema } from "../db/schema/mahasiswa";
import db from "../db/connection";
import { eq, sql } from "drizzle-orm";

dotenv.config();

// getMahasiswa allows you to get all mahasiswa data
export const getMahasiswa = async (req: Request, res: Response) => {
  try {
    const mahasiswas = await db.select().from(mahasiswaSchema).execute();
    return res.status(200).json({
      status: "success",
      message: "Mahasiswa data fetched successfully",
      data: mahasiswas,
    });
  } catch (error: any) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

// getMahasiswaById allows you to get mahasiswa data by id
export const getMahasiswaById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const mahasiswa = await db
      .select()
      .from(mahasiswaSchema)
      .where(eq(mahasiswaSchema.id, parseInt(id)))
      .execute();

    // check if id did not exist
    if (mahasiswa.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "Mahasiswa not found",
      });
    }

    return res.status(200).json({
      status: "success",
      data: mahasiswa,
    });
  } catch (error: any) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

// createMahasiswa allows you to create new mahasiswa
export const createMahasiswa = async (req: Request, res: Response) => {
  try {
    const { nama, nim, jurusan, angkatan } = req.body;
    await db
      .insert(mahasiswaSchema)
      .values({
        nama,
        nim,
        jurusan,
        angkatan,
      })
      .execute();

    return res.status(201).json({
      status: "success",
      message: "Mahasiswa created successfully",
      data: {
        nama,
        nim,
        jurusan,
        angkatan,
      },
    });
  } catch (error: any) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

// updateMahasiswa allows you to update mahasiswa data
export const updateMahasiswa = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nama, nim, jurusan, angkatan } = req.body;
    await db
      .update(mahasiswaSchema)
      .set({
        nama,
        nim,
        jurusan,
        angkatan,

        // update updated_at field
        updated_at: sql`now()`,
      })
      .where(eq(mahasiswaSchema.id, parseInt(id)))
      .execute();

    return res.status(200).json({
      status: "success",
      message: "Mahasiswa updated successfully",
      data: {
        nama,
        nim,
        jurusan,
        angkatan,
      },
    });
  } catch (error: any) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

// deleteMahasiswa allows you to delete mahasiswa data
export const deleteMahasiswa = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await db
      .delete(mahasiswaSchema)
      .where(eq(mahasiswaSchema.id, parseInt(id)))
      .execute();

    return res.status(200).json({
      status: "success",
      message: "Mahasiswa deleted successfully",
    });
  } catch (error: any) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
