import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem =({key, avatar, name, isOnline}) => {
    return (
       <li className={styles.item} key = {key}>
          <span className={isOnline? styles.statusOn : styles.statusOf}>{isOnline}</span>
          <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={styles.name}>{name}</p>
      </li>
    )
}

FriendListItem.propTypes = {
    key: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
}


export default FriendListItem