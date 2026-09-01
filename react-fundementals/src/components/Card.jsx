const Card = (props) => {
  return (
    <>
      <div className="card">
        <h1>{props.title}</h1>
        <img src={props.img} alt="Placeholder" />
        <p>{props.description}</p>
        <span className="card-category">{props.category}</span>
        <button className="card-button">Click Me</button>
      </div>
    </>
  );
};
export default Card;
