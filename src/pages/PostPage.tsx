import { useParams, useNavigate } from 'react-router-dom';
import usePost from '../hooks/usePost';
import Comments from '../components/Comments';

const PostPage = () => {
  const { id } = useParams();
  const { data } = usePost(Number(id));
  const history = useNavigate();
  return (
    <>
      <div className="max-w-5xl mx-auto mt-14 ">
        <button
          className="text-red-600 bg-white shadow-md rounded-lg p-3 font-semibold my-4"
          onClick={() => history(-1)}
        >
          Go Back
        </button>
        <div className="shadow-md rounded-lg p-3 flex flex-col  gap-4">
          <h3 className="text-xl font-bold">{data?.title}</h3>
          <p className="text-sm text-gray-600 ">{data?.body}</p>
          <Comments />
        </div>
      </div>
    </>
  );
};

export default PostPage;
