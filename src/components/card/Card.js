import './card.css';


function Card(props) {
  const description = props.item.description
  const title = props.item.title
  const url = props.item.url
  const urlToImage = props.item.urlToImage

  return (
    <div className="card">
      <img src={urlToImage} alt="картинка" />
      <div className="card-wrapper">
        <div className="card__span">  
        </div>
        <a href={url}>ссылка</a>
        <h4 className="card__title">{title}</h4>
        <h5 className="card__description">{description}</h5>
      </div>
    </div>
  );
}

export default Card;
