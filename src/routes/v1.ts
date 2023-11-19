import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

router.get("/", (request: Request, response: Response) => {
  response.send("This is the API v1");
});

router.get("/hello", (request: Request, response: Response) => {
  response.send("Hello, World!");
});

export default router;
