import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import PostForm from './PostForm';
import Sidebar from '../profile/Sidebar'
import { getPosts } from '../../actions/post';

const Posts = ({ getPosts, post: { posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <Fragment>
      <div className="profile__wrapper">
        <Sidebar/>
        <section class="container container--modifier posts">
          <PostForm />
          <div class="posts__grid">
            {posts.map((post) => (
              <PostItem key={post._id} post={post} />
            ))}
          </div>
        </section>
      </div>
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);
