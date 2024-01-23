import { useState } from "react";
import Header from "./Components/Header/Header";
import InvestmentInputs from "./Components/InvestmentInputs/InvestmentInputs";
import ResultsTable from "./Components/ResultsTable/ResultsTable";

function App() {
  const [enteredData, setEnteredData] = useState({
    initialInvestment: null,
    annualInvestment: null,
    expectedReturn: null,
    duration: null,
  });
  return (
    <>
      <Header />
      <InvestmentInputs getData={setEnteredData} />
      <ResultsTable results={enteredData} />
    </>
  );
}

export default App;
