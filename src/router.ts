import express from "express";
import WalletController from "./controller/wallet.controller";

const Router = () => {
  const router = express.Router();
  router.put("/:id", WalletController.updateWallet);
  router.delete("/:id", WalletController.deleteWallet);
  router.get("/:id", WalletController.getWalletFromId);
  router.get("/", WalletController.getAllWallets);
  router.post("/", WalletController.createWallet);
  router.get("/healthcheck", (req, res) => res.sendStatus(200));
  return router;
};

export default Router;
