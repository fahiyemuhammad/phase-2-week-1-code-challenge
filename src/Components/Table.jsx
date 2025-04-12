import React from 'react';
import './Table.css'; 

function Table({ expenses, onDelete }) {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Expense</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            {onDelete && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {expenses.length === 0 ? (
            <tr>
              <td colSpan={onDelete ? 6 : 5}>No expenses yet.</td>
            </tr>
          ) : (
            expenses.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>${item.amount}</td>
                <td>{item.date}</td>
                {onDelete && (
                  <td>
                    <button id="delete-button"onClick={() => onDelete(index)}>Delete</button>
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;