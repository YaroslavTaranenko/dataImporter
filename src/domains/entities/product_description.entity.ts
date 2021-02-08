export class ProductDescription {
	constructor(
		private readonly _product_id: number,
		private readonly _language_id: number,
		private readonly _name: string,
		private readonly _description: string,
		private readonly _tag: string,
		private readonly _meta_title: string,
		private readonly _header: string,
		private readonly _short_description: string,
		private readonly _meta_description: string,
		private readonly _meta_keyword: string
	) {}
}
