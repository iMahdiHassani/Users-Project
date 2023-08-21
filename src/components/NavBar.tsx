import SeacrhBar from './SeacrhBar';
import avatar from '../assets/avatar.jpg';
interface Props {
  name: string | undefined;
}
const NavBar = () => {
  return (
    <header className="max-w-5xl mx-auto mt-4">
      <div className="flex items-center justify-between">
        <SeacrhBar />
        <div className="flex items-center gap-2 bg-white rounded-lg shadow-md p-1">
          {/* <p className='text-base font-semibold'>{name}</p> */}
          <div className="relative w-14 h-14 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <img src={avatar} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
