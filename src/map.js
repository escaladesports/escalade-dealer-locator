import React from 'react'
import Map from 'google-map-react'

import defaultMapOptions from './default-map-options'

export default class extends React.Component {
	constructor(props){
		super(props)
		this.createMapOptions = this.createMapOptions.bind(this)
	}
	createMapOptions(){
		return {
			...defaultMapOptions,
			...this.props.options,
		}
	}
	render(){
		return (
			<div className='escaDealersMap'>
				<Map
					options={this.createMapOptions}
					defaultCenter={this.props.center || {
						lat: 39,
						lng: -95,
					}}
					defaultZoom={this.props.zoom || 3}
				/>
				<style jsx='true'>{`
					.escaDealersMap{
						position: absolute;
						top: 0;
						right: 0;
						bottom: 0;
						left: 0;
					}
				`}</style>
			</div>
		)
	}
}