import React from 'react'
import { render } from 'react-dom'

import DealerLocator from './index'

class EscaDealerLocator{
	constructor(options = {}){
		this.options = {
			brand: 'goalrilla',
			...options
		}
		this.inject()
	}
	inject() {
		const mapEls = document.querySelectorAll('[data-esca-dealers]:not([data-esca-processed])')
		for (let i = mapEls.length; i--;) {
			let el = mapEls[i]
			el.dataset.escaProcessed = true
			render(<DealerLocator brand={this.options.brand} />, el)
		}

		const loadingEls = document.querySelectorAll('[data-esca-dealers-loading]:not([data-esca-processed])')
		for (let i = loadingEls.length; i--;) {
			let el = loadingEls[i]
			el.dataset.escaProcessed = true
			el.style.display = 'none'
		}
		return this
	}
}

//export default EscaDealerLocator
window.EscaDealerLocator = EscaDealerLocator