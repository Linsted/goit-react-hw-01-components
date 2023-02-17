
import PropTypes from "prop-types";


export const TransactionHistoryTableBody = ({transactions}) => {
    console.log(transactions)
    return (<tbody>{transactions.map(transaction =>
        <tr key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
    </tr>)}
        </tbody>
    )
}

TransactionHistoryTableBody.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired,).isRequired,
}