import app from "./app";import { createServer } from "http";
import connect from "./connect";

function startServer() {
  const server = createServer(app);
  const port: string | number = process.env.PORT || 25567;
  server.listen(port, async () => {
    console.log(`Example App listening at http://localhost:${port}`);
    await connect();
  });
}

startServer();