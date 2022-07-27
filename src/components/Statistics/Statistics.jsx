import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({stats, title}) => {
    return (
        <section className={styles.statistics}>
  <h2 className={styles.title}>{title}</h2>

  <ul className={styles.list}> {stats.map (el=>(
     <li className={styles.item} key={el.id}>
     <span className={styles.label}>{el.label}</span>
     <span className={styles.percentage}>{el.percentage}%</span>
   </li>
  )
  )}
  </ul>
</section>
    )
}

Statistics.propTypes = {
    stats: PropTypes.array,
    title: PropTypes.string
}

export default Statistics