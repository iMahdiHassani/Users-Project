import { Link } from 'react-router-dom';
import { User } from '../entites/User';
import avatar from '../assets/avatar.jpg';
interface Props {
  user: User;
}

const UserCard = ({ user }: Props) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg" key={user.id}>
      <Link to={'/users/' + user.id} className='flex flex-col items-center justify-center'>
        <div className="relative w-14 h-14 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <img src={avatar} />
        </div>
        <div className="flex flex-col ">
          <h2 className="text-base text-center">{user.name}</h2>
          <p className="text-xs text-gray-400 text-center">{user.email}</p>
        </div>
      </Link>
    </div>
  );
};

export default UserCard;
