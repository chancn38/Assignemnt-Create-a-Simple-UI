// HomePage.js
import Newsfeed from './Newsfeed'
import Sidebar from './Sidebar'

const HomePage = () => {
  const sidebarDetails = { firstName: 'Rysh', lastName: 'Magbanua' }
  const posts = [
    { date: '2024-05-28', text: 'ReactJS' },
    { date: '2024-05-28', text: 'Facebook' }
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={styles.mainContent}>
        <Sidebar details={sidebarDetails} />
        <Newsfeed initialPosts={posts} />
      </div>
    </div>
  )
}

const styles = {
  mainContent: {
    display: 'flex',
    flex: 1
  }
}

export default HomePage
