import React, { useEffect} from 'react';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../../components/posts/PostList';
import { listPosts } from '../../modules/posts';

const PostListContainer = ({location}) => {
    const dispatch = useDispatch();
    console.log("location.search    ", location);
    const { posts, error, loading} = useSelector(
        ({ posts, loading }) => ({
            posts: posts.posts,
            error: posts.error,
            loading: loading['posts/LIST_POSTS'],
        })
    )
    useEffect(() => {
        const { tag, page } = qs.parse(location.search, {
            ignoreQueryPrefix: true,
        });
        dispatch(listPosts({ tag, page }))
    }, [dispatch, location.search])

    return (
        <PostList
            loading={loading}
            error={error}
            posts={posts} 
        />
    )
};

export default withRouter(PostListContainer);
