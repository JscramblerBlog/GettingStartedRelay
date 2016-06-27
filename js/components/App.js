import React from 'react';
import Relay from 'react-relay';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Ferocious Cats</h1>
        <ul>
          {this.props.viewer.widgets.edges.map(edge =>
            <li key={edge.node.id}>
              <h3>{edge.node.name}</h3>
              <img src={edge.node.image} alt={edge.node.name} width="200px" />
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        widgets(first: 10) {
          edges {
            node {
              id,
              name,
              image
            }
          }
        }
      }
    `
  }
});
