import React from 'react';
import { Form, Grid, Image, Transition, Segment, List, Flag } from 'semantic-ui-react'
import './PlayerView.css'

const transitions = [
  'browse',
  'browse right',
  'drop',
  'fade',
  'fade up',
  'fade down',
  'fade left',
  'fade right',
  'fly up',
  'fly down',
  'fly left',
  'fly right',
  'horizontal flip',
  'vertical flip',
  'scale',
  'slide up',
  'slide down',
  'slide left',
  'slide right',
  'swing up',
  'swing down',
  'swing left',
  'swing right',
  'zoom',
]
const options = transitions.map((name) => ({
  key: name,
  text: name,
  value: name,
}))

class PlayerView extends React.Component{
 state = { animation: transitions[12], duration: 500, visible: true }



  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleVisibility = () =>{
  	let randAnimation = Math.floor((Math.random() *24));
  	this.setState((prevState) => ({ visible: !prevState.visible, animation: transitions[randAnimation]}));
  }




  renderList(){
  	let nameText = this.props.selectedPlayer.name.split('-');
  	return (
          <List divided relaxed>
          	<List.Item>
          		<List.Icon name="user" size="large" verticalAlign="middle"/>
          		<List.Content float="left">
          			<List.Header>Name: </List.Header>
          			<List.Description>{nameText}</List.Description>
          		</List.Content>
          	</List.Item>
          	 <List.Item>
          		<List.Icon name="question circle" size="large" verticalAlign="middle"/>
          		<List.Content float="left">
          			<List.Header>Nickname: </List.Header>
          			<List.Description>{this.props.selectedPlayer.nickName}</List.Description>
          		</List.Content>
          	</List.Item>
          	<List.Item>
          		<List.Icon name="flag" size="large" verticalAlign="middle"/>
          		<List.Content float="left">
          			<List.Header>Nationality:</List.Header>
          			<List.Description> <Flag name={this.props.selectedPlayer.nation}/> {this.props.selectedPlayer.nationality}</List.Description>
          		</List.Content>
          	</List.Item>
          	 <List.Item>
          		<List.Icon name="soccer" size="large" verticalAlign="middle"/>
          		<List.Content float="left">
          			<List.Header>Club </List.Header>
          			<List.Description>{this.props.selectedPlayer.club}</List.Description>
          		</List.Content>
          	</List.Item>
          	</List>


          	);
  }
  



  render() {
    const { animation, duration, visible } = this.state
    let umountText = "Hide " + this.props.selectedPlayer.nickName
    let mountText = "Show " + this.props.selectedPlayer.nickName
    let nameText = this.props.selectedPlayer.name.split('-');
    let column1 = "column1-" + this.props.selectedPlayer.nation;
    let column2 = "column2-" + this.props.selectedPlayer.nation;
    let button = "button-" + this.props.selectedPlayer.nation;
     return (
     <Segment>
      <Grid columns={2} relaxed="very" stackable>
        <Grid.Column as={Form} className={column1}>
        <Segment id="info-france">
        	{this.renderList()}
          </Segment>
          <Form.Button
            id={button}
            content={visible ? umountText : mountText}
            onClick={this.handleVisibility}
          />
        </Grid.Column>

        <Grid.Column className={column2}>
          <Transition.Group animation={animation} duration={duration}>
            {visible && (
              <Image centered size='small' src={this.props.selectedPlayer.imageSrc} size="large" rounded/>
            )}
          </Transition.Group>
        </Grid.Column>
      </Grid>
      </Segment>
    )
  }

}

export default PlayerView;