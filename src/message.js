import React from 'react'

export default class extends React.Component {
	render() {
		return (
			<div className='escaDealersMessage'>
				<div className='escaDealersMessageInner'>
					{this.props.children}
				</div>
				<style jsx>{`
					.escaDealersMessage{
						position: absolute;
						top: 0;
						right: 0;
						bottom: 0;
						left: 0;
						background: rgba(0, 0, 0, .5);
						color: #fff;
					}
					.escaDealersMessageInner{
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
					}
				`}</style>
			</div>
		)
	}
}
