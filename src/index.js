import React from 'react'

export default class extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div>
				This is a test
				<style jsx>{`
					div{
						color: red;
					}
				`}</style>
			</div>
		)
	}
}
