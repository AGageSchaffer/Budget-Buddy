import React, { useState } from 'react'

function NewTransactionForm({ onFormSubmit }) {

    const initialFormData = {
        description: "",
        category: "",
        amount: "",
        date: ""
    }

    const [formData, setFormData] = useState(initialFormData)

    function handleFormChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    
    function handleFormSubmit(e) {
        e.preventDefault()
        onFormSubmit(formData)
        setFormData(initialFormData)
    }

    return(
        <>
        <form onSubmit={handleFormSubmit}>
            <input 
                name="date" 
                onChange={handleFormChange} 
                value={formData.date} 
                type="date" 
                placeholder="Date">
            </input>
                <input 
                name="description" 
                onChange={handleFormChange} 
                value={formData.description} 
                type="text" 
                placeholder="Description">
            </input>
            <input 
                name="amount" 
                onChange={handleFormChange} 
                value={formData.amount} 
                type="number" 
                placeholder="Amount">
            </input>
            <input 
                name="category" 
                onChange={handleFormChange} 
                value={formData.category} 
                type="text" 
                placeholder="Category">
            </input>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default NewTransactionForm