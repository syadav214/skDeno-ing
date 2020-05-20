import { App, Response } from "./appListener.ts"

const app = new App();

app.get("/test", (response: Response) => {
  return response.send("this is test endpoint");
});

app.post("/test", (response: Response) => {
  return response.send("this is post endpoint");
});