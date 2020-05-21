import React, { Component, useState } from 'react';
import { useRouteMatch, Link, Switch, Route, useParams, Prompt } from 'react-router-dom';


const ContentAbout = () => {

  const { path, url } = useRouteMatch()
  // console.log(path)

  return (
    <div>
      <h2>About page</h2>
      {/* Link */}
      <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props vs State</Link>
        </li>
      </ul>
      {/*  */}
      <Switch>
        <Route exact path={path}>
          <p>Please a topic</p>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Content />
        </Route>
      </Switch>
    </div>

  )
}

const Content = () => {
  const { topicId } = useParams()
  const [isBlocking, setIsBlocking] = useState(true)
  // console.log(`${path}"/"${topicId}`)
  // const { isBlocking } = state
  return (
    <div>
      <h3>{topicId}</h3>
      <Prompt when={isBlocking} message={location => `Are u sure want to go to ${location.path}`} />
    </div>
  )
}
class About extends Component {

  render() {

    return (
      <div>
        <ContentAbout />
      </div>
    );
  }
}

export default About;

