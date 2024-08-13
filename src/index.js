import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

import { useState } from "react";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" maxRating={"sss"} onSetRating={setMovieRating} />
//       <p> This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />

    {/* <StarRating maxRating={10} defaultRating={3} />
    <StarRating
      size={24}
      color="red"
      className="test"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <Test /> */}
  </React.StrictMode>
);
