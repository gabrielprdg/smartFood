class AddOrder {
  constructor(addOrderRepository) {
    this.addOrderRepository = addOrderRepository
  }

  async add(data) {
    await this.addOrderRepository.add(data)
  }
}

export default AddOrder