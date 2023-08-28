import { useNavigate, useParams } from 'react-router-dom';
import usePhotos from '../hooks/usePhotos';
import Spinner from './Spinner';

const Photos = () => {
  const { id } = useParams();
  const { data, isLoading } = usePhotos(Number(id));
  const history = useNavigate();
  if (isLoading) return <Spinner />;
  return (
    <div className="mt-4 max-w-5xl mx-auto">
      <button
        className="text-red-600 bg-white shadow-md rounded-lg p-3 font-semibold my-4"
        onClick={() => history(-1)}
      >
        Go Back
      </button>
      <div className=" grid grid-cols-3 gap-3 ">
        {data?.map((photo) => (
          <div
            className="shadow-md p-3 rounded-lg flex flex-col gap-3"
            key={photo.id}
          >
            <p className="text-lg font-bold">{photo.title}</p>
            <img src={photo.url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
