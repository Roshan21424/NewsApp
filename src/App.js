
import './App.css'
import Navbar from './componets/Navbar'
import News from './componets/NewsItem';

import React, { Component } from 'react';
import NewsItems from './componets/NewsItems';

//creating a class componet called "App"
export default class App extends Component {

  //render function to render the content inside app component
  render() {

    return (
      //Navbar and News are sub components in App
      <div>
        <Navbar></Navbar>{/*Navbar component*/}
        <News page={10} country={"us"} category={"science"}></News>  {/*News component (its taking few arguments*/}
      </div>
    )

  }

}
