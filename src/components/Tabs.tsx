import {NavLink,useParams} from 'react-router-dom'
const Tabs = () => {
  const {id}=useParams()
  return (
    <>
      <ul className="flex items-center justify-center max-w-[160px] text-sm font-medium   text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow-md sm:flex dark:divide-gray-700 dark:text-gray-400">
        <li className="w-[80px]">
          <NavLink 
            to={'/users/'+id+'/posts'}
            className={({isActive})=>(isActive?'font-bold text-red-600':'inline-block w-[80px] p-4 bg-white rounded-r-lg')}
            aria-current="page"
          >
            Posts
          </NavLink>
        </li>
        <li className="w-[80px]">
          <NavLink to={'/users/'+id+'/albums'} 
            className={({isActive})=>(isActive?'font-bold text-red-600':"inline-block w-[80px] p-4 bg-white rounded-r-lg")}
          >
            Albums
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Tabs;
