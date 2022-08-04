import React, { useState, useEffect } from "react";
import { ScrollToTop } from "../components";
import { useParams } from "react-router-dom";
import ffxxivApi from "../api/ffxxivApi";
import lalihoApi from "../api/lalihoApi";
import FcItem from "../components/FcItem";
import SvgLoader from "../components/loading/SvgLoader";

function FcList() {
  const logged = sessionStorage.getItem("username") || "";
  const [data, setData] = useState({
    companies: [],
    xiv_companies: [],
    laliFetched: false,
    xivFetched: false,
  });
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  let urlSuffixLaliho = "";
  let urlSuffixXiv = "";
  if (query) {
    urlSuffixLaliho = `search/${query}`;
    urlSuffixXiv = `search?name=${query}&columns=Name,ID,Server`;
  }
  async function updateData(name, value, fetched) {
    setData((data) => ({
      ...data,
      [name]: value,
      [fetched]: true,
    }));
  }

  // Fetch data from both LalihoApi and XIVAPI
  async function fetchData() {
    // Get request laliho with support for queries
    const lalihoResponse = await lalihoApi
      .get("/companies/" + urlSuffixLaliho)
      .then((response) => response.data)
      .catch((error) => console.error(error));
    updateData("companies", lalihoResponse, "laliFetched");
  }

  async function fetchXivData() {
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
    updateData("xiv_companies", xivResponse, "xivFetched");
  }

  // useEffect implemented to call fetchData on page load, empty array applied to the end to avoid DDOS Attack on the backend and avoid loop
  useEffect(() => {
    if (query) {
      fetchXivData();
    }
    fetchData();
  }, []);

  return (
    <>
      <div class="h-screen">
        <div class=" flex justify-center pt-2 flex-row	">
          {query && <h3>Showing search results for "{query}"</h3>}
        </div>

        <div class="text-gray-200 px-10 pt-4  ">
          <div class="pt-4  ">
            <p>Laliho Results: </p>
            {data.companies.map((fc) => (
              <FcItem data={fc} />
            ))}
            <div class="flex  flex-row	justify-center  ">
              {!data.laliFetched}
              {query && data.laliFetched && data.companies.length < 1 && (
                <p>Sorry, we couldn't find any results.</p>
              )}
            </div>
          </div>

          <div class="pt-4 ">
            <h3>Lodestone Results:</h3>
            {data.xiv_companies.map((fc) => (
              <FcItem data={fc} />
            ))}
            <div class="flex justify-center ">
              {query &&
                data.xivFetched == false &&
                data.xiv_companies.length < 1 && <SvgLoader />}
              {query && data.xivFetched && data.xiv_companies.length < 1 && (
                <p>Sorry, we couldn't find any results.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
}

export default FcList;
