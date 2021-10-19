import React from 'react';
import { Container } from 'semantic-ui-react';
import MidLogo from '../components/MidLogo';
import MidMenu from '../components/MidMenu';
import CenterImage from '../components/CenterImage';

export default class IslandSnow extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <MidLogo/>
        </Container>
        <MidMenu/>
        <CenterImage/>
      </div>
    );
  }
}
