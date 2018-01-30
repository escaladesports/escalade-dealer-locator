import React from 'react'

export default class extends React.Component {
	constructor(props){
		super(props)
		this.closeInfo = this.closeInfo.bind(this)
	}
	closeInfo(){
		if (this.props.setActive){
			this.props.setActive(false)
		}
	}
	render(){
		let directionsLink = `${this.props.address} ${this.props.city}, ${this.props.state} ${this.props.zip}`
		directionsLink = encodeURIComponent(directionsLink)
		directionsLink = `https://www.google.com/maps?saddr&daddr=${directionsLink}`
		return (
			<div className={`escaDealerMarkerInfo ${this.props.activeDealer === this.props.id && 'escaDealersActiveMarker'}`}>
				<div className='escaDealerMarkerInfoTop'>
					<div className='escaDealerMarkerInfoName'>{this.props.name}</div>
					<div className='escaDealerMarkerInfoAddress'>
						{this.props.address}<br />
						{this.props.city}, {this.props.state} {this.props.zip}
					</div>
					<div className='escaDealersMarkerInfoDirections'>
						<a href={directionsLink} target='_blank'>Get Directions</a>
					</div>
				</div>
				<div className='escaDealerMarkerInfoBottom'>
					{this.props.web &&
						<div className='escaDealerMarkerInfoLink'>
							<a href={this.props.web} target='_blank'>Visit Website</a>
						</div>
					}
					{this.props.email &&
						<div className='escaDealerMarkerInfoEmail'>
							<a href={`mailto:${this.props.email}`}>{this.props.email}</a>
						</div>
					}
					{this.props.phone &&
						<div className='escaDealerMarkerInfoPhone'>
							<a href={`tel:${this.props.phone}`}>{this.props.phone}</a>
						</div>
					}
				</div>
				<div className='escaDealerMarkerInfoX' onClick={this.closeInfo}></div>
				<style jsx>{`
					.escaDealerMarkerInfo{
						display: none;
						white-space: nowrap;
						padding: 13px 40px 13px 15px;
						cursor: default;
						transform: translate(-50%, -96%);
						position: absolute;
						z-index: 3;
						left: 50%;
						background-color: #000;
						font-size: 1.2em;
						line-height: 1.4em;
						a{
							color: #fff;
							text-decoration-skip: ink;
							text-decoration-skip-ink: auto;
							margin-top: 2px;
							display: inline-block;
							text-decoration: none;
						}
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
					.escaDealersMarkerInfoDirections{
						margin-top: 5px;
					}
					.escaDealerMarkerInfoX{
						font-size: 1.7em;
						position: absolute;
						top: 9px;
						right: 10px;
						cursor: pointer;
						width: 20px;
						height: 20px;
						&:before, &:after{
							content: '';
							display: inline-block;
							position: absolute;
							width: 3px;
							height: 17px;
							background: #fff;
							left: 50%;

						}
						&:before{
							transform: rotate(45deg);
						}
						&:after{
							transform: rotate(-45deg);
						}
					}

					.escaDealersActiveMarker{
						display: block;
					}
				`}</style>
			</div>
		)
	}
}
