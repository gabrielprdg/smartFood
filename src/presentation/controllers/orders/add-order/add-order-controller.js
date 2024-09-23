import { badRequest } from "../../../helpers/http/http-helper.js"

class AddOrderController {
  constructor(validation, addOrder) {
    this.validation = validation
    this.addOrder = addOrder
  }

  async handle(httpRequest) {
    const err = this.validation.validate(httpRequest.body)

    if (err) {
      return badRequest(err)
    }

  }
}

export default AddOrderController