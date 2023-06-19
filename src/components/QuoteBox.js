export default function QuoteBox(props) {
  return (
    <div className="quote-box">
      <div id="text"> {props.quote.quote}</div>
      <div id="author"> {props.quote.author}</div>
    </div>
  );
}
