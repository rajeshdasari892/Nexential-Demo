import React, { Component } from 'react';

import {Route, Link,Switch, Redirect } from 'react-router-dom';
import '../App.css';
import Inbox from './Inbox';
import Jobs from './Jobs';
import Calender from './Calender';
import CareerPage from './CareerPage';
import Reports from './Reports';



class Navbar extends Component {
  state = {
    hoverNav:''
  }
  clickLink = (navLink) =>{
    this.setState({hoverNav:navLink})
  }
  render() {
    return (
      <div>
        <div className="menu">
          <ul>
            <li> <Link onClick={() =>this.clickLink("jobs")} className={`${this.state.hoverNav === 'jobs'?'hoverMenu':''}`} to="/jobs">Jobs</Link> </li>
            <li> <Link onClick={() =>this.clickLink("inbox")} className={`${this.state.hoverNav === 'inbox'?'hoverMenu':''}`} to="/inbox">Inbox</Link> </li>
            <li> <Link onClick={() =>this.clickLink("calender")} className={`${this.state.hoverNav === 'calender'?'hoverMenu':''}`} to="/calender">Calender</Link> </li>
            <li> <Link onClick={() =>this.clickLink("career")} className={`${this.state.hoverNav === 'career'?'hoverMenu':''}`} to="/career">Career Page</Link> </li>
            <li> <Link onClick={() =>this.clickLink("reports")} className={`${this.state.hoverNav === 'reports'?'hoverMenu':''}`} to="/reports">Reports</Link> </li>
          </ul>
        </div>
        <div className="App-intro">
          <Switch>
            <Route exact path="/" component={Jobs} />
            <Route path="/jobs" component={Jobs} />
            <Route path="/inbox" component={Inbox} />
            <Route path="/career" component={CareerPage} />
            <Route path="/calender" component={Calender} />
            <Route path="/reports" component={Reports} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Navbar;
