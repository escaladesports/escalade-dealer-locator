import React from 'react'
import { validate } from 'zippo'

export default class extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			miles: 30
		}
		this.onChange = this.onChange.bind(this)
		this.changeMiles = this.changeMiles.bind(this)
	}
	onChange(e){
		if(this.props.onChange && validate(e.target.value)){
			this.props.onChange(e.target.value)
		}
	}
	// Hack value since user loses control if value prop is set with React
	changeMiles(e){
		let val = e.target.value
		if(val < 1){
			val = 1
		}
		if(val > 100){
			val = 100
		}
		this.setState({
			miles: val
		})
	}
	render(){
		return (
			<div className='escaDealersInput'>
				<span>Search within</span>
				<input
					className='escaDealersInputDistance'
					type='text'
					value={this.state.miles}
					onChange={this.changeMiles}
					min='1'
					step='1'
					max='100' />
				<span>miles of</span>
				<input
					className='escaDealersInputZip'
					type='text'
					onChange={this.onChange}
					placeholder='Zip Code' />
				<style jsx='true'>{`
					.escaDealersInput{
						text-transform: uppercase;
						color: #fff;
						font-size: .8em;
						display: inline-block;
						position: absolute;
						left: 0;
						top: 0;
						background-color: rgba(0, 0, 0, .3);
						padding: 20px;
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
						width: 100px;
					}
					.escaDealersInputZip::-webkit-input-placeholder {
						color: #ccc !important;
					}

					.escaDealersInputZip:-moz-placeholder {
						color: #ccc !important;
					}

					.escaDealersInputZip::-moz-placeholder {
						color: #ccc !important;
					}

					.escaDealersInputZip:-ms-input-placeholder {
						color: #ccc !important;
					}
				`}</style>
			</div>
		)
	}
}
