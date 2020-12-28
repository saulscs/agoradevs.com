import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import formatDate from '../../utils/formatDate';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions
}) => (
  <div className="post mb-1x bgCard">
    <div className="post__profile">
      <Link to={`/profile/${user}`}>
        <img src={avatar} alt=""  className="mb-1x"/>
        <h4 className="text-primary">{name}</h4>
      </Link>
    </div>
    <div>
      <p className="mb-1x">{text}</p>
      <p className="post__date mb-1x">Posted on {formatDate(date)}</p>

      {showActions && (
        <Fragment>
          <div class="post__buttons">
          <button
            onClick={() => addLike(_id)}
            type="button"
            class="btn__post--container btn__like ml-1x"
          >
            <i className="fas fa-thumbs-up" />{' '}
            <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
          </button>
          <button
            onClick={() => removeLike(_id)}
            type="button"
            class="btn__post--container btn__like ml-1x"
          >
            <i className="fas fa-thumbs-down" />
          </button>
          <Link to={`/posts/${_id}`} className="btn__post--container btn__primary ml-1x">
            Discussion{' '}
            {comments.length > 0 && (
              <span className="comment-count">{comments.length}</span>
            )}
          </Link>
          {!auth.loading && user === auth.user._id && (
            <button
              onClick={() => deletePost(_id)}
              type="button"
              className="btn__post--container btn__danger ml-1x"
            >
              <i className="bx bx-x"/>
            </button>
          )}
          </div>
        </Fragment>
      )}
    </div>
  </div>
);

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
