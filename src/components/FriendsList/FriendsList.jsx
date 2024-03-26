import FriendsListItem from "../FriendListItem/FriendListItem";


export default function FriendsList({ userFriends }) {
    return( <ul>
        {userFriends.map((friend ) => (
            <li key={friend.id}>
        <FriendsListItem friend = { friend }/> 
            
        </li>))}
    </ul>)
   
};

