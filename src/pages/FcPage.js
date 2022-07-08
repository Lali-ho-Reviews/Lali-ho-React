import React from "react";
import { useParams} from "react-router-dom";


function FcPage() {
    let {id} = useParams();
  return <h2> {id} Free Company </h2>;
  
}

export default FcPage;
