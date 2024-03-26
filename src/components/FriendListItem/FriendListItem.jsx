
export default function FriendsListItem({ friend: { name, avatar, isOnline } }) {
    return (   <div>
  <img src={avatar} alt="Avatar" width="48" />
  <p>{name}</p>
  <p>{isOnline? "Online": "Offline"}</p>
</div> )

};

