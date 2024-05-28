import Divider from './Divider'

const Sidebar = ({ details }) => {
  return (
    <aside style={styles.sidebar}>
    <h1>About Me</h1>
      <p>{details.firstName}</p>
      <Divider type='horizontal' />
      <p>{details.lastName}</p>
    </aside>
  )
}

const styles = {
  sidebar: {
    width: '200px',
    padding: '1rem',
    backgroundColor: '#808080',
    color: '#fff',
    height: '100vh',
    margin: 10,
    borderRadius: 10
  }
}

export default Sidebar
