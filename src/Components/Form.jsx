import React, { useState } from 'react';
import Table from './Table';
import './Form.css';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    amount: '',
    date: ''
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [expenses, setExpenses] = useState([]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenses((prev) => [...prev, formData]);
    setFormData({
      name: '',
      description: '',
      category: '',
      amount: '',
      date: ''
    });
  };

  const handleDelete = (indexToRemove) => {
    setExpenses((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredExpenses = expenses.filter((expense) =>
    Object.values(expense).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="layout-container">
      <form onSubmit={handleSubmit} className="form-card">
        <h2>Add Expense</h2>

        <label htmlFor="name"></label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter expense name"
          required
        />

        <label htmlFor="description"></label>
        <input
          id="description"
          type="text"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter expense description"
          required
        />

        <label htmlFor="category"></label>
        <input
          id="category"
          type="text"
          value={formData.category}
          onChange={handleChange}
          placeholder="Enter expense category"
          required
        />

        <label htmlFor="amount"></label>
        <input
          id="amount"
          type="number"
          min="0"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Enter expense amount"
          required
        />

        <label htmlFor="date"></label>
        <input
          id="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
        />

        <button id="add-button" type="submit">Add</button>
      </form>

      
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search expenses..."
          value={searchTerm}
          onChange={handleSearch}
        />
              <Table expenses={filteredExpenses} onDelete={handleDelete} />

      </div>

    </div>
    
  );
}

export default Form;