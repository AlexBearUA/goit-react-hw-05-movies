import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Cast = () => {
  const { movieId } = useParams();

  useEffect(() => {
    //   запрос за фильмом по его ID
  }, []);

  return <div>Что-то прикольное про актеров фильма {movieId}</div>;
};

export default Cast;
