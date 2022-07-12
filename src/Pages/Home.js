import React, { useState } from 'react';
import MainPageLayout from '../Components/MainPageLayout';
import { apiGet } from '../misc/config';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const onSearch = () => {
    apiGet(`/search/shows?q=${input}`).then(res => setResults(res));
  };

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
          {results.map(item => {
            console.log(item);
            return <div key={item.show.id}>{item.show.name}</div>;
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
      <button onClick={onSearch}>Search</button>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
