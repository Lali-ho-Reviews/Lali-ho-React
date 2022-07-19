import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import lalihoApi from "../api/lalihoApi";
import Review from "../components/Review";
import ReviewPost from "../components/ReviewPost";


// Can only have one state with but with many data sources
function FcPage() {
  const [commentData, setCommentData] = useState('')
  const [ratingData, setRatingData] = useState(5)
  const [data, setData] = useState({
    company: {},
    reviews: [],
  });
  let { id } = useParams();

  // Created function to access the LalihoApi and get the details of specific freecompany which then sets the state enforced async function
  async function fetchData() {
    const response = await lalihoApi
      .get("/companies/" + id)
      .catch((error) => console.error(error));
    const response_reviews = await lalihoApi
      .get("/companies/" + id + "/reviews")
      .catch((error) => console.error(error));
    setData({
      company: response.data,
      reviews: response_reviews.data,
    });
  }
  
  // This all handles ratings/reviews

  const handleRatingChange = (event) => {
    setRatingData(event.target.value);
  }



  const handleCommentChange = (event) => {
    setCommentData(event.target.value);
  }

  async function submitReview() {
    const post_response = await lalihoApi
      .post("/companies/" + id + "/reviews", {
        text: commentData,
        author: "Anonymous",
        rating: ratingData,
      });
      fetchData();
  };
  // useEffect implemented to call fetchData on page load, empty array applied to the end to avoid DDOS Attack on the backend and avoid loop
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div class="flex flex-col pb-3 pt-1">
      <div class="relative flex flex-col md:flex-row md:space-x-5 space-y-3  rounded-xl shadow-lg p-3 max-w-s md:max-w-lg mx-auto border border-fgrey bg-fgrey">
        <div class="w-full md:w-1/6 bg-fgrey grid place-items-center">
          <img
            src="/startscreen.jpeg"
            alt="ff14 loading screen background"
            class="rounded-xl"
          />
        </div>
        <div class="w-full md:w-2/3 bg-fgrey flex flex-col space-y-2 p-3">
          <div class="flex justify-between item-center">
            <p class="text-gray-400 text-xs hidden md:block">
              Rank: {data.company.rank}
            </p>
            <div class="flex items-center">
              <p class="text-blue-400 font-bold text-xs ml-1">
                {data.reviews.length} review/s
              </p>
            </div>

            <div class=" px-3 py-1 rounded-full text-xs font-s text-gray-400 hidden md:block">
              Active members: {data.company.members}{" "}
            </div>
          </div>
          <h3 class="font-black text-gray-300 md:text-l text-l ">
            {data.company.name}
          </h3>
          <p class="md:text-m text-gray-500 text-base">{data.company.slogan}</p>
          <p class="text-s font-black text-blue-400"></p>
        </div>
        {/* Review Form  */}
      </div>
      <form onSubmit={submitReview} class="flex justify-center">
            <div class="mb-4 w-1/2 bg-fgrey rounded-lg border border-gray-900   ">
                <div class="py-2 px-4 bg-grey-800 rounded-t-lg dark:bg-gray-800">
                    <textarea id="comment" rows="1" class="px-0 w-full text-sm bg-gray-800 focus:ring-0 text-white placeholder-gray-400" placeholder="Write a review..." required="" value={commentData} onChange={handleCommentChange}></textarea>
                    <label>Rating</label>
                    <input value={ratingData} onChange={handleRatingChange} type="number" class="" id="rating" placeholder="1" min="1" max="5" />
                </div>
                <div class="flex justify-between items-center py-2 px-3 border-t border-gray-600">
                    <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-small text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-900 hover:bg-blue-800">
                        Post Review
                    </button>
                </div>
            </div>
        </form>
      
      {/* revie table */}
      <div class="overflow-x-auto relative">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                Author
              </th>
              <th scope="col" class="py-3 px-6">
                Review
              </th>
              <th scope="col" class="py-3 px-6">
                Rating
              </th>
            </tr>
          </thead>
          <tbody>
            {data.reviews.map((review) => (
              
                <Review data={review} />
            
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FcPage;
