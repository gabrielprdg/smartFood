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

      const { customerId, description, status, price, estimatedDate } = httpRequest.body
      await this.addOrder.add({ customerId, description, status, price, estimatedDate })
      return noContent()
    } catch (err) {
      return serverError(err)
    }
  }
}

export default AddOrderController