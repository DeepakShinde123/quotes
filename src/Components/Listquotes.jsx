import Singlequotes from "./Singlequotes";

function Listquotes({ quotes }) {
  return (
    <div className="flex flex-col gap-2">
      {quotes.map((quote) => (
        <Singlequotes key={quote.id} quote={quote} />
      ))}
    </div>
  );
}

export default Listquotes;
