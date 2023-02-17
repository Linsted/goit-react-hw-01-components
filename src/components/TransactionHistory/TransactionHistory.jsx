
import { TransactionHistoryTableHead } from "./TransactionHistoryTableHead/TransactionHistoryTableHead";
import { TransactionHistoryTableBody } from "./TransactionHistoryTableBody/TransactionHistoryTableBody";
import transactions from "transactions.json";
import {Table} from "./TransactionHistory.styled"




export const TransactionHistory = () => {
    return (<>
        <Table>
            <TransactionHistoryTableHead />

            <TransactionHistoryTableBody transactions={transactions} />
        </Table>
    </>)
}