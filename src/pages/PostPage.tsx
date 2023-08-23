import { useParams } from 'react-router-dom';
import usePost from '../hooks/usePost';
import Comments from '../components/Comments';

const PostPage = () => {
  const { id } = useParams();
  const {data} = usePost(Number(id));
  return (
    <div className="max-w-5xl mx-auto mt-14 shadow-md rounded-lg p-3 flex flex-col  gap-4">
      <h3 className="text-xl font-bold">{data?.title}</h3>
      <p className="text-sm text-gray-600 ">{data?.body}</p>
      
      <Comments/>
    </div>
  );
};

export default PostPage;
