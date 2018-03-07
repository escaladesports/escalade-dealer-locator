import React from 'react'

import Marker from './marker'
import Loading from './loading-spinner'
import Map from './map'
import Input from './input'
import fetch from './fetch'
import Message from './message'

let reqId = 0

export default class extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			dealers: [],
		}
		this.getDealers = this.getDealers.bind(this)
	}
	async getDealers(zip, distance) {
		reqId++
		let curReqId = reqId
		this.setState({
			message: <Loading />,
		})
		console.log(`Fetching data for zip ${zip} within ${distance}...`)
		if('ga' in window){
			window.ga('send', 'event', {
				eventCategory: 'Dealer Locator',
				eventAction: 'submit'
			})
		}
		let data = await fetch({
			brand: this.props.brand,
			zip: zip,
			proximity: distance,
		})
		console.log('Dealer results:', data)
		if(curReqId !== reqId) return
		if (data && data.results && data.results.length) {
			this.setState({
				dealers: data.results,
				message: false,
				zip,
				distance,
			})
		}
		else{
			this.setState({
				dealers: [],
				message: 'No dealers found',
				zip,
				distance,
			})
		}
	}
	componentDidMount(){
		if('ga' in window){
			window.ga('send', 'event', {
				eventCategory: 'Dealer Locator',
				eventAction: 'load'
			})
		}
		if(this.props.zip){
			this.getDealers(this.props.zip, this.props.distance || 30)
		}
	}
	render(){
		return (
			<div className='escaDealers'>
				<Map dealers={this.state.dealers} />
				{this.state.message &&
					<Message>{this.state.message}</Message>
				}
				<Input onChange={this.getDealers} zip={this.props.zip} miles={this.props.miles} />
				{/*
				<style jsx global>{`
					.escaDealers{
						font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
						position: relative;
						height: 600px;
						width: 100%;
						user-select: none;
					}



					.escaDealersInput{
						text-transform: uppercase;
						color: #fff;
						font-size: .8em;
						display: inline-block;
						position: absolute;
						left: 0;
						top: 0;
						background-color: rgba(0, 0, 0, .3);
						padding: 10px 15px;
					}
					.escaDealersInputDistance, .escaDealersInputZip{
						background: transparent;
						outline: 0;
						border: 0;
						color: #fff;
						text-align: center;
						display: inline-block;
						font-size: 1em;
						border-bottom: 1px solid #fff;
						margin: 0 10px;
					}
					.escaDealersInputDistance{
						width: 35px;
					}
					.escaDealersInputZip{
						width: 80px;
						margin-right: 0;

						&::-webkit-input-placeholder{
							color: #ccc;
						}
						&::-moz-placeholder {
							color: #ccc;
						}
						&:-ms-input-placeholder {
							color: #ccc;
						}
						&:-moz-placeholder {
							color: #ccc;
						}
					}

				`}</style>
				*/}
			</div>
		)
	}
}
