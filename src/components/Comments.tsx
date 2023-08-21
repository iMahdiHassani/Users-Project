import {useParams} from 'react-router-dom'
import useComments from '../hooks/useComments'
import CommentBox from './CommentBox'
import Spinner from './Spinner';
const Comments = () => {
  const {data,isLoading}=useComments();
  if(isLoading) return <Spinner/>
  return (
    <div className='flex flex-col gap-2'>
      {data?.map((comment)=>(
        <CommentBox comment={comment}/>
      ))}
    </div>
  )
}

export default Comments