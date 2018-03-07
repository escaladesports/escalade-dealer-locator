import React from 'react'
import { validate } from 'zippo'

function selectInput(e){
	e.target.select()
}

export default class extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			miles: 30
		}
		this.onChange = this.onChange.bind(this)
		this.changeMiles = this.changeMiles.bind(this)
	}
	onChange(){
		let zip = this.zipEl.value
		let distance = this.distanceEl.value
		if(this.props.onChange && validate(zip) && distance){
			this.props.onChange(zip, distance)
		}
	}
	// Hack value since user loses control if value prop is set with React
	changeMiles(e){
		let val = this.distanceEl.value
		if(val < 1){
			val = 1
		}
		if(val > 100){
			val = 100
		}
		this.setState({
			miles: val
		})
		this.onChange()
	}
	componentDidMount(){
		console.log('MOUNT', this.props)
		if(this.props.zip){
			this.zipEl.value = this.props.zip
		}
		if(this.props.miles){
			this.setState({
				miles: this.props.miles
			})
		}
	}
	render(){
		return (
			<div className='escaDealersInput'>
				<span>Dealers within</span>
				<input
					className='escaDealersInputDistance'
					ref={el => this.distanceEl = el}
					type='text'
					value={this.state.miles}
					onChange={this.changeMiles}
					onClick={selectInput}
					min='1'
					step='1'
					max='100' />
				<span>miles of</span>
				<input
					className='escaDealersInputZip'
					ref={el => this.zipEl = el}
					type='text'
					onChange={this.onChange}
					onClick={selectInput}
					placeholder='Zip Code' />
			</div>
		)
	}
}
