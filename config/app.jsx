// styles
import '../css/style';

// scripts
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link} from 'react-router';
import MenuList from '../components/menu-list/MenuList';
import Message from '../components/message/Message';

// let App = React.createClass({
//   mixins: [Router.State],
//
//   dispatchHomeLoad() {
//     console.log(this.getPath());
//     return (new Message(window, 'HomeLoaded')).dispatchMessage(window.document);
//   },
//
//   componentDidMount() {
//     this.dispatchHomeLoad();
//   },
//
//   componentDidUpdate() {
//     if(window) {
//       this.dispatchHomeLoad();
//     }
//   },
//
//   render() {
//     let children = this.props.children;
//     return <div>
//       { children ? children : <MenuList total={10} /> }
//     </div>;
//   }
// });

class App extends React.Component {
  dispatchHomeMessage(message) {
    if (window) {
      return (new Message(window, message, {pathname: this.props.location.pathname})).dispatchMessage(window.document);
    }
    return null;
  }

  componentDidMount() {
    this.dispatchHomeMessage('HomeLoaded');
  }

  componentDidUpdate() {
    this.dispatchHomeMessage('HomeUpdated');
  }

  render() {
    let children = this.props.children;
    return <div>
      { children ? children : <MenuList total={10} /> }
    </div>;
  }
}

class Menu extends React.Component {
  render() {
    if(window) {
      (new Message(window, 'MenuLoaded')).dispatchMessage(window.document);
    }
    const id = ++this.props.params.menuId;

    return <div>
      <h3>{id}</h3>
      <Link to="/">Voltar</Link>
    </div>;
  }
}

if(window) {
  ReactDOM.render((
    <Router>
      <Route path="/" component={App}>
        <Route path="menus/:menuId" component={Menu}/>
      </Route>
    </Router>
  ), window.document.getElementById('container'));
}
