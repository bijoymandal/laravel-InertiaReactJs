import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal'
import ProductList from './ProductList';
import '../../css/Button.css';
import { toast } from 'react-toastify';


const Products = () => {





    //   if (loading) {
    //     return <div>Loading...</div>;
    //   }
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', description: '', price: '', stock: '' });
    const [isEdit, setIsEdit] = useState(false);
    const [currentId, setCurrentId] = useState(null);


    const openModal = () => {
        setIsModalOpen(true);
        setIsEdit(false);
        // setMessage(''); // Clear any previous messages
        // setError('');
      };


      const openEditModal = (id) => {
        fetch(`/api/products/${id}`)
          .then(response => response.json())
          .then(data => {
            setFormData({
              name: data.name,
              description: data.description,
              price: data.price,
              stock: data.stock,
            });
            setCurrentId(id);
            setIsEdit(true); // Set to true when opening the modal for editing
            setIsModalOpen(true);
          })
          .catch(error => {
            toast.error('Error fetching data: ' + error.message);
          });
      };

      const closeModal = () => {
        setIsModalOpen(false);
        setFormData({ name: '', description: '', price: '', stock: '' });
        setCurrentId(null);
      };

      const handleSave = (e) => {
        e.preventDefault();

        const url = isEdit ? `/api/products/${currentId}` : '/api/products';
        const method = isEdit ? 'PUT' : 'POST';

        fetch(url, {
          method: method,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
          if (data.status === true) {
            toast.success(data.message);
            // setError('');
            // Reset the form data
            setFormData({ name: '', description: '', price: '', stock: '' });
            // Close the modal
            setTimeout(closeModal(),200);
          } else {
            toast.error(data.message || 'Error saving data');
          }
        })
        .catch(error => {
            toast.error('Error saving data: ' + error.message);
        });
      };

    return (
        <>
            <div>
                <h1>Products</h1>
                <button onClick={openModal} className='button button-primary'>Create Product</button>

                <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                onSave={handleSave}
                data={formData}
                setData={setFormData}
                isEdit={isEdit}
                />
                <ProductList onEdit={openEditModal}/>
            </div>
        </>
    );


}

export default Products;
