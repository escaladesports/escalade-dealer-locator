import React from 'react'

import Message from './message'

export default class extends React.Component {
	render(){
		return (
			<div className='escaDealersLoadSpin'>
				<div />
				<div />
				<div />
				<style jsx>{`
					.escaDealersLoad{
						position: absolute;
						top: 0;
						right: 0;
						bottom: 0;
						left: 0;
						background: rgba(0, 0, 0, .5);
					}
					.escaDealersLoadSpin div{
						width: 18px;
						height: 18px;
						background-color: #fff;
						border-radius: 100%;
						display: inline-block;
						margin-right: 7px;
					}
					.escaDealersLoadSpin div:nth-of-type(1){
						animation: bouncedelay 1.4s infinite ease-in-out both;
						animation-delay: -0.32s;
					}
					.escaDealersLoadSpin div:nth-of-type(2){
						animation: bouncedelay 1.4s infinite ease-in-out both;
						animation-delay: -0.16s;
					}
					.escaDealersLoadSpin div:nth-of-type(3){
						animation: bouncedelay 1.4s infinite ease-in-out both;
						margin-right: 0;
					}
					@keyframes bouncedelay {
						0%, 80%, 100% {
							transform: scale(0);
						} 40% {
							transform: scale(1.0);
						}
					}
				`}</style>
			</div>
		)
	}
}
