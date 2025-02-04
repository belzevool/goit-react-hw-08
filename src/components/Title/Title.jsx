import PropTypes from 'prop-types';
import s from './Title.module.css';

const Title = ({ level = 1, fontSize, children }) => {
  const Title = `h${level}`;
  const titleStyle = fontSize ? { fontSize } : {};

  return (
    <Title className={s.mainTitle} style={titleStyle}>
      {children}
    </Title>
  );
};

Title.propTypes = {
  level: PropTypes.number,
  str: PropTypes.string,
  fontSize: PropTypes.number,
};

export default Title;