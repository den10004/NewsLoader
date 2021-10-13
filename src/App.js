import { useState, useEffect, useRef } from 'react';
import './App.css';
import json from './news.json'

import Card from './components/card/Card'


function App() {
  const news = json.articles
  const title = json.title
  const id = json.id
  const raiting = json.raiting
  const urlToImage = json.urlToImage
  const cardsSumma = 10 //количество рендеров карточек

  //10 карточек одновременно не помещается красиво, поэтому я уменьшил их количество.


  const wrapperReference = useRef(null);
  const [card, setCard] = useState(cardsSumma);
  let renderNews = [...news.slice(0, cardsSumma), ...news.slice(cardsSumma, card)] //создание итового массива данных


  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = (e) => {
    if (e.target.scrollWidth - e.target.scrollLeft <= e.target.clientWidth) {
     setCard(card + 1)
     }
   };
 

  useEffect(() => {
    const { current } = wrapperReference;
    current.addEventListener('scroll', handleScroll);
    return () => current.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, [handleScroll]);


  return (
    <div className="App">
      <h1>Новости</h1>
      <h3>Карточки добавляются по движению ползунка</h3>
      <div className="wrapper" ref={wrapperReference}>
        {renderNews.map((item, index) =>
          <Card key={index} item={item} id={id} raiting={raiting} title={title} urlToImage={urlToImage}/>
        )}
      </div>
    </div>
  );
}

export default App;


