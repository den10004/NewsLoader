import { useState, useEffect, useRef } from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/card/Card";

function App() {
  const { title, url, urlToImage } = [];
  const cardsSumma = 10; //количество рендеров карточек


  const [news, setCards] = useState([]);
  const wrapperReference = useRef(null);
  const [card, setCard] = useState(cardsSumma);
  let renderNews = [
    ...news.slice(0, cardsSumma),
    ...news.slice(cardsSumma, card),
  ]; //создание итового массива данных

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = (e) => {
    if (e.target.scrollWidth - e.target.scrollLeft <= e.target.clientWidth) {
      setCard(card + 1);
    }
  };

  useEffect(() => {
    const getCards = async () => {
      const res = await axios.get(
        "https://nomoreparties.co/news/v2/everything?language=ru&sortBy=publishedAt&pageSize=100&qInTitle=Россия&apiKey=10e8db0981ec4941becf1c27cd92454d"
      );
      setCards(res.data.articles);
    };
    getCards();
  }, []);

  useEffect(() => {
    const { current } = wrapperReference;
    current.addEventListener("scroll", handleScroll);
    return () => current.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, [handleScroll]);

  return (
    <div className="App">
      <h1>Новости России</h1>
      <h3>Карточки добавляются по движению ползунка</h3>
      <div className="wrapper" ref={wrapperReference}>
        {renderNews.map((item, index) => (
          <Card
            key={index}
            item={item}
            url={url}
            title={title}
            urlToImage={urlToImage}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
