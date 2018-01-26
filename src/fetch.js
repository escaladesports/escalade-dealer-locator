import fetch from 'isomorphic-fetch'

import apis from './apis'

let env = 'production'
if(process && process.env && process.env.NODE_ENV){
	env = process.env.NODE_ENV
}

export default async function(options = {}){

	// Set default options
	options = {
		brand: 'goalrilla',
		proximity: 30,
		zip: 47711,
		territory: 'us',
		environment: env,
		...options
	}
	if(!options.api){
		if (apis[env] && apis[env][options.territory]){
			options.api = apis[env][options.territory]
		}
		else{
			options.api = apis.production[options.territory]
		}
	}

	// Fetch data
	try {
		let fetchUrl
		if(options.territory === 'us'){
			fetchUrl = `${options.api}/${options.brand}/${options.zip}/${options.proximity}`
		}
		else{
			fetchUrl = `${options.api}/${options.brand}`
		}
		let res = await fetch(fetchUrl)
		res = await res.json()
		return res
	}
	catch(err){
		console.log(err)
	}

	return false
}