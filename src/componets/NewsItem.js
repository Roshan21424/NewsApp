import NewsItems from "./NewsItems";
import React, { Component } from "react";
import Loadingani from "./Loadingani";
import PropTypes from 'prop-types'


//creating a class component as News Component
export default class News extends Component {

  //these are used to set default properties .
  //if the parentcomponent does not send any values ,these defoult values will be intialised
  static defaultProps = {
    country: 'in',
    category: 'general'
  }

  //propTypes are used to enforce type-checking 
  //if the types are not set correctly,then react will prompt a waring in the console
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  }

  //articles=[{"source":{"id":null,"name":"BBC News"},"author":"BBC Sport","title":"BBC signs new four-year audio deal for ICC events","description":"The BBC signs a new four-year audio deal with the International Cricket Council (ICC) to broadcast all major global tournaments.","url":"https://www.bbc.com/sport/cricket/articles/c14454kkg9ro","urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_sport/1321/live/7c2fa750-1e66-11ef-a133-cf78601b4a93.jpg","publishedAt":"2024-05-30T09:31:22Z","content":"The BBC has signed a new four-year audio deal with the International Cricket Council (ICC) to broadcast all major global tournaments. \r\nIt means the BBC will have ball-by-ball commentary on every tou… [+1407 chars]"},{"source":{"id":null,"name":"BBC News"},"author":null,"title":"'Cricket is the only source of happiness back home': Afghans celebrate famous win over Australia","description":"The win saw jubilation in the streets in the isolated Taliban-governed country.","url":"https://www.bbc.com/news/articles/cpvvggllp2ko","urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/c06c/live/b410f390-3171-11ef-a5a1-f9c06821b1bc.png","publishedAt":"2024-06-23T16:19:26Z","content":"By Dearbail Jordan, BBC News\r\nAfghans have been celebrating their country's surprise cricketing victory over Australia in the T-20 World Cup under way in the US and West Indies.\r\nFootage from the cit… [+2774 chars]"},{"source":{"id":null,"name":"NPR"},"author":"Becky Sullivan","title":"The U.S. Advances in the Cricket World Cup","description":"Heavy rain in south Florida this week saturated the field where the U.S. cricket team had been scheduled to play a Friday match. Officials called it off, automatically sending the U.S. to the next stage.","url":"https://www.npr.org/2024/06/14/nx-s1-5006141/the-u-s-advances-in-the-cricket-world-cup","urlToImage":"https://media.npr.org/include/images/facebook-default-wide-s1400-c100.jpg","publishedAt":"2024-06-14T20:11:21Z","content":"Heavy rain in south Florida this week saturated the field where the U.S. cricket team had been scheduled to play a Friday match. Officials called it off, automatically sending the U.S. to the next st… [+3 chars]"}]

  //constructor is called when the component is first initalised 
  constructor(props) {
    //calling the parents constructor(Component) 
    super(props)
    //intialisng the local state of the component
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      loading: false
    }
  }

  /*defing the methods:*/

  //life cycle method :
  //componentDidMpunt will run when the component is mounted
  //it should be async as we are fetching an api
  async componentDidMount() {
    //url to fetch the api
    //it uses both parameters and also local state properties
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&sortBy=publishedAt&apiKey=73fde9c68d5b46a79ff59891faf523a1&page=${this.state.page}&pageSize=${this.props.page}`

    //desplaying the loading icon before fetching the news from the api
    this.setState(
      {
        loading: true //setting loading to true 
      }
    )
    const data = await fetch(url)//fetching the api
    const jsonData = await data.json()//gettung the object from json
    this.setState({
      articles: jsonData.articles,//setting the articles
      totalResults: jsonData.totalResults,//setting the totalresults
      loading: false//setting loading as false
    })
  }

  //utility methods :
  //logic for the previous button
  handleonprevious = async () => {
    //if the pageno is more than one
    if (this.state.page > 1) {
      //url for fetching the previous page
      //page = this.state.page-1
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&sortBy=publishedAt&apiKey=73fde9c68d5b46a79ff59891faf523a1&page=${this.state.page - 1}&pageSize=${this.props.page}`
      //displaying the loading icon before fetching
      this.setState(
        {
          loading: true
        }
      )
      const data = await fetch(url)//fetching the api
      const jsonData = await data.json()//gettung the object from json
      //changing the local state variables
      this.setState({
        articles: jsonData.articles,//setting the articles
        page: this.state.page - 1,//setting the page to previous
        loading: false//removing the looding icon

      })
    }

  }

  //logic for the previous button
  handleonNext = async () => {
    //if there are any results left after the currentpage
    if (this.state.page + 1 <= Math.ceil(this.state.totalResults / 10)) {
      //url for fetching the previous page
      //page = this.state.page+1
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&sortBy=publishedAt&apiKey=73fde9c68d5b46a79ff59891faf523a1&page=${this.state.page + 1}&pageSize=${this.props.page}`
      //displaying the loading icon before fetching
      this.setState(
        {
          loading: true
        }
      )
      const data = await fetch(url)//fetching the api
      const jsonData = await data.json()//gettung the object from json
      //changing the local state variables
      this.setState({
        articles: jsonData.articles,//setting the articles
        page: this.state.page + 1,//setting the page to next
        loading: false//removing the looding icon
      })
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsAngle</h2>
        <div className="row">
          {/* if the loading is true then load the loadingani component else do other logic*/}
          {/* map calls a prefined method on each element of the article */}
          {this.state.loading === true ? <Loadingani> </Loadingani> : this.state.articles.map(
            //callback function on each elemeent of the article
            (element) => {
              //check if the element url is not present ...else render a NewsItem component
              if (element.url === "https://removed.com") {
              } else {
                return (
                  //NewsItem container
                  <div className="col-md-4" key={element.url}>
                    {/*NewsItem is taking some arguments*/}
                    <NewsItems url={element.url} urlimg={element.urlToImage} title={element.title} description={element.description}></NewsItems>
                  </div>

                )
              }
            }
          )
          }
        </div>
        <button onClick={this.handleonprevious} disabled={this.state.page <= 1} >previous</button>
        <button onClick={this.handleonNext} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 10)}>next</button>

      </div>

    )

  }
}