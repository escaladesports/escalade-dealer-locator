import React from 'react'

import Marker from './marker'
import Loading from './loading-spinner'
import Map from './map'
import Input from './input'
import fetch from './fetch'

export default class extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			dealers: [],
		}
		this.getDealers = this.getDealers.bind(this)
	}
	async getDealers(zip, distance){
		this.setState({ loading: true })
		console.log(`Fetching data for zip ${zip} within ${distance}...`)
		let data = await fetch({
			zip: zip,
			proximity: distance,
		})
		console.log('Dealer results:', data)
		if (data && data.results && data.results.length) {
			this.setState({
				dealers: data.results,
			})
		}
		this.setState({ loading: false })
	}
	render(){
		return (
			<div className='escaDealers'>
				<Map dealers={this.state.dealers} />
				{this.state.loading &&
					<Loading />
				}
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
