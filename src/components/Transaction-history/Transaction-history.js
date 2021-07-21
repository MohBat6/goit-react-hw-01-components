import React from 'react';
import PropTypes from 'prop-types';
import TableStructure from './Table-structure';
import css from './Transaction-history.module.css';

const TransactionHistory = ({ transactions }) => {
  return (
    <div className={css.container}>
      <table className={css.table}>
        <thead>
          <tr className={css.head}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody className={css.tbody}>
          {transactions.map(transaction => {
            return (
              <TableStructure
                key={transaction.id}
                id={transaction.id}
                type={transaction.type}
                amount={transaction.amount}
                currency={transaction.currency}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;