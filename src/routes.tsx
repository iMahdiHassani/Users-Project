import { createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import UsersPage from './pages/UsersPage';
import PostPage from './pages/PostPage';
import PostsPage from './pages/PostsPage';
import AlbumsPage from './pages/AlbumsPage';
import Photos from './components/Photos';

const router = createBrowserRouter([
  { path: '/', element: <UsersPage /> },
  {
    path: 'users/:id/',
    element: <Layout />,
    children: [
      { path: 'posts', element: <PostsPage /> },
      { path: 'albums', element: <AlbumsPage /> },
    ],
  },
  {
    path: 'users/:id/',
    children: [
      { path: 'posts/:id/comments', element: <PostPage /> },
      { path: 'albums/:id/photos', element: <Photos /> },
    ],
  },
]);

export default router;
