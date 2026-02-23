import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);

  const [sixes, setSixes] = useState(0);

  const handleSingle = () => {
    const updatedRuns = runs + 1;
    setRuns(updatedRuns);
  };
  const handleSix = () => {
    const updatedRuns = runs + 6;
    setRuns(updatedRuns);
    const updatedSixes = sixes + 1;
    setSixes(updatedSixes);
  };

  return (
    <div>
      <h3>Player : Pranto</h3>
      <h1>Runs : {runs}</h1>
      <h4>Six counter : {sixes}</h4>
      <button onClick={handleSingle}>Single</button>
      <button>Double</button>
      <button>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
}
