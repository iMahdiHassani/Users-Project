import usePosts from '../hooks/usePosts'
import Post from './PostCard'
import Spinner from './Spinner';
const Posts = () => {
  const {data,isLoading}=usePosts();

  if(isLoading) return <Spinner/>
  return (
    <div className='mt-8 grid grid-cols-3  gap-3'>
      {data?.map((post)=><Post post={post}/>)}
    </div>
  )
}

export default Posts