import React from 'react'
import Map from 'google-map-react'
import { fitBounds } from 'google-map-react/utils'

import defaultMapOptions from './default-map-options'
import Marker from './marker'

export default class extends React.Component {
	constructor(props){
		super(props)
		this.state = {}
		this.createMapOptions = this.createMapOptions.bind(this)
		this.recenter = this.recenter.bind(this)
		this.activateDealer = this.activateDealer.bind(this)
	}
	componentDidUpdate(prevProps) {
		if(prevProps.dealers !== this.props.dealers){
			this.recenter()
			this.activateDealer(false)
		}
	}

	createMapOptions(){
		return {
			...defaultMapOptions,
			...this.props.options,

			bounds: {
				nw: new google.maps.LatLng(0, 0),
				se: new google.maps.LatLng(20, 20),
			}
		}
	}
	recenter(){
		console.log('Recentering dealer map...')
		const bounds = new google.maps.LatLngBounds()
		this.props.dealers.forEach(dealer => {
			bounds.extend(new google.maps.LatLng(dealer.latitude, dealer.longitude))
		})
		const newBounds = {
			ne: {
				lat: bounds.getNorthEast().lat(),
				lng: bounds.getNorthEast().lng()
			},
			sw: {
				lat: bounds.getSouthWest().lat(),
				lng: bounds.getSouthWest().lng()
			},
		}
		const size = {
			width: this.mapEl.offsetWidth,
			height: this.mapEl.offsetHeight,
		}
		console.log('SIZE:', size)
		const { center, zoom } = fitBounds(newBounds, size)
		console.log('CENTER:', center)
		console.log('ZOOM:', zoom)
		this.setState({
			center: center,
			zoom: zoom,
		})
	}
	activateDealer(id){
		if(id === this.state.activeDealer){
			id = false
		}
		this.setState({
			activeDealer: id,
		})
	}
	render(){
		return (
			<div className='escaDealersMap' ref={el => this.mapEl = el}>
				<Map
					options={this.createMapOptions}
					defaultCenter={{
						lat: 39,
						lng: -95,
					}}
					center={this.state.center}
					defaultZoom={3}
					zoom={this.state.zoom || 3}
					>
					{this.props.dealers.map((dealer, key) => {
						return <Marker
							lat={dealer.latitude}
							lng={dealer.longitude}
							setActive={this.activateDealer}
							activeDealer={this.state.activeDealer}
							{...dealer}
							key={`dealerMarker${dealer.id}`} />
					})}
				</Map>
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
