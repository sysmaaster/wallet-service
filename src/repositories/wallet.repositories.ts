import DB from "../schema/wallet.schema";
import { WalletCreateModel } from "../models/walletCreate.model";
import { WalletEditRequestModel } from "../models/walletEditRequest.model";
import getCrypto from "../utils/crypto.gen";

class WalletRepositry {
  async GetAll() {
    try {
      const result = await DB.find({});

      return result;
    } catch (e) {
      throw e;
    }
  }

  async GetById(input: string) {
    try {
      const result = await DB.findOne({ id: input });

      return result;
    } catch (e) {
      throw e;
    }
  }

  async Create(input: WalletCreateModel) {
    try {
      let newW: WalletEditRequestModel = {
        id: getCrypto(),
        W_NAME: input.W_NAME,
        W_COMMENT: input.W_COMMENT,
        SUMMA: input.SUMMA,
        LIMIT: input.LIMIT,
        CCY: input.CCY,
        TYPE: input.TYPE,
        HOVER: input.HOVER,
      };
      const result = await DB.create(newW);

      return result;
    } catch (e) {
      throw e;
    }
  }

  async Update(upd: WalletEditRequestModel, id: string) {
    try {
      const udp_data = {
        W_NAME: upd.W_NAME,
        W_COMMENT: upd.W_COMMENT,
        SUMMA: upd.SUMMA,
        LIMIT: upd.LIMIT,
        CCY: upd.CCY,
        TYPE: upd.TYPE,
        HOVER: upd.HOVER,
      };
      const result = await DB.findOneAndUpdate({ id }, udp_data, {
        new: true,
      });

      return result;
    } catch (e) {
      throw e;
    }
  }

  async UpdateBal({ id, amount }: { id: string; amount: number }) {
    try {
      let result = await DB.findByIdAndUpdate(
        { id: id },
        { SUMMA: amount },
        { new: true }
      );

      return result;
    } catch (e) {
      throw e;
    }
  }

  /* async ShowAllSort({
     sort,
   }: {
     sort: "asc" | "desc";
   }): Promise<WalletResponseModel | {}> {
     const metricsLabels = {
       operation: "g",
     };
     
     try {
       let sortType = {};
       if (sort === "asc") {
         sortType = { sortId: 1 };
       } else if (sort === "desc") {
         sortType = { sortId: -1 };
       }
       const result = await DB.find({}).sort(sortType);
      
       return result;
     } catch (e) {
       
       throw e;
     }
   }*/

  async Delete(id: string) {
    try {
      const result = await DB.findOneAndDelete({ id: id });

      return result;
    } catch (e) {
      throw e;
    }
  }
}
export default new WalletRepositry();
