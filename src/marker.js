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
		return (
			<div className={`escaDealersMarker ${this.props.activeDealer === this.props.id && 'escaDealersActiveMarker'}`}>
				<div className='escaDealerMarkerPin' onClick={this.pinClick}></div>
				<div className='escaDealerMarkerName'>{this.props.name}</div>
				<div className='escaDealerMarkerInfo'>
					<div className='escaDealerMarkerInfoName'>{this.props.name}</div>
					<div className='escaDealerMarkerInfoAddress'>
						{this.props.address}<br />
						{this.props.city}, {this.props.state} {this.props.zip}
					</div>
					<div className='escaDealerMarkerInfoLink'>
						<a href={this.props.web} target="_blank">Visit website</a>
					</div>
					<div className='escaDealerMarkerInfoEmail'>
						<a href={'mailto:' + this.props.email}>{this.props.email}</a>
					</div>
					<div className='escaDealerMarkerInfoPhone'>
						<a href={'tel:' + this.props.phone}>{this.props.phone}</a>
					</div>
				</div>
				<style jsx='true'>{`
					.escaDealersMarker{
						user-select: none;
						color: #fff;
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
						transform: translate(-50%, -92%);
						background-color: #000;
						padding:
					}
					.escaDealerMarkerInfo a{
						color: #fff;
						text-decoration-skip: ink;
						text-decoration-skip-ink: auto;
					}
				`}</style>
			</div>
		)
	}
}
