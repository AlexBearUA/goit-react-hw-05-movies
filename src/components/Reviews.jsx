import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Reviews = () => {
  const { movieId } = useParams();

  useEffect(() => {
    //   запрос за фильмом по его ID
  }, []);

  return <div>Интересные обзоры фильма {movieId}</div>;
};

export default Reviews;
