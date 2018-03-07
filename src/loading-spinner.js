import React from 'react'

import Message from './message'

export default class extends React.Component {
	render(){
		return (
			<div className='escaDealersLoadSpin'>
				<div />
				{/*
				<style jsx global>{`
					.escaDealersLoadSpin{
						&:before, &:after{
							content: '';
						}
						div, &:before, &:after{
							width: 18px;
							height: 18px;
							background-color: #fff;
							border-radius: 100%;
							display: inline-block;
							margin-right: 7px;
						}
						&:before{
							animation: bouncedelay 1.4s infinite ease-in-out both;
							animation-delay: -0.32s;
						}
						div{
							animation: bouncedelay 1.4s infinite ease-in-out both;
							animation-delay: -0.16s;
						}
						&:after{
							animation: bouncedelay 1.4s infinite ease-in-out both;
							margin-right: 0;
						}
					}
					@keyframes bouncedelay {
						0%, 80%, 100% {
							transform: scale(0);
						}
						40% {
							transform: scale(1.0);
						}
					}
				`}</style>
				*/}
			</div>
		)
	}
}
