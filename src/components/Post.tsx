
const Post = ({ details }) => {
  return (
    <div style={styles.post}>
      <p style={styles.text}>{details.text}</p>
      <p style={styles.date}>{details.date}</p>
    </div>
  );
};

const styles = {
  post: {
    padding: '1rem',
    marginBottom: '1rem',
    backgroundColor: '#fff',
    borderRadius: 10
  },
  text: {
    fontWeight: 600,
    fontSize: 16,
    margin: 0
  },
  date: {
    fontSize: 14,
    fontWeight: 400,
    color: '#ddd',
    margin: 0
  },
  
};

export default Post;
