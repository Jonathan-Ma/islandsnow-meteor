import React from 'react';
import { Button, Grid, GridColumn, Input, List, ListItem } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    return (
      <Grid columns={3}>
        <GridColumn>
          <List>
            <ListItem>About Us</ListItem>
            <ListItem>Share Locations</ListItem>
            <ListItem>Employment</ListItem>
            <ListItem>Blah Blah</ListItem>
            <ListItem>Blah Blah</ListItem>
            <ListItem>Blah Blah</ListItem>
            <ListItem>Blah Blah</ListItem>
          </List>
        </GridColumn>
        <GridColumn>
          <List>
            <List.Item>Men</List.Item>
            <List.Item>Stuff</List.Item>
            <List.Item>Stuff</List.Item>
            <List.Item>Stuff</List.Item>
            <List.Item>Stuff</List.Item>
          </List>
        </GridColumn>
        <GridColumn>
          <p>Join our mailing list for updates
              Sign up to receive our email updates!</p>
          <Input placeholder={'Email Address'}/>
          <Button secondary>Join</Button>
        </GridColumn>
      </Grid>
    );
  }
}

export default Footer;
