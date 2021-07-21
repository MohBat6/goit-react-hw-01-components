import React from 'react';
import PropTypes from 'prop-types';
import css from './Table-structure.module.css';

const TableStructure = ({ id, type, amount, currency }) => {
  return (
    <tr className={css.rou} key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TableStructure.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TableStructure;