import React from 'react';
import { Grid } from 'semantic-ui-react';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className="background">
        <Grid columns={3} verticalAlign='top' textAlign='center' container>

          <Grid.Column width={4} textAlign='center'>
            <Icon name='inverted users' size='huge'/>
            <h1><font color="white">Multiple Users</font></h1>
            <h5 className="ui header"><font color="white">This address book enables any number of users to register and
              save their business contacts.
              You can only see the contacts you have created.</font></h5>
          </Grid.Column>

          <Grid.Column width={4} textAlign='center'>
            <Icon name='inverted file alternate outline' size='huge'/>
            <h1><font color="white">Contact Details</font></h1>
            <h5 className="ui header"><font color="white">For each contact, you can save their name, address,
              and phone number.</font></h5>
          </Grid.Column>

          <Grid.Column width={4} textAlign='center'>
            <Icon name='inverted calendar check outline' size='huge'/>
            <h1><font color="white">Timestamped Notes</font></h1>
            <h5 className="ui header"><font color="white">Each time you make contact with a contact, you can write a
              note that summarizes the conversation.
              This note is saved along with a timestamp with the contact.</font></h5>
          </Grid.Column>

        </Grid>
        </div>
    );
  }
}

export default Landing;
