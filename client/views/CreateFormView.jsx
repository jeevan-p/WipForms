import React from 'react';
import { Container } from 'semantic-ui-react'
import Header from './../components/Header.jsx';
import BodyForm from './../components/BodyForm.jsx';

export default class CreateFormView extends React.Component{
	render(){
		return(
			<div>
				<Header />
				<BodyForm />
			</div>
		)
	}
}
