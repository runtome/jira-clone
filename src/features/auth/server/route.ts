import { z } from "zod";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import { loginSchema } from "../schemas";

const app = new Hono()
  .post(
    "/login",
    zValidator("json", loginSchema), 
    (c) => {
      return c.json({ sucess: "ok" });
    }
);

export default app;


// const app = new Hono()
//   .post(
//     "/login",
//     zValidator("json", z.object({
//       email : z.string().email(),
//       password : z.string().min(8).max(256),
//     })), 
//     (c) => {
//       return c.json({ sucess: "ok" });
//     }
// );

// export default app;