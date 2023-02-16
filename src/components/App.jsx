import { Profile } from '../components/Profile/Profile';
import { Statistics } from "components/Statistics/Statistics";
import friends from "friends.json"
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';



export const App = () => {
  return (
    <>
    < Profile />
      <Statistics />
      <FriendList friends={friends} />
      <TransactionHistory />
    </>
    );
};
