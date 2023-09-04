import React, { useState } from "react";
import axios from "axios";

function App() {
  const [photo, setPhoto] = useState("");
  const [result, setResult] = useState([]);
  const changePhoto = () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=E0UfNlR2QwDr2v9bqAwrAmPJl3tGSxAlPZu556hlOj0`
      )
      .then((response) => {
        console.log(response.data);
        if(response.data.results.length==0)
        {
          alert("enter correct value")
        }
        setResult(response.data.results);
        console.log(response.data.results);
      });
  };
  return (
    <>
      <div className="container text-center my-3 ">
        <div className="search-box ">
          <input
            className="custom "
            type="text"
            value={photo}
            onChange={(e) => {
              setPhoto(e.target.value);
            }}
          />
          <button
            type="submit"
            onClick={changePhoto}
            className="btn custom-btn "
          >
            Get photo
          </button>
        </div>
      </div>

      <div className="container ">
        <div className="row ">
          {result.map((value) => {
            return (
              <div className="col-lg-3 col-md-4 col-6">
                <a href="#" className="d-block h-100 ">
                  <img
                    className="img-fluid img-thumbnail"
                    src={value.urls.small}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
