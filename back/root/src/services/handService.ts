import { MongoHandModel } from "../db/models/Hand";
import { IHand } from "../models";

export default class HandService {
  constructor(private handModel: MongoHandModel) {}

  public async get(english: string) {
    const hand = await this.handModel.findByEnglish(english);
    if (hand.length === 0) {
      throw new Error("해당 수화 데이터를 찾을 수 없습니다.");
    }
    return hand;
  }

  async getAll() {
    const hand = await this.handModel.findAll();
    if (hand.length === 0) {
      throw new Error("아무런 수화 데이터가 존재하지 않습니다.");
    }
    return hand;
  }

  async create(newHandData: IHand) {
    const newHand = await this.handModel.create(newHandData);
    if (!newHand) {
      throw new Error("수화 데이터 생성에 실패했습니다.");
    }
    return newHand;
  }
}
