import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import QuoteBox from "./components/QuoteBox";
import TwitterQuote from "./components/TwitterQuote";

const API_URL =
  "https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

function App() {
  const [quote, setQuote] = useState({ quote: "", author: "" });
  const [quoteData, setQuoteData] = useState([]);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setQuoteData(data.quotes);
      setRandomQuote(data.quotes);
    } catch (error) {
      console.log("Error fetching quotes:", error);
    }
  };

  const setRandomQuote = (quotes) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  const handleNewQuote = () => {
    setRandomQuote(quoteData);
  };

  return (
    <div className="App" id="quote-box">
      <QuoteBox quote={quote} />
      <Button id="new-quote" clickHandle={handleNewQuote}>
        New quote
      </Button>
      <TwitterQuote />
    </div>
  );
}

export default App;
