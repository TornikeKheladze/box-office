import React, { useState } from 'react';
import MainPageLayout from '../Components/MainPageLayout';
import { apiGet } from '../misc/config';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then(res => setResults(res));
  };
  const onRadioChange = e => {
    setSearchOption(e.target.value);
  };
  const isShowsSearch = searchOption === 'shows' ? true : false;

  const onInputChange = e => {
    setInput(e.target.value);
  };
  const onKeyDown = e => {
    if (e.keyCode === 13) {
      onSearch();
    }
  };
  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>no results</div>;
    }
    if (results && results.length > 0) {
      return (
        <div>
          {results.map(({ score, show, person }) => {
            return show ? (
              <div key={show.id}>{show.name}</div>
            ) : (
              <div key={person.id}>{person.name}</div>
            );
          })}
        </div>
      );
    }
    return null;
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
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
      <button onClick={onSearch}>Search</button>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
