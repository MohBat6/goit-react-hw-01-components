import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Statistics.module.css';


const Statistics = ({ title, stats }) => {
  return (
    <section className={Styles.section}>
      {title && <h2 className={Styles.title}> Upload stats </h2>}
      <ul className={Styles.list}>
        {stats.map(stat => (
          <li
            className={Styles.item}
            key={stat.id}
            style={{ backgroundColor: generateColor() }}
          >
            <span className={Styles.label}>{stat.label}</span>
            <span className={Styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

function generateColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

export default Statistics;