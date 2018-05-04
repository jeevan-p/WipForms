import React from 'react';
import { Icon, Form, Segment, Button } from 'semantic-ui-react';

import QuestionComponent from './DisplayQuestionComponents/QuestionComponent.jsx';

export default class DisplayQuestion extends React.Component{
  constructor(props){
    super(props);
    // this.state={
    //
    // }
  }

  quesDivMouseEnter(ind) {
    var delBtnId = 'deleteButton' + ind;
    document.getElementById(delBtnId).classList.add('show');
    document.getElementById(delBtnId).classList.remove('hide');

    var updBtnId = 'updateButton' + ind;
    document.getElementById(updBtnId).classList.add('show');
    document.getElementById(updBtnId).classList.remove('hide');

  }

  quesDivMouseLeave(ind) {
    var delBtnId = 'deleteButton' + ind;
    document.getElementById(delBtnId).classList.add('hide');
    document.getElementById(delBtnId).classList.remove('show');

    var updBtnId = 'updateButton' + ind;
    document.getElementById(updBtnId).classList.add('hide');
    document.getElementById(updBtnId).classList.remove('show');
  }

  render(){
    const { questions } = this.props;
    var that = this;
    const displayComponent = questions.map(function(ques, index) {
      var delBtnId = 'deleteButton' + index;
      var updBtnId = 'updateButton' + index;
      return(
        <div
              className='questionSegment'
              key={index}
              onMouseEnter={that.quesDivMouseEnter.bind(that, index)}
              onMouseLeave={that.quesDivMouseLeave.bind(that, index)}>
          <Button
              id={updBtnId}
              className='hide'
              basic
              icon="edit"
              style={{position: 'absolute', right: '60'}} />
          <Button
              id={delBtnId}
              className='hide'
              basic
              icon="trash"

              style={{position: 'absolute', right: '10'}} />
          <QuestionComponent ques={ques} key={index} />
        </div>
      );
    })
    return(
      <Form style={{marginTop: '15px'}}>
        {displayComponent}
      </Form>
		)
	}
}
