import React from 'react'

export default class extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div className='escaDealersMarker'>
				{this.props.name}
				<style jsx='true'>{`
					.escaDealersMarker{
						user-select: none;
						background: #000;
						color: #fff;
					}
				`}</style>
			</div>
		)
	}
}
