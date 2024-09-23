import { MissingParamError } from "../errors/missing-param-error.js"

export class RequireFieldsValidation {
  constructor(fieldName) {
    this.fieldName = fieldName
  }

  validate(input) {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName)
    }
  }
}