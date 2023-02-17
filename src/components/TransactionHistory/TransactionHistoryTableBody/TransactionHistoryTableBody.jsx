import { TableBody, TableRow } from "./TransactionHistoryTableBody.styled";
import PropTypes from "prop-types";


export const TransactionHistoryTableBody = ({transactions}) => {
    // console.log(transactions)
    return (<TableBody>{transactions.map(transaction =>
        <TableRow key={transaction.id}>
            <td>{transaction.type[0].toUpperCase()+transaction.type.slice(1)}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
    </TableRow>)}
        </TableBody>
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