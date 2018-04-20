import React from 'react';
import { Segment, Form, Input, Button } from 'semantic-ui-react';

const typeOptions = ['TextBox', 'Options', 'Check-List', 'Text-Area'];

export default class OptionComponent extends React.Component{
  constructor(props){
      super(props);
      this.state={
        options: ['', '']
      }
  }

	render(){

    const {options} = this.state;

		return(
      <Segment raised>

        <Form.Field
            control={Input}
            label='Options'
            placeholder='Enter first option (mandatory)'
            width={8}
            style={{paddingRight: '7px'}}
             />
        <Form.Group>
          <Form.Field
              control={Input}
              placeholder='Enter option'
              width={8}
              style={{paddingRight: '0px'}}
               />
          <Form.Field
              control={Button}
              icon='trash'
          />
        </Form.Group>
        <Form.Group>
          <Form.Field
              control={Input}
              placeholder='Enter option'
              width={8}
              style={{paddingRight: '0px'}}
               />
          <Form.Field
              control={Button}
              icon='trash'
          />
          <Form.Field
              control={Button}
              basic
              icon='plus'
          />
        </Form.Group>

      </Segment>
		)
	}
}
