import express from "express";
import WalletController from "./controller/wallet.controller";

const Router = () => {
  const router = express.Router();
  router.get("/healthcheck", (req, res) => res.sendStatus(200));
  router.get("/:id", WalletController.getWalletFromId);
  router.get("/", WalletController.getAllWallets);
  router.post("/", WalletController.createWallet);
  router.put("/:id", WalletController.updateWallet);
  router.delete("/:id", WalletController.deleteWallet);
  return router;
};

export default Router;
