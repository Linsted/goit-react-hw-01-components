import { Profile } from '../components/Profile/Profile';
import { Statistics } from "components/Statistics/Statistics";
import friends from "friends.json"
import { FriendList } from './FriendList/FriendList';



export const App = () => {
  return (
    <>
    < Profile />
      <Statistics />
      <FriendList friends={friends} />
    </>
    );
};
