const offers = (offers:any):any => {
	const result = [];
	for(let i = 0; i < offers.length; i++){
		let tmp = {
			vendorId: offers[i].$.id,
			categoryId: offers[i].categoriId[0],
			vendor: offers[i].vendor[0],
			model: offers[i].model[0],
			url: offers[i].url[0],
			pictures: offers[i].picture,
			documentations: offers[i].documentation,
			price: { 
				amount: offers[i].price[0],
				currency: offers[i].currencyId[0]
			},
			description: offers[i].description[0],
			params: []
		}
		for(let j = 0; j < offers[i].params.length; j++){
			tmp.params.push({
				name: offers[i].params[j].$.name,
				value: offers[i].params[j]._
			});
		}
		result.push(tmp);
	}
	return result;
}
const categories = (categories:any):any => {
	const result = [];
	for(let i = 0; i < categories.length; i++){
		result.push({
			id: categories[i].$.id,
			name: categories[i]._
		});
	}

	return result;
}


export { categories, offers };
