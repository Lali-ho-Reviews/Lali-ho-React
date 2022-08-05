import React from "react";

function ProfileReviewForm(props) {
  return (
    <div class="w-full  mx-auto px-6 flex  lg:pl-72 ">
      <div class="flex items-center ">
        <div class=" mb-10">
          <table class="w-full text-sm text-left text-gray-400">
            <thead class="text-xs  uppercase bg-gray-700 text-gray-400">
              <tr>
                <th scope="col" class="py-3 px-6">
                  Review
                </th>
                <th scope="col" class="py-3 px-6">
                  Fc Name
                </th>
                <th scope="col" class="py-3 px-6">
                  Rate
                </th>
              </tr>
            </thead>
            <tbody>
              {props.value.reviews.map((review) => (
                <tr class="bg-gray-800 border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium  whitespace-nowrap text-gray-300"
                  >
                    {review.text}
                  </th>
                  <td class="py-4 px-6 text-gray-300"> {review.company_name}</td>
                  <td class="py-4 px-6 text-gray-300"> {review.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProfileReviewForm;
