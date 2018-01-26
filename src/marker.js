import React from 'react'

export default class extends React.Component {
	constructor(props){
		super(props)
		this.pinClick = this.pinClick.bind(this)
	}
	pinClick(){
		if(this.props.onClick){
			this.props.onClick(this.props.id)
		}
	}
	render(){
		let directionsLink = `${this.props.address} ${this.props.city}, ${this.props.state} ${this.props.zip}`
		directionsLink = encodeURIComponent(urlAddress)
		directionsLink = `https://www.google.com/maps?saddr&daddr=${urlAddress}`
		return (
			<div className={`escaDealersMarker ${this.props.activeDealer === this.props.id && 'escaDealersActiveMarker'}`}>
				<div className='escaDealerMarkerPin' onClick={this.pinClick}></div>
				<div className='escaDealerMarkerName'>{this.props.name}</div>
				<div className='escaDealerMarkerInfo'>
					<div className='escaDealerMarkerInfoTop'>
						<div className='escaDealerMarkerInfoName'>{this.props.name}</div>
						<div className='escaDealerMarkerInfoAddress'>
							{this.props.address}<br />
							{this.props.city}, {this.props.state} {this.props.zip}
						</div>
						<div className='escaDealersMarkerInfoDirections'>
							<a href={directionsLink}>Get Directions</a>
						</div>
					</div>
					<div className='escaDealerMarkerInfoBottom'>
						<div className='escaDealerMarkerInfoLink'>
							<a href={this.props.web} target="_blank">Visit Website</a>
						</div>
						<div className='escaDealerMarkerInfoEmail'>
							<a href={'mailto:' + this.props.email}>{this.props.email}</a>
						</div>
						<div className='escaDealerMarkerInfoPhone'>
							<a href={'tel:' + this.props.phone}>{this.props.phone}</a>
						</div>
					</div>
				</div>
				<style jsx='true'>{`
					.escaDealersMarker{
						user-select: none;
						color: #fff;
					}
					.escaDealerMarkerInfo{
						display: none;
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
						background: #aaa;
						position: absolute;
						border-radius: 50%;
						z-index: 100;
					}
					.escaDealerMarkerInfo{
						width: 175px;
						white-space: nowrap;
						padding: 10px;
						cursor: default;
						transform: translate(-50%, -96%);
						background-color: #000;
						font-size: 1.2em;
						line-height: 1.4em;
					}
					.escaDealerMarkerInfo a{
						color: #fff;
						text-decoration-skip: ink;
						text-decoration-skip-ink: auto;
						margin-top: 2px;
						display: inline-block;
						text-decoration: none;
					}
					.escaDealerMarkerInfoName{
						font-weight: bold;
					}
					.escaDealerMarkerInfoTop{
						padding-bottom: 10px;
						border-bottom: 1px solid #fff;
					}
					.escaDealerMarkerInfoBottom{
						padding-top: 10px;
					}

					.escaDealersMarker:hover .escaDealerMarkerName{
						visibility: visible;
						opacity: 1;
						transform: translate(-50%, 0);
					}
					.escaDealersActiveMarker .escaDealerMarkerName{
						display: none;
					}
					.escaDealersActiveMarker .escaDealerMarkerInfo{
						display: block;
					}
				`}</style>
			</div>
		)
	}
}
