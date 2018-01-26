import React from 'react'

import Map from './map'
import Input from './input'
import fetch from './fetch'

export default class extends React.Component {
	constructor(props){
		super(props)
		this.state = {}
		this.getDealers = this.getDealers.bind(this)
	}
	async getDealers(zip){
		console.log(zip)
		let data = await fetch({
			zip: zip
		})
		console.log(data)
	}
	render(){
		return (
			<div className='escaDealers'>
				<Map />
				<Input onChange={this.getDealers} />
				<style jsx='true'>{`
					.escaDealers{
						position: relative;
						height: 600px;
						width: 100%;
					}
				`}</style>
			</div>
		)
	}
}
