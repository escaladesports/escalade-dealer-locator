import React from 'react'

import DealerInfo from './marker-dealer-info'

export default class extends React.Component {
	constructor(props){
		super(props)
		this.pinClick = this.pinClick.bind(this)
	}
	pinClick(){
		if(this.props.setActive){
			this.props.setActive(this.props.id)
		}
	}
	render(){
		let directionsLink = `${this.props.address} ${this.props.city}, ${this.props.state} ${this.props.zip}`
		directionsLink = encodeURIComponent(directionsLink)
		directionsLink = `https://www.google.com/maps?saddr&daddr=${directionsLink}`
		return (
			<div className={`escaDealersMarker ${this.props.activeDealer === this.props.id && 'escaDealersActiveMarker'}`}>
				<div className='escaDealerMarkerPin' onClick={this.pinClick}></div>
				<div className='escaDealerMarkerName'>{this.props.name}</div>
				<DealerInfo {...this.props} />
				<style jsx='true'>{`
					.escaDealersMarker{
						user-select: none;
						color: #fff;
						width: auto;
					}
					.escaDealerMarkerName{
						transition: visibility .3s, opacity .3s, transform .3s;
						visibility: hidden;
						opacity: 0;
						position: absolute;
						text-transform: uppercase;
						top: -37px;
						transform: translate(-50%, 10px);
						white-space: nowrap;
						color: #000;
					}
					.escaDealerMarkerPin{
						cursor: pointer;
						width: 30px;
						height: 30px;
						border-radius: 50% 50% 50% 0;
						background: #000;
						position: absolute;
						transform: rotate(-45deg);
						left: 50%;
						top: 50%;
						margin: -20px 0 0 -20px;
						animation-name: bounce;
						animation-fill-mode: both;
						animation-duration: 1s;
					}
					.escaDealerMarkerPin:after{
						content: '';
						display: block;
						width: 14px;
						height: 14px;
						margin: 8px 0 0 8px;
						background: #fff;
						position: absolute;
						border-radius: 50%;
					}

					.escaDealersMarker:hover .escaDealerMarkerName{
						visibility: visible;
						opacity: 1;
						transform: translate(-50%, 0);
					}
					.escaDealersActiveMarker .escaDealerMarkerName{
						display: none;
					}
				`}</style>
			</div>
		)
	}
}
