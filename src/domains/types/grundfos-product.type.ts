export type GrundfosProductParam = {
    name: String,
    value: String
}

export type GrundfosProduct = {
    vendorId: String,
    categoryId: Number,
    vendor: String,
    model: String,
    url: String,
    pictures: String[],
    documentations: String[],
    price: Number,
    currency: String,
    description: String,
    params: GrundfosProductParam[]
}