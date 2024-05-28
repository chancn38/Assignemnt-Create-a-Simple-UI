import { useState } from 'react';
import Post from './Post';

const Newsfeed = ({ initialPosts }) => {
  const [posts, setPosts] = useState(initialPosts);
  const [newPostText, setNewPostText] = useState('');

  const handlePostSubmit = () => {
    if (newPostText.trim() === '') {
      // If text is empty, don't add the post
      return;
    }

    const currentDate = new Date().toISOString().slice(0, 10); // Get today's date in YYYY-MM-DD format
    const newPost = { date: currentDate, text: newPostText };
    // Update the array of posts
    setPosts([...posts, newPost]);
    // Clear the input field after adding the post
    setNewPostText('');
  };

  return (
    <div style={styles.newsfeed}>
      <div style={styles.postInput}>
        <input
          type="text"
          placeholder="Enter post text"
          value={newPostText}
          onChange={(e) => setNewPostText(e.target.value)}
          style={styles.input}
        />
      </div>
      <button onClick={handlePostSubmit} style={styles.addButton}>Add Post</button>
      {posts.map((post, index) => (
        <Post details={post} key={post.date}/>
      ))}
    </div>
  );
};

const styles = {
  newsfeed: {
    padding: '1rem',
    backgroundColor: '#f6f6f6',
    width: 300,
    margin: 10,
    borderRadius: 10
  },
  postInput: {
    display: 'flex',
    marginBottom: '1rem'
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
    width: "100%",
    borderRadius: 5
  },
  addButton: {
    padding: '0.5rem 1rem',
    width: "100%",
    fontSize: '1rem',
    backgroundColor: '#ffa500',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: 5,
    marginBottom: 20
  }
};

export default Newsfeed;
