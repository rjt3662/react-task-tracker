import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title}) => {
    const onClick = () => {
        console.log('Button clicked')
    }
  return (
  <header className='header'>
      <h1>{title}</h1>
      <Button color='green' title='Add' onClick={onClick} />
  </header>
  )
};

Header.propTypes = {
    title: PropTypes.string
};

Header.defaultProps = {
    title: "Task Tracker"
};

export default Header;
