import { Link } from 'react-router-dom';
import useDeletePost from '../hooks/useDeletePost';
import { Post } from '../entites/Post';
interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  const deletePost = useDeletePost(post.id);
  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg p-3 gap-3">
      <Link to={post.id + '/comments'}>
        <h3 className="text-xl font-bold">{post.title}</h3>
        <p className="text-sm text-gray-600 ">{post.body}</p>
      </Link>
      <div className="flex ">
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Edit
        </button>
        <button
          disabled={deletePost.isLoading}
          onClick={() => deletePost.mutate(post.id)}
          className="focus:outline-none font-sans  text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostCard;
