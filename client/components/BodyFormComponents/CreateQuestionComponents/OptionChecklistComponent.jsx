import React from 'react';
import { Segment, Form, Input, Button } from 'semantic-ui-react';

const typeOptions = ['TextBox', 'Options', 'Check-List', 'Text-Area'];

export default class OptionChecklistComponent extends React.Component{
  constructor(props){
      super(props);
      // this.state={
      //
      // }
  }

  optionChanged(i, e, {value}) {
    this.props.optionChanged(i, value);
  }

  addOption(e) {
    this.props.addOption();
  }

  deleteOption(i, e) {
    this.props.deleteOption(i);
  }

	render(){

    const {options} = this.props;

    var that = this;

    console.log(this.props.type);
    var OptionInputs = options.map(function(opVal, index) {
      var placeholderValue = 'Enter option value';

      if(that.props.type == 'Check-Box')
      { placeholderValue = 'Enter CheckList value';}

      var deleteButtonVisibility = 'initial';
      var addButtonVisibility = 'none';

      if(index == 0)
      {
        placeholderValue = 'Enter first option value (mandatory)';

        if(that.props.type == 'Check-Box')
        { placeholderValue = 'Enter first CheckList value (mandatory)';}

        deleteButtonVisibility = 'none';

        if((options.length == 1) && (options[options.length-1] != ''))
        {
          addButtonVisibility = 'initial';
        }
      }
      else if((index == options.length-1) && (options[options.length-1] != ''))
      {
        addButtonVisibility = 'initial';
      }
      return(
        <Form.Group key={index}>
          <Form.Field
              control={Input}
              placeholder={placeholderValue}
              width={8}
              value={opVal}
              onChange={that.optionChanged.bind(that, index)}
          />
          <Form.Field
              control={Button}
              onClick={that.deleteOption.bind(that, index)}
              style={{display: deleteButtonVisibility}}
              icon='trash'
          />
          <Form.Field
              control={Button}
              basic
              onClick={that.addOption.bind(that)}
              style={{display: addButtonVisibility}}
              icon='plus'
          />
        </Form.Group>
      );
    });

		return(
      <Segment raised>
        <b>{this.props.type}</b>
        {OptionInputs}
      </Segment>
		)
	}
}
