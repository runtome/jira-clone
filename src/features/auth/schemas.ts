import z from "zod";

export const loginSchema = z.object({
  email: z.string()
    .email({ message: "กรุณาใส่อีเมลให้ถูกต้อง" }) // Custom error message in Thai
    .min(1,{ message: "กรุณาใส่อีเมล" }), // Required field
  password: z.string()
    .min(8, { message: "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร" }) // Minimum length
    .max(256, { message: "รหัสผ่านต้องไม่เกิน 256 ตัวอักษร" }) // Maximum length
});