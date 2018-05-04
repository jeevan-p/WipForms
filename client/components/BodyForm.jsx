import React from 'react';
import { Container, Grid, Icon, Segment } from 'semantic-ui-react';

import HeaderSubheader from './BodyFormComponents/HeaderSubheader.jsx';
import DisplayQuestion from './BodyFormComponents/DisplayQuestion.jsx';
import CreateQuestion from './BodyFormComponents/CreateQuestion.jsx';


export default class BodyForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      header: '',
      subHeader: '',
      questions: [
        {caption: 'Name', type: 'TextBox', values: 'NIL', hint: true, hintValue: 'You need to specify your full name'},
        {caption: 'Gender', type: 'Options', values: ['Male', 'Female'], hint: false, hintValue: ''},
      ],
      instructions: ["Instruction 1", "Instruction 2"]
    }
  }

  // Header and SubHeader ======================================================
  headerChange(newHeader) {
    this.setState({
      header: newHeader
    })
  }

  subHeaderChange(newSubheader) {
    this.setState({
      subHeader: newSubheader
    })
  }
  // ---------------------------------------------------------------------------

  addQuestion(newQues) {
    console.log('Add Question for Triggered for', newQues);
    this.state.questions.push(newQues);
    this.setState({
      questions: this.state.questions
    })
  }

  render(){
    var styles = {
      gridStyles: {padding: 0, margin: 0}
    }

		return(
        <Container>
			    <Grid style={{padding: 0, margin: 0, width: '100%'}}>

            <Grid.Row style={styles.gridStyles}>
              <Grid.Column width={16} style={styles.gridStyles}>
                <Segment style={{marginTop: '10px'}}>
                  <HeaderSubheader
                      header={this.state.header}
                      subHeader={this.state.subHeader}
                      headerChange={this.headerChange.bind(this)}
                      subHeaderChange={this.subHeaderChange.bind(this)} />
                </Segment>

              </Grid.Column>
            </Grid.Row>

            <Grid.Row style={styles.gridStyles}>
              <Grid.Column width={16} style={styles.gridStyles}>

                  <DisplayQuestion questions={this.state.questions} />

              </Grid.Column>
            </Grid.Row>

            <Grid.Row style={styles.gridStyles}>
              <Grid.Column width={16} style={styles.gridStyles}>
                <div style={{padding: '5px',
                        borderStyle: 'dashed',
                        borderWidth: '3px',
                        borderRadius: '5px',
                        marginTop: '10px',
                        boxShadow: '3px 3px #d6d6c2'}}>
                  <CreateQuestion addQuestion={this.addQuestion.bind(this)} />
                </div>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row style={styles.gridStyles}>
              <Grid.Column width={16} style={styles.gridStyles}>

                  <div style={{height: '200px'}}>Footer</div>

              </Grid.Column>
            </Grid.Row>


          </Grid>

        </Container>

		)
	}
}
