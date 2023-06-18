import { useEffect, useState } from "react";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  const [quote, setQuote] = useState({ quote: "", author: "" });
  const [quoteData, setQuoteData] = useState({});
  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((data) => {
        return data.json();
      })
      .then((d) => {
        setQuoteData(d);
        return d.quotes[Math.floor(Math.random() * 100)];
      })
      .then((q) => {
        setQuote(q);
      });
  }, []);
  function handleNewQuote() {
    setQuote(quoteData.quotes[Math.floor(Math.random() * 100)]);
  }
  return (
    <div className="App" id="quote-box">
      <div class="quote-box">
        <div id="text"> {quote.quote}</div>
        <div id="author"> {quote.author}</div>
      </div>
      <div className="buttons">
        <Button  id="new-quote" clickHandle={handleNewQuote}>
          New quote
        </Button>
        <a className="btn" id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank">Twitter quote  </a>
      </div>  </div>
  );
}

export default App;
