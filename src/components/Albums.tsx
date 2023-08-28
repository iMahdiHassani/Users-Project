import { useParams } from 'react-router-dom';
import useAlbums from '../hooks/useAlbums';
import Spinner from './Spinner';
import AlbumCard from './AlbumCard';

const Albums = () => {
  const { id } = useParams();
  const { data, isLoading } = useAlbums(Number(id));

  if (isLoading) return <Spinner />;
  return (
    <div className="mt-8 grid grid-cols-3  gap-3">
      {data?.map((album) => (
        <AlbumCard album={album} />
      ))}
    </div>
  );
};

export default Albums;
