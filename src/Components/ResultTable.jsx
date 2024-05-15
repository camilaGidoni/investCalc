import { calculateInvestmentResults, formatter } from '../util/investment'

export default  function ResultTable({userInput}) {
    const futureInvestment = calculateInvestmentResults(userInput)
    const initialInvestment = 
    futureInvestment[0].valueEndOfYear - 
    futureInvestment[0].interest - 
    futureInvestment[0].annualInvestment

    return (
        <table id="result">
            <tbody>
            <tr className="center">
                <th>Year</th>
                <th>Investment value</th>
                <th>Interest (year)</th>
                <th>Total interest</th>
                <th>Invested capital</th>
            </tr>
            {
                futureInvestment.map((investment, index) => {
                    const totalInterest = investment.valueEndOfYear - 
                    (investment.annualInvestment *investment.year) -
                    initialInvestment
                    const totalAmountInvested = investment.valueEndOfYear - totalInterest
                    return (
                    <tr key={index} className="center">
                    <td>{investment.year}</td>
                    <td>{formatter.format(investment.valueEndOfYear)}</td>
                    <td>{formatter.format(investment.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}