import React from 'react';
import { Container, Grid, Icon } from 'semantic-ui-react';

export default class Header extends React.Component{
	render(){
    var styles = {
      gridStyles: {padding: 0, margin: 0}
    }
		return(
			<div style={{color: '#FFF', backgroundColor: 'black'}}>
          <Grid style={{padding: 0, margin: 0, width: '100%'}}>
            <Grid.Row style={styles.gridStyles}>
              <Grid.Column width={8} style={styles.gridStyles}>
                <div style={{padding: '20px', marginLeft: '10px', float: 'left'}}>
                  <span style={{fontFamily: "'Cuprum', sans-serif", fontSize: 35}}>Wip</span>
                  <span style={{fontFamily: "'Satisfy', cursive", fontSize: 30}}>forms</span>
                </div>
              </Grid.Column>
              <Grid.Column width={8} style={styles.gridStyles}>
                <div style={{float: 'right', height: '100%', padding: '20px'}}>
                  <Icon name='user' />Welcome User
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
			</div>
		)
	}
}
