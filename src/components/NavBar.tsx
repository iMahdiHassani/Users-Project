import { useParams, useSearchParams } from 'react-router-dom';
import avatar from '../assets/avatar.jpg';
import useUser from '../hooks/useUser';

const NavBar = () => {
  const {id}=useParams();
  const{data}=useUser(Number(id))
  return (
    <header className="max-w-5xl mx-auto mt-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 bg-white rounded-lg shadow-md p-1">
          <p className='text-base font-semibold'>{data?.name}</p>
          <div className="relative w-14 h-14 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <img src={avatar} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
