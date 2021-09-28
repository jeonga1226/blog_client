import React from 'react';
import { Route } from 'react-router-dom';
import PostPage from './pages/PostPage';
import WritePage from './pages/WritePage';
import PostListPage from './pages/PostListPage';

const App = () => {
  return (
    <>
      <Route component={PostListPage} path={['/@:username', '/']} exact />
      <Route component={WritePage} path='/write' />
      <Route component={PostPage} path='/@:username/:postId' />
    </>
  );
}

export default App;
