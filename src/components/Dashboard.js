import React, { Component } from 'react';
import { Route, NavLink, BrowserRouter as Router} from "react-router-dom";
// import Search from "./Search";
// import Rental from "./Rental";
// import RentalsList from "./RentalsList";
// import RentalLibrary from "./RentalLibrary";
// import CustomerList from "./CustomerList";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "Katie Kennedy",
      userType: teacher,
      loggedIn: true,
    };
  }
    
  // selectCustomer = (customer) => {
  //   this.setState({
  //     selectedCustomer: customer,
  //   });
  // }

  // selectMovie = (movie) => {
  //   this.setState({ 
  //     selectedMovie: movie
  //   });
  // }

  // clearSelection = () => {
  //   this.setState({
  //     selectedCustomer: undefined,
  //     selectedMovie: undefined,
  //     rentalSubmitted: true,
  //   })
  // }

  render () {
    return (
      // <Router>
      //   <div className="App">
      //       <h1>Classroom Live - Welcome, User</h1>
      //       {/* <section><Rental movie={this.state.selectedMovie} customer={this.state.selectedCustomer} clearSelection={this.clearSelection}/></section> */}
      //       <ul className="header">
      //         {/* only show if course selected */}
      //         <li><NavLink to="/live">Go Live</NavLink></li> 
      //         {/* <li><NavLink to="/settings">Settings</NavLink></li> */}
      //         <li><NavLink to="/logout">Logout</NavLink></li>
      //         {/* <li><NavLink to="/video-store-consumer/rentals">Rentals</NavLink></li> */}
      //       </ul>
      //       <div className="content">
      //         <Route path="/video-store-consumer/search" component={Search}/>
      //         <Route path="/video-store-consumer/movies" render={() => <RentalLibrary selectMovie={this.selectMovie}/>}/>
      //         <Route path="/video-store-consumer/customers" render={() => <CustomerList selectCustomer={this.selectCustomer} />}/>
      //         <Route path="/video-store-consumer/rentals" component={RentalsList}/>
      //       </div>
      //     </div>
      // </Router>
    )
  }
}

export default Home;
