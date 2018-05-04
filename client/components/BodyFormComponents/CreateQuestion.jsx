import React from 'react';
import { Form, Input, Checkbox, Button, Icon, Transition } from 'semantic-ui-react';

import OptionChecklistComponent from './CreateQuestionComponents/OptionChecklistComponent.jsx';

const typeOptions = ['TextBox', 'Options', 'Check-Box', 'Text-Area'];

export default class CreateQuestion extends React.Component{
  constructor(props){
      super(props);
      this.state={
          answerTypeValue: 'TextBox',
          captionValue: '',
          hintValue: '',
          hintCheckbox: false,
          options: [''],
          checkboxval: [''],
          error: false,
          errorDesc: 'Please fill all the required fields',
          errorField: ''
      }
  }

  buttonClicked(type, e) {
    e.preventDefault();

    this.setState({
      answerTypeValue: type
    })

  }

  captionChanged(e, {value}) {
    this.setState({
      captionValue: value
    })
  }

  hintChanged(e, {value}) {
    this.setState({
      hintValue: value
    })
  }

  hintCheckboxChanged() {
    this.setState({ hintCheckbox: !this.state.hintCheckbox })
  }

  // ===========================================================================
  // Option Functions
  // ===========================================================================

  optionChanged(i, value) {
    this.state.options[i] = value;

    this.setState({
      options: this.state.options
    });
  }

  addOption() {
    this.state.options.push('');

    this.setState({
      options: this.state.options
    })
  }

  deleteOption(i) {
    this.state.options.splice(i,1);

    this.setState({
      options: this.state.options
    })
  }
  // =========================================================================


  // ===========================================================================
  // CheckBox Functions
  // ===========================================================================

  checkBoxChanged(i, value) {
    this.state.checkboxval[i] = value;

    this.setState({
      checkboxval: this.state.checkboxval
    });
  }

  addCheckBox() {
    this.state.checkboxval.push('');

    this.setState({
      checkboxval: this.state.checkboxval
    })
  }

  deleteCheckBox(i) {
    this.state.checkboxval.splice(i,1);

    this.setState({
      checkboxval: this.state.checkboxval
    })
  }
  // =========================================================================

  addQuestionClicked() {
    var validationTestPassed = this.validationTest();

    if(validationTestPassed.validationPassed)
    {
      var question = {
        caption: this.state.captionValue,
        type: this.state.answerTypeValue,
        values: 'NIL',
        hint: this.state.hintCheckbox,
        hintValue: this.state.hintValue,
      }

      if(this.state.answerTypeValue == 'Options')
      {
        question.values = this.state.options
      }
      else if(this.state.answerTypeValue == 'Check-Box')
      {
        question.values = this.state.checkboxval
      }

      this.props.addQuestion(question);

      this.setState({
          answerTypeValue: 'TextBox',
          captionValue: '',
          hintValue: '',
          hintCheckbox: false,
          options: [''],
          checkboxval: [''],
          error: false,
          errorDesc: 'Please fill all the required fields',
          errorField: ''
      })
    }
    else {
      this.setState({
        error: true,
        errorDesc: validationTestPassed.errorDesc,
        errorField: validationTestPassed.errorField
      })
    }
  }

  validationTest() {
    console.log('Validating...');
    var returnData = {
      validationPassed: true,
      errorDesc: '',
      errorField: ''
    }
    if(this.state.captionValue == '')
    {
      returnData.validationPassed = false;
      returnData.errorDesc = 'Caption is required';
      returnData.errorField = 'Caption';
    }
    else {
      if(this.state.answerTypeValue == 'Options')
      {
        var passed = false;
        this.state.options.map(function(op, i) {
          if(op.length > 0)
          {
            passed = true;
          }
        })
        if(!passed)
        {
          returnData.validationPassed = false;
          returnData.errorDesc = 'Please enter at least one option field';
          returnData.errorField = 'Option';
        }
      }

      else if(this.state.answerTypeValue == 'Check-Box')
      {
        var passed = false;
        this.state.checkboxval.map(function(op, i) {
          if(op.length > 0)
          {
            passed = true;
          }
        })
        if(!passed)
        {
          returnData.validationPassed = false;
          returnData.errorDesc = 'Please enter at least one checkbox field';
          returnData.errorField = 'Check-Box';
        }
      }
    }

    return returnData;
  }

	render(){
    const { answerTypeValue, hintCheckbox, hintValue } = this.state;
    const that = this;

    // --- Validation ----
    var captionError = false;
    if(this.state.errorField == 'Caption')
      captionError = true;
    // -------------------

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
    var val = false;
    if(answerTypeValue == 'Options')
    {
      val=true;
    }

		return(
      <div>
        <Form style={{marginTop: '10px'}}>
          <Form.Field>
            <Form.TextArea
                  placeholder='Caption'
                  rows={3}
                  error={captionError}
                  value={this.state.captionValue}
                  onChange={this.captionChanged.bind(this)} />
          </Form.Field>

          <Form.Group inline widths='equal'>
            <Form.Field>
              { hintCheckbox &&
                <Form.TextArea
                    placeholder='Hint (optional)'
                    rows={2}
                    value={hintValue}
                    onChange={this.hintChanged.bind(this)} />
              }
            </Form.Field>
            <Form.Field width='3'>
              <Checkbox
                  slider
                  label="Want to give a Hint?"
                  checked={hintCheckbox}
                  onChange={this.hintCheckboxChanged.bind(this)}
                  style={{float: 'right'}} />
            </Form.Field>
          </Form.Group>

          <h5 style={{margin: 0}}>Type</h5>

          <Form.Group inline widths='equal'>
            {buttonGroupComponent}
          </Form.Group>

          {answerTypeValue == 'Options' &&
            <OptionChecklistComponent
                type="Options"
                options={this.state.options}
                optionChanged={this.optionChanged.bind(this)}
                addOption={this.addOption.bind(this)}
                deleteOption={this.deleteOption.bind(this)}
            />
          }

          {answerTypeValue == 'Check-Box' &&
            <OptionChecklistComponent
                type="Check-Box"
                options={this.state.checkboxval}
                optionChanged={this.checkBoxChanged.bind(this)}
                addOption={this.addCheckBox.bind(this)}
                deleteOption={this.deleteCheckBox.bind(this)}
            />
          }

          <Form.Group inline>
            <Form.Button onClick={this.addQuestionClicked.bind(this)} secondary>Add Question</Form.Button>
            { this.state.error &&
              <p style={{color:'red'}}><i>* {this.state.errorDesc}</i></p>
            }
          </Form.Group>
        </Form>
      </div>
		)
	}
}
