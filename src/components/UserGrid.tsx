import useUsers from '../hooks/useUsers';
import Spinner from './Spinner';
import UserCard from './UserCard';

const UserGrid = () => {
  const { data,isLoading } = useUsers();
  if(isLoading) return <Spinner/>
  return (
    <div className="grid grid-cols-5 gap-4 mt-5">
      {data?.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserGrid;
