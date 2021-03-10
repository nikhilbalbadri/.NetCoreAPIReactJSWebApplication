import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Computers } from './Computers';
export default withRouter(Computers);

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div>
            <h1 className="title">Welcome to the Computer Store</h1>
            <div className="home-button">
                <button className="btn btn-primary" onClick={this.directtoComputer.bind(this)}>Select Computer</button>
            </div>            
      </div>
    );
    }

    directtoComputer() {
        this.props.history.push("/computers");
    }
}
