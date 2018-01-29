import React from 'react'
import { render } from 'react-dom'

import Map from './index'

window.escaDealersInject = function escaDealersInject(){
	const mapEls = document.querySelectorAll('[data-esca-dealers]:not([data-esca-processed])')
	for(let i = mapEls.length; i--;){
		let el = mapEls[i]
		el.dataset.escaProcessed = true
		render(<Map />, el)
	}

	const loadingEls = document.querySelectorAll('[data-esca-dealers-loading]:not([data-esca-processed])')
	for (let i = loadingEls.length; i--;) {
		let el = loadingEls[i]
		el.dataset.escaProcessed = true
		el.style.display = 'none'
	}
}

escaDealersInject()