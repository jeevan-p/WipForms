import React from 'react';
import { Segment } from 'semantic-ui-react';

const typeOptions = ['TextBox', 'Options', 'Check-List', 'Text-Area'];

export default class CheckListComponent extends React.Component{
  constructor(props){
      super(props);
      this.state={

      }
  }

	render(){

		return(
      <Segment raised>
        CheckList Component Comes Here
      </Segment>
		)
	}
}
