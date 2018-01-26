import React from 'react'
import { validate } from 'zippo'

export default class extends React.Component {
	constructor(props){
		super(props)
		this.onChange = this.onChange.bind(this)
	}
	onChange(e){
		if(this.props.onChange && validate(e.target.value)){
			this.props.onChange(e.target.value)
		}
	}
	render(){
		return (
			<div className='escaDealersInput'>
				<input
					className='escaDealersInputZip'
					type='text'
					onChange={this.onChange}
					placeholder='Zip Code' />
				<style jsx='true'>{`
					.escaDealersInput{
						max-width: 120px;
						position: absolute;
						left: 10px;
						top: 10px;
					}
					.escaDealersInputZip{
						display: block;
						outline: 0;
						border: 1px solid #ccc;
						padding: 0 10px;
						width: 100%;
						font-size: 1em;
						height: 30px;
						&:active, &:focus{
							border: 1px solid #000;
						}
					}
				`}</style>
			</div>
		)
	}
}
