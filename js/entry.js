// styles
import '../css/style';

// scripts
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link} from 'react-router';
import MenuList from '../components/menu-list/MenuList';

class App extends React.Component {
  render() {
    let children = this.props.children;
    return <div>
      { children ? children : <MenuList total={10} /> }
    </div>;
  }
}

class Menu extends React.Component {
  render() {
    const id = ++this.props.params.menuId;
    return <div>
      <h3>{id}</h3>
      <Link to="/">Voltar</Link>
    </div>;
  }
}

if(document) {
  ReactDOM.render((
    <Router>
      <Route path="/" component={App}>
        <Route path="menus/:menuId" component={Menu}/>
      </Route>
    </Router>
  ), document.getElementById('container'));
}
