import React from 'react';
import MenuItem from '../menu-item/MenuItem';

export default class MenuList extends React.Component {
  render() {
    const {total} = this.props;
    return <ul>
      { Array.from(Array(total).keys()).map(idx => <MenuItem key={idx} title={"Menu "+(idx+1)} id={idx} />) }
    </ul>;
  }
}
MenuList.propTypes = {
	total: React.PropTypes.number.isRequired
};
