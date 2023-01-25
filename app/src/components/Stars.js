import propTypes from 'prop-types';
import Star from './Star';

export default function Stars({count}) {

  if (count < 1 || count > 5) {
    return (null)
  }

  const stars = [];
  
  for (let i = 0; i < count; i++) {
    stars.push(<Star key={i}/>)
  }

  return (
    <ul className="rating">{stars}</ul>
  )
}

Stars.defaultProps = {
  count: 0
}

Stars.propTypes = {
  count: propTypes.number
}