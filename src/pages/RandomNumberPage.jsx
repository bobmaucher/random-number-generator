import React from 'react';
import RandomNumberGenerator from '../components/RandomNumberGenerator';
import { Helmet } from 'react-helmet';

const RandomNumberPage = ({ min, max }) => {
  return (
    <>
      <Helmet>
        <title>Random Number Between {min} and {max} – RandomNumber.app</title>
        <meta
          name="description"
          content={`Generate a random number between ${min} and ${max} instantly with no limits. Perfect for games, raffles, or decisions.`}
        />
      </Helmet>
      <div className="p-4 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Random Number Between {min} and {max}</h1>
        <RandomNumberGenerator min={min} max={max} />
      </div>
    </>
  );
};

export default RandomNumberPage;