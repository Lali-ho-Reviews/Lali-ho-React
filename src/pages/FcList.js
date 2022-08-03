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
    xiv_companies: [],
    fetched: false
  });
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  let urlSuffixLaliho = ""
  let urlSuffixXiv = ""
  if (query) {
    urlSuffixLaliho = `search/${query}`
    urlSuffixXiv = `search?name=${query}&columns=Name,ID,Server`
  }
  async function updateData(name, value) {
    setData(data => ({
      ...data,
      [name]: value,
      'fetched': true
    }))
  }

  // Fetch data from both LalihoApi and XIVAPI
  async function fetchData() {
    // Get request laliho with support for queries
    const lalihoResponse = await lalihoApi
      .get("/companies/" + urlSuffixLaliho)
      .then(response => response.data)
      .catch((error) => console.error(error));
    updateData("companies", lalihoResponse)
  }
  async function fetchXivData() {
    // XIVAPI requires a search query
    const xivResponse = await ffxxivApi
      .get("/freecompany/" + urlSuffixXiv)
      .then(response => response.data.Results.map((company) => {
        return {
          name: company.Name,
          ff_id: company.ID,
          server: company.Server
        }
      }))
      .catch((error) => console.error(error))
    updateData("xiv_companies", xivResponse)
  }
  // useEffect implemented to call fetchData on page load, empty array applied to the end to avoid DDOS Attack on the backend and avoid loop
  useEffect(() => {
    if (query) {fetchXivData()}
    fetchData()
  }, []);

  return (
    <div>
      {!data.fetched && <p>Loading...</p>}
      { query && data.fetched &&
        <div>
          <h3 class="text-xl bg-blackbg p-2 rounded-sm ">Showing search results for "{query}"</h3>
          {data.companies.length < 1 && <p>Sorry, we couldn't find any results in the Laliho Database.</p>}
          {data.xiv_companies.length < 1 && <p>Sorry, we couldn't find any results in the Lodestone Database.</p>}
        </div>
      }
      { !query && 
        <p>Please enter a search query to browse Free Companies from the Lodestone database!</p>
      }
      <div>
        {data.companies.length > 0 && query && <h3>Laliho Results:</h3>}
        {data.companies.map((fc) => (<FcItem data={fc} />))}
      </div>
      <div>
        {data.xiv_companies.length > 0 && <h3>Lodestone Results:</h3>}
        {data.xiv_companies.map((fc) => (<FcItem data={fc} />))}
      </div>
    </div>
  );
}

export default FcList;
