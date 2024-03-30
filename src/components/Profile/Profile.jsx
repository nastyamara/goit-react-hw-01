import css from "./Profile.module.css";


export default function Profile({ name, tag, location, image, stats: { followers, views, likes } }) {


  return (
<div className={css.container}>
      <div className={css.profileInfo}>
     
    <img className={css.avatar}
      src={image}
      alt="User avatar"
          />
    
        <p className={css.userName}>{name}</p>
        <p className={css.userTag}>@{ tag}</p>
    <p className={css.userLocation}>{location}</p>
  </div>

  <ul className={css.userStats}>
    <li className={css.statsItem}>
      <span className={css.statsName}>Followers</span>
    <span className={css.statsNumber}> {followers}</span>
    </li>
    <li className={css.statsItem}>
      <span className={css.statsName}>Views</span>
      <span className={css.statsNumber}> {views}</span>
    </li>
    <li className={css.statsItem}>
      <span className={css.statsName}>Likes</span>
      <span className={css.statsNumber}> {likes}</span>
    </li>
  </ul>
</div>
  )
}
