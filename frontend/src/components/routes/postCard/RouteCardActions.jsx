import { useState, useEffect } from "react";
import {
  useLikeRouteMutation,
  useGetCommentsQuery,
  usePostCommentMutation,
} from "../../../features/routes/routesApiSlice";
import { formatDistanceToNow } from "date-fns";
import { toast } from "react-toastify";

const RouteCardActions = ({ routeId, initialLikes, isInitiallyLiked, currentUser }) => {
  const [likeRoute] = useLikeRouteMutation();
  const [liked, setLiked] = useState(isInitiallyLiked);
  const [likesCount, setLikesCount] = useState(initialLikes);
  const [showComments, setShowComments] = useState(false);
  const {
    data: comments = [],
    isLoading: commentsLoading,
    error: commentsError,
  } = useGetCommentsQuery(routeId);
  const [postComment] = usePostCommentMutation();
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
		setLiked(isInitiallyLiked)
		setLikesCount(initialLikes)
	}, [initialLikes, isInitiallyLiked])

  const handleLike = async () => {
		if (!currentUser) {
			toast.error('You must be logged in to like a route.')
			return
		}

		setLiked(!liked)
		setLikesCount(liked ? likesCount - 1 : likesCount + 1)

		try {
			await likeRoute({ routeId, like: !liked }).unwrap()
		} catch (error) {
			// Handle error, possibly revert the like state if it fails
			console.error('Failed to like/unlike the route:', error)
			setLiked(liked)
			setLikesCount(liked ? likesCount + 1 : likesCount - 1)
		}
	}

  const handleCommentToggle = () => {
    setShowComments((prev) => !prev);
  };

  const handlePostComment = async () => {
    if (newComment.trim()) {
      try {
        await postComment({ routeId, comment: { text: newComment } }).unwrap();
        setNewComment("");
      } catch (err) {
        console.error("Error posting comment:", err);
        setError("Failed to post comment. Please try again.");
      }
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Check out this route!",
          text: "Here is an interesting route I found.",
          url: window.location.href,
        })
        .then(() => {
          console.log("Thanks for sharing!");
        })
        .catch((error) => {
          console.error("Something went wrong sharing the route:", error);
        });
    } else {
      alert("Web Share API is not supported in this browser.");
    }
  };

  // const handleSave = () => {
  //   localStorage.setItem("savedRoute", routeId);
  //   alert("Route has been saved!");
  // };

  return (
    <div className="route-card-actions">
      <div
				className={`route-card-actions-box ${
					liked ? 'route-card-actions-box--liked' : ''
				}`}
			>
				<span className='route-card-actions-logo'>
					<i
						className={`fi ${
							liked ? 'fi-sr-thumbs-up' : 'fi-rr-social-network'
						} `}
						onClick={handleLike}
					></i>
				</span>
				<span className='route-card-actions-count'>{likesCount}</span>
			</div>
      <span className="route-card-actions-logo">
        <i className="fi fi-rr-comment-dots" onClick={handleCommentToggle}></i>
      </span>
      <span className="route-card-actions-logo">
        <i className="fi fi-rr-share" onClick={handleShare}></i>
      </span>
      {/* <span className="route-card-actions-logo">
        <i className="fi fi-rr-bookmark" onClick={handleSave}></i>
      </span> */}
      {showComments && (
        <div className="route-card-comment-box">
          {commentsLoading ? (
            <p>Loading comments...</p>
          ) : commentsError ? (
            <p>Error loading comments.</p>
          ) : (
            <>
              {comments.map((comment, index) => (
                <div key={index} className="comment">
                  <div className="comment-user-info">
                    <img
                      src={
                        comment.user.profilePicture ||
                        "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                      }
                      alt="User Photo"
                    />
                    <div>
                      <span className="name">
                        {comment.user.username || "User Name"}
                      </span>
                      <span className="date">
                        {formatDistanceToNow(new Date(comment.date), {
                          addSuffix: true,
                        })}
                      </span>
                    </div>
                  </div>
                  <div className="comment-text">{comment.text}</div>
                  <div className="comment-actions">
                    <div className="like">
                      <i className="fa fa-thumbs-o-up"></i>
                      <span className="ml-1">Like</span>
                    </div>
                    <div className="comment">
                      <i className="fa fa-commenting-o"></i>
                      <span className="ml-1">Comment</span>
                    </div>
                    <div className="share">
                      <i className="fa fa-share"></i>
                      <span className="ml-1">Share</span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="comment-input">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write a comment..."
                ></textarea>
                <button
                  className="btn btn-primary btn-sm"
                  type="button"
                  onClick={handlePostComment}
                >
                  Post comment
                </button>
                <button
                  className="btn btn-outline-primary btn-sm"
                  type="button"
                  onClick={handleCommentToggle} // Close comment box
                >
                  Cancel
                </button>
                {error && <p className="error">{error}</p>}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default RouteCardActions;
