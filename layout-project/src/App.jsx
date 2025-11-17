import Layout from "./components/Layout";

const App = () => {

  return <div>
    {/*Homepage Layout*/}
    <Layout title="Welcome page">
      <h1>Welcome to Javascript</h1>
      <p>This is a Basic react layout using resuable component</p>
      <p>You can use this layout for any kind of web application</p>
    </Layout>

    <Layout>
      <h2>Our Services</h2>
      <hr />
      <ul>
        <li>Web Development</li>
        <li>UI/UX Design</li>
        <li>Mobile App solution</li>
      </ul>
    </Layout>
  </div>
}

export default App;