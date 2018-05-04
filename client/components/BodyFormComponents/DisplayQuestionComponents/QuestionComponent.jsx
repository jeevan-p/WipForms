import React from 'react';
import { Header, Popup, Icon, Radio, Label, Form, Input, TextArea } from 'semantic-ui-react';

export default class QuestionComponent extends React.Component{
  constructor(props){
    super(props);
    // this.state={
    //
    // }
  }

  render() {
    const { ques } = this.props;

    return(
      <Form.Field style={{padding: '30px 20px 10px 20px'}}>
        <label style={{fontSize: '20px'}}>{ques.caption}
          { ques.hint &&
            <Popup
              trigger={<Icon size='small' name='question circle outline' style={{paddingLeft: '15px'}}/>}
              content={ques.hintValue}
              basic
            />
          }
        </label>

        { ques.type == 'TextBox' &&
          <Input style={{marginTop: '15px', fontSize: '17px'}} value='' />
        }

        { ques.type == 'Text-Area' &&
          <TextArea style={{marginTop: '15px', fontSize: '17px'}} value='' rows={2} />
        }

        { ques.type == 'Options' &&
          <Form.Group style={{marginTop: '15px'}}>
            {
              ques.values.map(function(val, i){
                return(
                  <Form.Radio
                      label={val}
                      style={{fontSize: '17px'}}
                      checked={false}
                      key={i} />
                )
              })
            }
          </Form.Group>
        }

        { ques.type == 'Check-Box' &&
          <Form.Group style={{marginTop: '15px'}}>
            {
              ques.values.map(function(val, i){
                return(
                  <Form.Checkbox label={val} style={{fontSize: '17px'}} checked={false} />
                )
              })
            }
          </Form.Group>
        }

      </Form.Field>
    );
  }
}
