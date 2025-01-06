import client from "../helper/app-data-source.js";

export class AddOrderRepository {
  async add(addOrderRepoParams) {
    const {
      customerId,
      description,
      status,
      price,
      estimatedDate
    } = addOrderRepoParams

    const values = [customerId, description, status, price, estimatedDate]
    client.query(`INSERT INTO orders(customerId, description, status, price, estimatedDate) VALUES($1,$2,$3,$4,$5)`, values)
  }
}