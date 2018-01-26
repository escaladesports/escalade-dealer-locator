import React from 'react'

export default class extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div className='escaDealersMarker'
				lat={this.props.latitude}
				lng={this.props.longitude}
				>
				{this.props.name}
				<style jsx='true'>{`
					.escaDealersMarker{
						background: #000;
						color: #fff;
					}
				`}</style>
			</div>
		)
	}
}
