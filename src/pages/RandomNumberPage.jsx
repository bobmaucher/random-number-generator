import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import RandomNumberGenerator from '../components/RandomNumberGenerator';

const RandomNumberPage = () => {
    const { range } = useParams(); // e.g., "1-to-100"
    const [min, max] = range.split('-to-').map(Number);
  return (
    <>
      <Helmet>
        <title>Random Number Between {min} and {max} – RandomNumber.app</title>
        <meta name="description" content={`Generate a random number between ${min} and ${max} instantly with no limits. Perfect for games, raffles, or decisions.`} />
      </Helmet>
      <div className="p-4 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Random Number Between {min} and {max}</h1>
        <RandomNumberGenerator min={min} max={max} />
      </div>
    </>
  );
};

export default RandomNumberPage;