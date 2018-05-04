import React from 'react';
import { Input, Divider } from 'semantic-ui-react';

import OptionChecklistComponent from './CreateQuestionComponents/OptionChecklistComponent.jsx';

export default class HeaderSubheader extends React.Component{
  constructor(props){
      super(props);
      // this.state={
      // }
  }

  headerChanged(e, {value}) {
    this.props.headerChange();
  }

  subHeaderChanged(e, {value}) {
    this.props.subHeaderChange();
  }

	render(){
    // const {  } = this.state;
    const { header, subHeader } = this.props;
    const that = this;

		return(
      <div>
        <Input
            placeholder='Form Header'
            size='massive'
            value={header}
            onChange={this.headerChanged.bind(this)}
            style={{paddingTop: '20px', paddingLeft: '10px'}}
            transparent fluid />
        <Divider />
        <Input
            placeholder='Form Sub-header (optional)'
            size='big'
            value={subHeader}
            onChange={this.subHeaderChanged.bind(this)}
            style={{paddingTop: '10px', paddingBottom: '20px', paddingLeft: '10px', fontStyle:"italic"}}
            transparent fluid />
      </div>
		)
	}
}
