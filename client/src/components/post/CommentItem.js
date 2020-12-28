import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import formatDate from '../../utils/formatDate';
import { deleteComment } from '../../actions/post';

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment
}) => (
  <div className="post mb-1x bgCard">
    <div className="post__profile">
      <Link to={`/profile/${user}`}>
        <img className="round-img" className="mb-1x" src={avatar} alt="" />
        <h4 className="text-primary">{name}</h4>
      </Link>
    </div>
    <div>
      <p className="mb-1x">{text}</p>
      <p className="post__date mb-1x">Posted on {formatDate(date)}</p>
      {!auth.loading && user === auth.user._id && (
        <button
          onClick={() => deleteComment(postId, _id)}
          type="button"
          className="btn__post--container btn__danger ml-1x"
        >
          <i className="bx bx-x" />
        </button>
      )}
    </div>
  </div>
);

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
