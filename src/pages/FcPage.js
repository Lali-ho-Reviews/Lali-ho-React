import React, { useState, useEffect } from 'react';
import { useParams} from "react-router-dom";

function FcPage() {
  const [data, setData] = useState({});
  let {id} = useParams();

  
  // Created function to access the LalihoApi and get the details of specific freecompany which then sets the state enforced async function 
  async function fetchData() {
    const url = 'http://localhost:3000/companies/' + id;
    const response = await fetch(url)
    response
      .json()
        .then(response => {
          setData(response);
        })
        .catch(error => console.error(error))
  }
  // useEffect implemented to call fetchData on page load, empty array applied to the end to avoid DDOS Attack on the backend and avoid loop
  useEffect(() => {
    fetchData();
  }, []);

  return <div><h2>Free Company - {data.name}</h2>
          <table>
            <tr>
            </tr>
          </table>
  </div>;

}

export default FcPage;
