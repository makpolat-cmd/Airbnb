
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './data'
import './App.css';

function App() {
  
  const dataElements = Data.map( data => {
    return(
      <Card
        key={data.id}
        img={data.coverImg}
        rating={data.stats.rating}
        reviewCount={data.stats.reviewCount}
        location={data.location}
        title={data.title}
        price={data.price}

      />   
    )
  })
  
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {dataElements}
      </section>
    </div>
  );
}

export default App;
