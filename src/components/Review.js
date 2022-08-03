import React from "react";

const Review = (props) => {
  return (
    <tr class="bg-fgrey ">
      <th
        scope="row"
        class="py-4 px-6 font-medium text-gray-300 whitespace-nowrap"
      >
        { props.data.username && <p>{props.data.username}</p>}
        { !props.data.username && <p>{props.data.author}</p>}
      </th>
      <td class="py-4 px-6">{props.data.text}</td>
      <td class="py-4 px-6">{props.data.rating}</td>
    </tr>
  );
};

export default Review;
