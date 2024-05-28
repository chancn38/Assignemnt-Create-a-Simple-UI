// HomePage.js
import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Newsfeed from './Newsfeed'

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
