import { Router } from "express";
import {
  getMahasiswa,
  getMahasiswaById,
  createMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
} from "../controllers/mahasiswa.controller";

const router = Router();

router.get("/mahasiswa", getMahasiswa);
router.get("/mahasiswa/:id", getMahasiswaById);
router.post("/mahasiswa", createMahasiswa);
router.put("/mahasiswa/:id", updateMahasiswa);
router.delete("/mahasiswa/:id", deleteMahasiswa);

export default router;
