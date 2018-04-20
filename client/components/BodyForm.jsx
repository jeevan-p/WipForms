import React from 'react';
import { Container, Grid, Icon } from 'semantic-ui-react';

import CreateQuestion from './BodyFormComponents/CreateQuestion.jsx';

export default class BodyForm extends React.Component{

  myFunction(val) {
    console.log("This is parent: ",val)
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
                Questions will be shown here
              </Grid.Column>
            </Grid.Row>

            <Grid.Row style={styles.gridStyles}>
              <Grid.Column width={16} style={styles.gridStyles}>
                <div style={{padding: '5px', borderStyle: 'dashed', borderWidth: '3px', borderRadius: '5px', boxShadow: '3px 3px #d6d6c2'}}>
                  <CreateQuestion  data={this.myFunction.bind(this)} />
                </div>

                <div style={{padding: '5px', borderStyle: 'dashed', borderWidth: '3px', borderRadius: '5px', boxShadow: '3px 3px #d6d6c2'}}>
                  <CreateQuestion data={this.myFunction.bind(this)}/>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>

        </Container>

		)
	}
}
