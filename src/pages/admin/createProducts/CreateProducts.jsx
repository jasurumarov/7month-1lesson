import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from '../../../api'
import { toast } from 'react-toastify'

const initialState = {
  title: "",
  price: "",
  desc: "",
  category: ""
}

const CreateProducts = () => {
  const [data, setData] = useState(initialState)
  const handleCreateProduct = e => {
    e.preventDefault()
    axios 
      .post("/products", data)
      .then(res => {
        toast.success("Succesfully created")
        console.log(res)
        setData(initialState)
      })
      .catch(err => console.log(err))
  }
  return (
    <div>
      <h2>Create Products</h2>
      <form onSubmit={handleCreateProduct}>
        <TextField value={data.title} onChange={e => setData(prev => ({...prev, title: e.target.value}))} className='form__input' size='small' id="outlined-basic" label="Title" variant="outlined" />
        <TextField value={data.desc} onChange={e => setData(prev => ({...prev, desc: e.target.value}))} className='form__input' size='small' id="outlined-basic" label="Description" variant="outlined" />
        <TextField value={data.category} onChange={e => setData(prev => ({...prev, category: e.target.value}))} className='form__input' size='small' id="outlined-basic" label="Category" variant="outlined" />
        <TextField value={data.price} onChange={e => setData(prev => ({...prev, price: e.target.value}))} className='form__input' type='number' size='small' id="outlined-basic" label="Price" variant="outlined" />
        <Button type='submit' variant='contained'>Create</Button>
      </form>
    </div>
  )
}

export default CreateProducts