import "./ResultsTable.css";
import { calculateInvestmentResults, formatter } from "../../util/investment";
export default function ResultsTable({ results }) {
  return (
    <>
      {results.duration > 0 ? (
        <table>
          <tbody>
            <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
            {calculateInvestmentResults(results).map(
              (convertedResult, index) => (
                <tr key={index}>
                  <td key={convertedResult.year}>{convertedResult.year}</td>
                  <td key={convertedResult.valueEndOfYear}>
                    {formatter.format(convertedResult.valueEndOfYear)}
                  </td>
                  <td key={convertedResult.interest}>
                    {formatter.format(convertedResult.interest)}
                  </td>
                  <td key={convertedResult}>
                    {formatter.format(
                      convertedResult.valueEndOfYear -
                        results.initialInvestment -
                        convertedResult.annualInvestment * convertedResult.year
                    )}
                  </td>
                  <td key={convertedResult.annualInvestment}>
                    {formatter.format(
                      results.initialInvestment +
                        convertedResult.annualInvestment * convertedResult.year
                    )}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      ) : (
        <div className="warning">
          Please enter a duration greater than zero.
        </div>
      )}
    </>
  );
}
