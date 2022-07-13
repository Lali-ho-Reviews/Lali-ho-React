import React, { Component } from "react";
import { useParams  }  from 'react-router-dom';


class FcList extends Component {
  constructor(props){
      super(props);
      this.state = {
        data: [
        ]
      }
  }

  componentDidMount () {
    const URL = 'http://localhost:3000/companies';
    fetch(URL).then(response => response.json())
    .then(data => { this.setState({data}); });
    
  }

  render() {
    return (
      <div>
        <table>
          <tr>
            <td>FC NAME</td>
            <td>Tag</td>
            <td>Members</td> 
            <td>Reviews</td> 
          </tr>
        {this.state.data.map(fc => (
          <tr>
            <td>{fc.name}</td>
            <td>{fc.slogan}</td>
            <td>{fc.members}</td>
            <td>{fc.rank}</td>
          </tr>
        ))}
        </table>
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

