import FriendsListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";


export default function FriendsList({ userFriends }) {
    return( <ul className={css.container}> 
        {userFriends.map((friend ) => (
            <li className={css.listItem} key={friend.id}>
        <FriendsListItem friend = { friend }/> 
            
        </li>))}
    </ul>)
   
};

