import React from 'react';
import { Image } from 'semantic-ui-react';

class CenterImage extends React.Component {
  render() {
    return (
      <Image className={'centerimg'} src={'/images/experience-islandsnow-video-snapshot.png'} fluid/>
    );
  }
}

export default CenterImage;
