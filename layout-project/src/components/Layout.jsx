import React from 'react'

const Layout = (props) => {
    return (
        <div>

            <header>
                <h1>{props.title}</h1>
            </header>

            <main>
                {props.children}
            </main>
            <footer style={{ border: "1px solid black", textAlign: "center", color: "white", backgroundColor: "black", padding: "2 rem" }}>
                <p>&copy; All rights Reserved</p>
            </footer>
        </div>

    )
}

export default Layout