// import PropTypes from "prop-types";
import { TransactionHistoryTableHead } from "./TransactionHistoryTableHead/TransactionHistoryTableHead";
import { TransactionHistoryTableBody } from "./TransactionHistoryTableBody/TransactionHistoryTableBody";
import transactions from "transactions.json";




export const TransactionHistory = () => {
    return (<>
        <table>
            <TransactionHistoryTableHead />

            <TransactionHistoryTableBody transactions={transactions} />
        </table>
    </>)
}