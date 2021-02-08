export class Product {
	constructor(
		private readonly _product_id: number,
		private readonly _model: string,
		private readonly _sku: string,
		private readonly _upc: string,
		private readonly _ean: string,
		private readonly _jan: string,
		private readonly _isbn: string,
		private readonly _mpn: string,
		private readonly _location: string,
		private readonly _quantity: number,
		private readonly _stock_status_id: number,
		private readonly _image: string,
		private readonly _manufacturer_id: number,
		private readonly _shipping: number,
		private readonly _price: number,
		private readonly _points: number,
		private readonly _tax_class_id: number,
		private readonly _date_available: string,
		private readonly _weight: number,
		private readonly _weight_class_id: number,
		private readonly _length: number,
		private readonly _width: number,
		private readonly _height: number,
		private readonly _length_class_id: number,
		private readonly _subtract: number,
		private readonly _minimum: number,
		private readonly _sort_order: number,
		private readonly _status: number,
		private readonly _viewed: number,
		private readonly _date_added: string,
		private readonly _date_modified: string,
		private readonly _loadxlsprice_status: number,
		private readonly _dn_id: number
	) {}

	public get productId(): number {
		return this._product_id;
	}
}

// product_id
// model
// sku
// upc
// ean
// jan
// isbn
// mpn
// location
// quantity
// stock_status_id
// image
// manufacturer_id
// shipping
// price
// points
// tax_class_id
// date_available
// weight
// weight_class_id
// length
// width
// height
// length_class_id
// subtract
// minimum
// sort_order
// status
// viewed
// date_added
// date_modified
// loadxlsprice_status
// dn_id
