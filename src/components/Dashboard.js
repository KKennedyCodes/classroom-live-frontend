import React, { Component } from 'react';
import NavBar from './components/nav_tools/NavBar.js';
import CourseList from './components/courses/CourseList.js';
import Course from './components/courses/Course.js';
import LiveForm from './components/input/LiveForm.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Search from "./Search";
// import Rental from "./Rental";
// import RentalsList from "./RentalsList";
// import RentalLibrary from "./RentalLibrary";
// import CustomerList from "./CustomerList";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course_selected: false,
      course: undefined,
    };
  }
  
  selectCourse = (course) => {
    this.setState({
      course_selected: true,
      course: course,
    })
  }


  render () {
    return (
      <div className="App">
        <section className="Container">
          <header><NavBar /></header>
          <menu><CourseList selectCourse={this.selectCourse}/></menu>
          <main>{this.state.course_selected ? <Course course={this.state.course}/> : ''}</main>
          <footer></footer>
        </section>
      </div>
    )
  }
}

export default Dashboard;

// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   constructor () {
//     super()
//     this.state = {
//       words : [],
//       word : {}
//     }
//     this.getWords = this.getWords.bind(this)
//     this.getWord = this.getWord.bind(this)
//   }

  

//   fetch (endpoint) {
//     return window.fetch(endpoint)
//       .then(response => response.json())
//       .catch(error => console.log(error))
//   }



//   getWord (id) {
//     this.fetch(`/api/words/${id}`)
//       .then(word => this.setState({word: word}))
//   }

//   render () {
//     let {words} = this.state
//     return (
//       <ul className="words-container">
//         {Object.keys(words).map((key) => {
//           return (
//             <li className="word-container" key={key}>
//               {words[key].term}: {words[key].definition}.
//             </li>
//           )
//         })}
//       </ul>
//     )
//   }
// }

// export default App;
