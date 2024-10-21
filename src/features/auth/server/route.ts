import { z } from "zod";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { ID } from "node-appwrite";
import { deleteCookie, setCookie} from "hono/cookie";

import { loginSchema, registerSchema } from "../schemas";
import { register } from "module";
import { createAdminClient } from "@/lib/appwrite";
import { AUTH_COOKIE } from "../constants";

const app = new Hono()
  .post(
    "/login",
    zValidator("json", loginSchema), 
    async (c) => {
      const {email , password} =  c.req.valid("json");

      const { account } = await createAdminClient();
      const session = await account.createEmailPasswordSession(
        email,
        password,
      ) 

      setCookie (c, AUTH_COOKIE, session.secret, {
        path : "/",
        httpOnly : true,
        sameSite :"Strict",
        maxAge: 60 * 60 * 24 * 30,
      });
      return c.json({ sucess:true });
    }
  )
  .post(
    "/register",
    zValidator("json", registerSchema),
    async (c) => {
      const {name , email , password} =  c.req.valid("json");

      const {account} = await createAdminClient();
      // const user = await account.create(
      await account.create(
        ID.unique(),
        email,
        password,
        name,
      )

      const session = await account.createEmailPasswordSession(
        email,
        password,
      )

      setCookie (c, AUTH_COOKIE, session.secret, {
        path : "/",
        httpOnly : true,
        sameSite :"Strict",
        maxAge: 60 * 60 * 24 * 30,
      });


      // return c.json({ data : user}); in case need to return to brower
      return c.json({ sucess:true });
    }
  )
  .post(
    "/logout",
    async (c) => {
      deleteCookie(c, AUTH_COOKIE);

      return c.json({ sucess:true });
    })
  ;

export default app;
