import React from 'react'

export default class extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div className='escaDealersMarker'>
				<div className='escaDealerMarkerPin'></div>
				<div className='escaDealerMarkerName'>{this.props.name}</div>

				<style jsx='true'>{`
					.escaDealersMarker{
						user-select: none;
						background: #000;
						color: #fff;
						cursor: pointer;
					}
					.escaDealerMarkerName{
						position: absolute;
						text-transform: uppercase;
						top: -37px;
						transform: translate(-50%, 0);
						white-space: nowrap;
					}
					.escaDealerMarkerPin{
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
				`}</style>
			</div>
		)
	}
}
