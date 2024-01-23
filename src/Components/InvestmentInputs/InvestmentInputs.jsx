import "./InvestmentInputs.css";
export default function InvestmentInputs(props) {
  function getInputValues(e) {
    const { name, value } = e.target;
    props.getData((prevInput) => ({
      ...prevInput,
      [name]: +value,
    }));
  }

  return (
    <>
      <div className="calculator">
        <div className="calculator__input">
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            type="number"
            min={"0"}
            name="initialInvestment"
            onChange={getInputValues}
          />
        </div>
        <div className="calculator__input">
          <label htmlFor="initial-investment">Annual Investment</label>
          <input
            min={"0"}
            type="number"
            name="annualInvestment"
            onChange={getInputValues}
          />
        </div>
        <div className="calculator__input">
          <label htmlFor="initial-investment">Expected Return</label>
          <input
            min={"0"}
            type="number"
            name="expectedReturn"
            onChange={getInputValues}
          />
        </div>
        <div className="calculator__input">
          <label htmlFor="initial-investment">Duration</label>
          <input
            min={"0"}
            type="number"
            name="duration"
            onChange={getInputValues}
          />
        </div>
      </div>
    </>
  );
}
