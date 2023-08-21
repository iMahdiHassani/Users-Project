import {Link} from 'react-router-dom'
const Tabs = () => {
  return (
    <>
      <ul className="flex items-center justify-center max-w-[160px] text-sm font-medium   text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow-md sm:flex dark:divide-gray-700 dark:text-gray-400">
        <li className="w-[80px]">
          <Link
            to='/'
            className="inline-block w-[80px] p-4 text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
            aria-current="page"
          >
            Posts
          </Link>
        </li>
        <li className="w-[80px]">
          <Link to='/'
            className="inline-block w-[80px] p-4 bg-white hover:text-gray-700 rounded-r-lg hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            Albums
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Tabs;
