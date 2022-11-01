import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Загрузка...</span>
    </Spinner>
  );
}

export default Loader;