import React from 'react';
import { Grid } from 'semantic-ui-react';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className={'background'}>
        <Grid verticalAlign='top' textAlign='center' container>

          <Grid.Column width={4}>
            <Icon name='inverted users' size={'huge'}/>
            <h1>Multiple Users</h1>
            <p>This address book enables any number of users to register and save their business contacts.
              You can only see the contacts you have created.</p>
          </Grid.Column>

          <Grid.Column width={4}>
            <Icon name='inverted file alternate' size={'huge'}/>
            <h1>Contact Details</h1>
            <p>For each contact, you can save their name, address, and phone number. </p>
          </Grid.Column>

          <Grid.Column width={4}>
            <Icon name='inverted calendar check outline' size={'huge'}/>
            <h1>Timestamped Notes</h1>
            <p>Each time you make contact with a contact, you can write a note that summarizes the conversation.
              This note is saved along with a timestamp with the contact.</p>
          </Grid.Column>
        </Grid>
        </div>
    );
  }
}

export default Landing;
