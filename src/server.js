import { initMongoConnection } from "./db/connectMongoDB.js";
import { app } from "./app.js";

const PORT = process.env.PORT || 3001;

const startServer = async () => {
  await initMongoConnection();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
