import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {Error, Image} from "../index";

export default function Search() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [errorMsg, setErrMsg] = useState('');
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSearch = async () => {
    let url =
      process.env.REACT_APP_API_URL + "?query=" + text + "&page=" + page;
      try {
        if(text.length>0){
        let responseData = await fetch(url, {
          method: "get",
          headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
          },
        });
        let parsedData = await responseData.json();
        parsedData.results.map((element) => {
          return setData((data) => [...data, element]);
        });
        setPage(page + 1);
        setErrMsg('');
      }
      else{
        setErrMsg("URL should not be empty");
      }
    
    } catch (error) {
        setErrMsg(error.message);
        setPage(1);
        setText('');
        setData([]);
      }
   
  };
  return (
    <>
      <div data-testid="input-test" className="container my-2">
        <div className="row">
          <div className="col my-3">
            <div className="form-floating">
              <input data-testid="input-floating-test"
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="e.g Cars, Dogs, Flowers"
                onChange={(event) => {
                  handleChange(event);
                }}
                value={text}
              />
              <label htmlFor="floatingInput">
                Enter Keyword to search Images
              </label>
            </div>
          </div>
          <div className="col-md-3 my-4">
            <button data-testid="button-test"
              type="button"
              className="btn btn-primary"
              onClick={() => {
                handleSearch();
              }}
            >
              Search Image
            </button>
          </div>
        </div>        
      </div>

      {data != null && data.length > 0 ? (
        <InfiniteScroll
          dataLength={data.length}
          next={() => {
            handleSearch();
          }}
          hasMore={true}
          loader={<h4 className="text-center">Loading...</h4>}           
        >
          <div className="container">
            <div className="row">
              {data.map((element) => {
                return (
                  <div className="col-md-3" key={element.id}>
                    <Image ImageUrl={element.urls.regular} />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      ) : null}
      <Error message={errorMsg}/>
    </>
  );
}
