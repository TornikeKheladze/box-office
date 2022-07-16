import React, { useState } from "react";
import ActorGrid from "../Components/actor/ActorGrid";
import MainPageLayout from "../Components/MainPageLayout";
import ShowGrid from "../Components/show/ShowGrid";
import { SearchCard } from "../Components/styled";
import { apiGet } from "../misc/config";
import {
  NoResultsWrapper,
  RadioInputsWrapper,
  SearchButtonWrapper,
  SearchInput,
} from "./Home.styled";

const Home = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState("shows");

  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then((res) => setResults(res));
  };
  const onRadioChange = (e) => {
    setSearchOption(e.target.value);
  };
  const isShowsSearch = searchOption === "shows" ? true : false;

  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSearch();
    }
  };
  const renderResults = () => {
    if (results && results.length === 0) {
      return <NoResultsWrapper>no results</NoResultsWrapper>;
    }
    if (results && results.length > 0) {
      console.log(results);
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    }
    return null;
  };

  return (
    <MainPageLayout>
      <SearchInput
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <RadioInputsWrapper>
        <div>
          <label htmlFor="shows">
            Shows
            <input
              type="radio"
              id="shows"
              name="searchQuery"
              onChange={onRadioChange}
              value="shows"
              checked={isShowsSearch}
            />
          </label>
        </div>
        <div>
          <label htmlFor="people">
            Actors
            <input
              type="radio"
              id="people"
              name="searchQuery"
              onChange={onRadioChange}
              value="people"
              checked={!isShowsSearch}
            />
          </label>
        </div>
      </RadioInputsWrapper>
      <SearchButtonWrapper>
        <button onClick={onSearch}>Search</button>
      </SearchButtonWrapper>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
