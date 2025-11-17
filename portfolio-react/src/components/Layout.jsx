import React from 'react'

const Layout = (props) => {
  return (
    <div>

      <header style={{fontSize: "2rem", textAlign: "center"}}>
        {props.title}
      </header>
      <main>
        {props.children}
      </main>
      <footer style={{border: "1px solid black", color: "white", backgroundColor: "black",  textAlign: "center", bottom: "0", position: "fix", width: "97%"}}>
        <p>&copy; All Rights Reserved</p>
      </footer>
    </div>
  )
}

export default Layout;