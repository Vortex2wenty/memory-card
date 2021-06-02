const MemoryCard = (props) => {
  return (
    <div className='memory-card' onClick={props.cardClicked} data-key={props.dataKey}>
      <div className='memory-card-img'>
        <img src={props.img} alt='' width='100' height='100' />
      </div>
      <div className='memory-card-title'>
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default MemoryCard;