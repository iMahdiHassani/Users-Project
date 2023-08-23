import { useParams } from 'react-router-dom';
import { Comment } from '../entites/Comment';
import useComments from '../hooks/useComments';
interface Props {
  comment: Comment;
}
const CommentBox = ({ comment }: Props) => {
  return (
      <div className="shadow-md bg-white rounded-lg p-4">
        <div className="flex items-center gap-3">
          <div className="relative inline-flex items-center justify-center w-12 h-12 shadow-lg border overflow-hidden bg-white rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300">
              {comment.name.slice(0, 2)}
            </span>
          </div>
          <h3 className="text-xl font-bold">{comment.name}</h3>
        </div>
        <div className="ml-14">
          <p className="text-sm text-gray-600">{comment.body}</p>
        </div>
      </div>
  );
};

export default CommentBox;
