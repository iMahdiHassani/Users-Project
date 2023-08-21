import { createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import UsersPage from './pages/UsersPage';
import UserDetail from './pages/UserDetailPage';
import PostPage from './pages/PostPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <UsersPage /> },
      { path: 'users/:id', element: <UserDetail /> },
      { path: 'posts/:id/comments', element: <PostPage /> },
    ],
  },
]);

export default router;
