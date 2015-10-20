import React from 'react';
import {Link} from 'react-router';

export default class MenuItem extends React.Component {
  render() {
    const {id, title} = this.props;
    return <li>
      <Link to={`/menus/${id}`}>
        <h3>{title}</h3>
      </Link>
    </li>;
  }
}
MenuItem.propTypes = {
  id: React.PropTypes.number.isRequired,
	title: React.PropTypes.string.isRequired
};
