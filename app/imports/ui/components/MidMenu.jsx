import React from 'react';
import { Dropdown, DropdownItem, DropdownMenu, Grid, Menu, MenuItem } from 'semantic-ui-react';

class MidMenu extends React.Component {
  render() {
    return (
      <Grid centered>
        <Menu className={'ui borderless mid menu'} centered>
          <Dropdown item text={'MEN'}>
            <Dropdown.Menu>
              <DropdownItem>Shorts</DropdownItem>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text={'WOMEN'}>
            <DropdownMenu>
              <DropdownItem>Dresses</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown item text={'KIDS'}>
            <DropdownMenu>
              <DropdownItem>Shoes</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown item text={'BRANDS'}>
            <DropdownMenu>
              <DropdownItem>NIKE</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <MenuItem>SALE</MenuItem>
        </Menu>
      </Grid>
    );
  }
}

export default MidMenu;
