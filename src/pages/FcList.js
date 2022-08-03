import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ffxxivApi from "../api/ffxxivApi";
import lalihoApi from "../api/lalihoApi";
import FcItem from "../components/FcItem"

// 
function FcList() {
  const logged = sessionStorage.getItem("username") || ''
  const [data, setData] = useState({
    companies: [],
    xiv_companies: []
  });
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  let urlSuffixLaliho = ""
  let urlSuffixXiv = ""
  if (query) {
    urlSuffixLaliho = `search/${query}`
    urlSuffixXiv = `search?name=${query}&columns=Name,ID,Server`
  }


  // Fetch data from both LalihoApi and XIVAPI
  async function fetchData() {
    // Get request laliho with support for queries
    const lalihoResponse = await lalihoApi
      .get("/companies/" + urlSuffixLaliho)
      .then(response => response.data)
      .catch((error) => console.error(error));
    // const xivResponse = await ffxxivApi
    //   .get("/freecompany/" + urlSuffixXiv)
    //   .then(response => response.data.Results.map((company) => {
    //     return {
    //       name: company.Name,
    //       ff_id: company.ID,
    //       server: company.Server
    //     }
    //   }))
    //   .then(response => console.log(response))
    //   .catch((error) => console.error(error));
    setData({
      companies: lalihoResponse,
      xiv_companies: {}
    });
  }
  // useEffect implemented to call fetchData on page load, empty array applied to the end to avoid DDOS Attack on the backend and avoid loop
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {query && data.companies && <p>Showing results for "{query}"</p>}
      {data.companies.map((fc) => (
              
              <FcItem data={fc} />
          
      ))}
      { data.companies.length < 1 && <p>Sorry! We couldn't find any Free Companies with the search term "{query}"</p>}
    </div>
  );
}

export default FcList;
