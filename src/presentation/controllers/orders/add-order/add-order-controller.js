import { badRequest, noContent, serverError } from "../../../helpers/http/http-helper.js"

class AddOrderController {
  constructor(validation, addOrder) {
    this.validation = validation
    this.addOrder = addOrder
  }

  async handle(httpRequest) {
    try {
      const err = this.validation.validate(httpRequest.body)
      if (err) {
        return badRequest(err)
      }

      const { customerId, status, price, estimatedDate, createdAt } = httpRequest.body
      await this.addOrder.add({ customerId, status, price, estimatedDate, createdAt })
      return noContent()
    } catch (err) {
      return serverError(err)
    }
  }
}

export default AddOrderController