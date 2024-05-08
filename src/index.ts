import app from "./app";import { createServer } from "http";
import log from "./services/logger.service";
import connect from "./utils/connect";

function startServer() {
  const server = createServer(app);
  const port: string | number = process.env.PORT || 1242;
  server.listen(port, async () => {
    log.info(`Example App listening at http://localhost:${port}`);
    await connect();
  });
}

startServer();