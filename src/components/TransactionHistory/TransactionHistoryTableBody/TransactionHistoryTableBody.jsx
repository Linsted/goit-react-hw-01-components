
import PropTypes from "prop-types";


export const TransactionHistoryTableBody = ({transactions}) => {
    console.log(transactions)
    return (
        <tbody >
            {transactions.map(transaction => <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>)}
        </tbody>
    )
}

// TransactionHistoryTableBody.propTypes = {
//     transactions: PropTypes.arrayOf().isRequired,
// }