import { useParams } from 'react-router-dom';
import useUser from '../hooks/useUser';
import NavBar from '../components/NavBar';
import Tabs from '../components/Tabs';
import Posts from '../components/Posts';

const UserDetailPage = () => {
  const { id } = useParams();
  const { data: user } = useUser(Number(id));
  return (
    <div className="max-w-5xl mx-auto">
      <main>
        <section className="flex items-center justify-center mt-20   ">
          <Tabs />
        </section>
        <section >
          <Posts />
        </section>
      </main>
    </div>
  );
};

export default UserDetailPage;
