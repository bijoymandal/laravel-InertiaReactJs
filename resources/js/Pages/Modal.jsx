import React, { useState,useEffect  } from 'react';
import '../../css/Modal.css'; // Ensure the modal CSS is imported
import '../../css/Button.css'; // Import the button CSS

const Modal = ({ isOpen, onClose, onSave, data, setData,isEdit  }) => {
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isOpen) {
      // Clear form data when the modal is closed
      setData({ name: '', description: '', price: '', stock: '' });
      setMessage('');
      setError('');
      setErrors({});
    }
  }, [isOpen, setData]);


  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!data.name) newErrors.name = "Name is required";
    if (!data.description) newErrors.description = "Description is required";
    if (!data.price) newErrors.price = "Price is required";
    else if (isNaN(data.price)) newErrors.price = "Price must be numeric";
    if (!data.stock) newErrors.stock = "Style is required";
    return newErrors;
  };

  const handleSave = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // If no errors, proceed to save
      onSave(e, setMessage, setError);
    } else {
      // Set errors to state
      setErrors(validationErrors);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{isEdit ? 'Edit Product':'Create Product'}</h2>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSave}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" value={data.name} onChange={handleChange} required />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea name="description" value={data.description} onChange={handleChange} required></textarea>
            {errors.description && <span className="error">{errors.description}</span>}
          </div>
          <div className="form-group">
            <label>Price:</label>
            <input type="text" name="price" value={data.price} onChange={handleChange} required />
            {errors.price && <span className="error">{errors.price}</span>}
          </div>
          <div className="form-group">
            <label>Stock:</label>
            <input type="text" name="stock" value={data.stock} onChange={handleChange} required />
            {errors.stock && <span className="error">{errors.stock}</span>}
          </div>
          <button type="submit" className="{isEdit ? 'button button-warning':'button button-primary'}">{isEdit ? 'Update' : 'Save'}</button>
          <button type="button" className="button button-secondary" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
