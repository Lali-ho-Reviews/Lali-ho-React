import React, { Component } from "react";
import { useParams  }  from 'react-router-dom';


class FcList extends Component {
  constructor(props){
      super(props);
      this.state = {
        json: {}
      }
  }

  componentDidMount () {
    const URL = 'http://localhost:3000/companies';
    fetch(URL, {
        method: 'POST'
    }).then(response => response.json())
    .then(json => { this.setState({json}); });
  }

  render() {
    return (
      <div>
        Fc name: {this.state.json.name} <br />
        <br></br>
        Tagline: {this.state.json.slogan} <br />
        <br></br>
        Rank {this.state.json.rank} <br />
        <br></br>
        Reviews {} <br />
        <br></br>
      </div>
    );
  }
}

export default (props) => (
  <FcList
      {...props}
      params={useParams()}
  />
);

