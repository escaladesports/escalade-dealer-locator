import React from 'react'

import Marker from './marker'

import Map from './map'
import Input from './input'
import fetch from './fetch'

export default class extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			dealers: []
		}
		this.getDealers = this.getDealers.bind(this)
	}
	async getDealers(zip){
		let data = await fetch({
			zip: zip
		})
		console.log(data)
		if (data.results) {
			this.setState({
				dealers: data.results
			})
		}
	}
	render(){
		return (
			<div className='escaDealers'>
				<Map dealers={this.state.dealers} />
				<Input onChange={this.getDealers} />

				<style jsx='true'>{`
					.escaDealers{
						font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
						position: relative;
						height: 600px;
						width: 100%;
					}
				`}</style>
			</div>
		)
	}
}
