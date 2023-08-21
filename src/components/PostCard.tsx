import { Link, useParams } from 'react-router-dom';
import { Post } from '../entites/Post';
interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  const { id } = useParams();
  return (
    <>
      {Number(id) === post.userId ? (
        <div className="flex flex-col bg-white shadow-md rounded-lg p-3 gap-3">
          <Link to={'/posts/' + post.id+'/comments'}>
            <h3 className="text-xl font-bold">{post.title}</h3>
            <p className="text-sm text-gray-600 ">{post.body}</p>
          </Link>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default PostCard;
