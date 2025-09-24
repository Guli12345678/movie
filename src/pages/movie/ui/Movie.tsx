import { memo } from 'react';
import { useMovie } from '../../../entities/movie';
import { MovieList } from '../../../widgets/movie-list';

export const Movie = memo(() => {
  const { getMovies } = useMovie();
  const { data } = getMovies();

  return (
    <div>
      <MovieList movies={data?.results} />
    </div>
  );
});
