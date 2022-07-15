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
        
        {this.state.data.map(fc => (
         
          <div class="flex flex-col justify-center h-screen">
          <div
            class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
            <div class="w-full md:w-1/3 bg-white grid place-items-center">
              <img src="/startscreen.jpeg" alt="ff14 loading screen backgorund" class="rounded-xl" />
            </div>
              <div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                <div class="flex justify-between item-center">
                  <p class="text-gray-500 font-medium hidden md:block">Rank: {fc.rank}</p>
                  <div class="flex items-center">
                    <p class="text-blue-400 font-bold text-sm ml-1">
                      5 reviews 
                    </p>
                  </div>
                  
                  <div class=" px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                    Active members: {fc.members} </div>
                </div>
                <h3 class="font-black text-gray-800 md:text-3xl text-xl">{fc.name}</h3>
                <p class="md:text-lg text-gray-500 text-base">{fc.slogan}</p>
                <p class="text-xl font-black text-gray-800">
                <a href={"/FcPage/" + fc.id}>Link</a> 
                </p>
              </div>
            </div>
          </div>
          ))}
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

