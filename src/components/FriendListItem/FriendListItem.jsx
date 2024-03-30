import clsx from "clsx";
import css from "./FriendListItem.module.css";


export default function FriendsListItem({ friend: { name, avatar, isOnline } }) {
    return (   <div className={css.container}>
      <img className={ css.avatar} src={avatar} alt="Avatar" width="48" />
  <p>{name}</p>
  <p className={clsx(css.text, isOnline ? css.online : css.offline)}>{isOnline? "Online": "Offline"}</p>
</div> )

};

