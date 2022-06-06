import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './header'
import DashBoard  from './dash'
import Main from './main'
import Profile from './profile'

const Home = () => {
  return (
    <div>
      <Header />
      <br/>
      <div className="flex justify-center items-center h-full">
          <Switch>
            <Route exact path="/dashboard" component={() => <DashBoard />} />
            <Route exact path="/dashboard/main" component={() => <Main />} />
            <Route exact path="/dashboard/profile/:user" component={() => <Profile />} />
           </Switch>
        </div>
      </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
