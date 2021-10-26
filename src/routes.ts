import dotenv from "dotenv";
import { Router } from "express";

dotenv.config();

const router = Router();

router.get("/", (request, response) => {
  return response.end(
    JSON.stringify({
      Server: `Alessandro Lins`,
      GIT_TOKEN: process.env.GIT_TOKEN,
    })
  );
});

export { router };
