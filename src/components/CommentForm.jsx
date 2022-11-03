
import { postCommentByArticleId } from "../api";
import { UserContext } from './UserContexts';
import { useContext, useState } from 'react';

const CommentForm = ({ article_id, setComments }) => {
  const [newComment, setNewComment] = useState('');
  const { username } = useContext(UserContext);
  const coment_msg=`Submit a comment as ${username}`


  const handleSubmit = (event) => {
    event.preventDefault();
   
    const newComm = { username: username, body: newComment };

  postCommentByArticleId(article_id, newComm)
      .then((response) => {
        setComments((currComments) => {
          return [response.data.comment, ...currComments];
        });
          })
      .catch((err) => <p>{`Error: ${err}`}</p>); //way of indicating error if submission failed
    setNewComment('');
  };
    return (
    <form onSubmit={handleSubmit} className='add-comment'>
      <label htmlFor='newComment'>
      </label>
      <textarea
      className="comment-input"
        required
        type='text'
        id='newComment'
        value={newComment}
        placeholder={coment_msg}
        onChange={(e) => {setNewComment(e.target.value);
        }}
      />

      <button type='submit' className="comment-submit">Post</button>
    </form>
  );
};

export default CommentForm;