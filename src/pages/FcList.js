import React, { useState, useEffect } from "react";
import { ScrollToTop } from '../components';
import { useParams } from "react-router-dom";
import ffxxivApi from "../api/ffxxivApi";
import lalihoApi from "../api/lalihoApi";
import FcItem from "../components/FcItem";


function FcList() {
  const logged = sessionStorage.getItem("username") || "";
  const [data, setData] = useState({
    companies: [],
    xiv_companies: [],
    fetched: false,
  });
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  let urlSuffixLaliho = "";
  let urlSuffixXiv = "";
  if (query) {
    urlSuffixLaliho = `search/${query}`;
    urlSuffixXiv = `search?name=${query}&columns=Name,ID,Server`;
  }

  // Fetch data from both LalihoApi and XIVAPI
  async function fetchData() {
    // Get request laliho with support for queries
    const lalihoResponse = await lalihoApi
      .get("/companies/" + urlSuffixLaliho)
      .then((response) => response.data)
      .catch((error) => console.error(error));
    const xivResponse = await ffxxivApi
      .get("/freecompany/" + urlSuffixXiv)
      .then((response) =>
        response.data.Results.map((company) => {
          return {
            name: company.Name,
            ff_id: company.ID,
            server: company.Server,
          };
        })
      )
      .catch((error) => console.error(error));
    setData({
      companies: lalihoResponse,
      xiv_companies: xivResponse,
      fetched: true,
    });
  }
  // useEffect implemented to call fetchData on page load, empty array applied to the end to avoid DDOS Attack on the backend and avoid loop
  useEffect(() => {
    fetchData();
  }, []);

  return (
   <>
   <div>
      <div class=" flex justify-center pt-2 ">{query && <h3>Showing search results for "{query}"</h3>}</div>

      <div class="text-gray-200 px-10 pt-4 ">
        {!data.fetched && <p>Loading...</p>}
        {data.fetched && data.companies.length < 1 && (
          <p>Sorry, we couldn't find any results in the Laliho Database.</p>
        )}
        {data.fetched && data.xiv_companies.length < 1 && (
          <p>Sorry, we couldn't find any results in the Lodestone Database.</p>
        )}
        <div class="pt-4">
          {data.companies.length > 0 && (
            <>
              {" "}
              <h3>Laliho Results:</h3>
            </>
          )}
          {data.companies.map((fc) => (
            <FcItem data={fc} />
          ))}
        </div>
        <div class="pt-4">
          {data.xiv_companies.length > 0 && <h3>Lodestone Results:</h3>}
          {data.xiv_companies.map((fc) => (
            <FcItem data={fc} />
          ))}
        </div>
      </div>
    </div>
    < ScrollToTop />
    </>
  );
}

export default FcList;
