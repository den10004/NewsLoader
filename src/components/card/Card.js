import './card.css';


function Card(props) {
  const description = props.item.description
  const title = props.item.title
  const id = props.item.id
  const raiting = props.item.raiting
  const urlToImage = props.item.urlToImage

  return (
    <div className="card">
      <img src={urlToImage} alt="картинка" />
      <div className="card-wrapper">
        <div className="card__span">
          <h6>Номер новости: {id}</h6>
          <h6>Рейтинг: {raiting}</h6>
        </div>
        <h4 className="card__title">{title}</h4>
        <h5 className="card__description">{description}</h5>
      </div>
    </div>
  );
}

export default Card;
