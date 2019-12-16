import React,{Component} from 'react';


export default class Quotes extends Component{


  state={
    quotes: [
      {
        id: 1234,
        author: "me",
        quote: "heres a quote for ya",
      },
      {
        id: 2344,
        author: "davinci",
        quote: "this is the second quote",
      },
      {
        id: 6674,
        author: "ronald mcdonald",
        quote: "the polar ice caps are on fire baby",
      },
    ],
    clicked: false
  }

getBarackQuotes=()=>{
  fetch('https://motivational--api.herokuapp.com/quotes')
  .then((response) => response.json())
  .then(quotesList => {
      this.setState({ quotes: quotesList.quotes, clicked: true });
      console.log(quotesList)

  });
}


  render(){
    return(
      <div>
      {this.state.quotes.map((quote,i,j) =>(

      <div key= {i}>
        <h3 key = {j}>Author: {quote.author} </h3>
        <p style={{color:"red",textDecoration:"underline"}}>{quote.quote}</p>
      </div>
    ))}
    <button className={this.state.clicked === false ? "Button" : "hidden"} onClick={this.getBarackQuotes}>Get The Real Quotes</button>
    </div>

    );
  }
}
