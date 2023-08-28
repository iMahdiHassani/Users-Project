import { Link } from 'react-router-dom';
import { Album } from '../entites/Album';

interface Props {
  album: Album;
}
const AlbumCard = ({ album }: Props) => {
  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg p-3 gap-3">
      <Link to={album.id + '/photos'}>
        <h3 className="text-xl font-bold">{album.title}</h3>
      </Link>
    </div>
  );
};

export default AlbumCard;
