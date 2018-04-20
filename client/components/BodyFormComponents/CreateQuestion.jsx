import React from 'react';
import { Form, Input, Checkbox, Button, Icon, Transition } from 'semantic-ui-react';

import OptionComponent from './OptionComponent.jsx';
import CheckListComponent from './CheckListComponent.jsx';

const typeOptions = ['TextBox', 'Options', 'Check-List', 'Text-Area'];

export default class CreateQuestion extends React.Component{
  constructor(props){
      super(props);
      this.state={
          answerTypeValue: 'Options',
          textAreaValue: ""
      }
  }

  buttonClicked(type, e) {
    e.preventDefault();

    this.setState({
      answerTypeValue: type
    })

  }

  textAreaChange(e, {value}) {

    this.setState({
      textAreaValue: value
    })
  }

  buttonClickedJ() {
    this.props.data(this.state.textAreaValue);
  }

	render(){
    const { answerTypeValue, textAreaValue } = this.state;
    const that = this;

    var buttonGroupComponent = typeOptions.map(function(opVal, index) {

      var disableButton = false;
      if(opVal == answerTypeValue)
      {  disableButton = true;}

      return(
        <Form.Button
              key={index}
              basic
              color='black'
              style={{width: '100%', minHeight: '50px'}}
              disabled={disableButton}
              onClick={that.buttonClicked.bind(that, opVal)}>

          {disableButton &&
            <div>
              <Icon name='checkmark box' />
              <b>{opVal}</b>
            </div>
          }
          {!disableButton &&
            <div>
              <Icon name='square outline' />
              {opVal}
            </div>
          }

        </Form.Button>
      )
    });

		return(
      <div><Form style={{marginTop: '10px'}}>
        <Form.Field>
          <Form.TextArea placeholder='Caption' rows={3} value={textAreaValue} onChange={this.textAreaChange.bind(this)}/>
        </Form.Field>
        <h5 style={{margin: 0}}>Type</h5>
        <Form.Group inline widths='equal'>
          {buttonGroupComponent}
        </Form.Group>
        {answerTypeValue == 'Options' &&
          <OptionComponent />
        }
        {answerTypeValue == 'Check-List' &&
          <CheckListComponent />
        }
        <Form.Button onClick={this.buttonClickedJ.bind(this)}>Submit</Form.Button>
      </Form>
      {/* <Transition>

      </Transition> */}
      </div>
		)
	}
}
