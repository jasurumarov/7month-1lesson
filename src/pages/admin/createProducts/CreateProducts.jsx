import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from '../../../api'
import { toast } from 'react-toastify'

// IMAGES
import ProductImg from "../../../images/product-img.png"
import { RiShoppingCart2Line } from 'react-icons/ri'
import { IoStar } from 'react-icons/io5'

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

  const handlePriceChange = e => {
    const input = e.target.value;
    const numericInput = /^[0-9]*$/;
    if (numericInput.test(input) || input === '') {
      setData(prev => ({...prev, price: input}));
    }
  };
  
  
  return (
    <div>
      <h2>Create Products</h2>
      <div className="create-products">
        <form onSubmit={handleCreateProduct}>
          <TextField required value={data.title} onChange={e => setData(prev => ({...prev, title: e.target.value}))} className='form__input' size='small' id="outlined-basic" label="Title" variant="outlined" />
          <TextField required value={data.desc} onChange={e => setData(prev => ({...prev, desc: e.target.value}))} className='form__input' size='small' id="outlined-basic" label="Description" variant="outlined" />
          <TextField required value={data.category} onChange={e => setData(prev => ({...prev, category: e.target.value}))} className='form__input' size='small' id="outlined-basic" label="Category" variant="outlined" />
          <TextField 
            required 
            value={data.price} 
            onChange={handlePriceChange} 
            className='form__input' 
            type='number' 
            size='small' 
            id="outlined-basic" 
            label="Price" 
            variant="outlined" />
          <Button type='submit' variant='contained'>Create</Button>
        </form>
        <div className="products-section__product">
          <div className="products-section__product__img">
              <img src={ProductImg} alt="" />
          </div>
          <p className='products-section__product__type'>{data.category ? data.category : "Product's category"}</p>
          <p className='products-section__product__title'>{data.title ? data.title : "Product's title"}</p>
          <div className='products-section__product__rating'>
              <span>
                {new Array(5).fill(<IoStar className='rate'/>) }
              </span>
              <h5>(4.9)</h5>
          </div>
          <p className="products-section__product__company">By <span>BrandRows</span></p>
          <div className="products-section__product__price">
              <div>
                  <p>${data.price ? data.price : "999"}</p>
                  <span><del>${Math.round(900 * 2)}</del></span>
              </div>
              <button>
                <RiShoppingCart2Line />
                  Add
              </button>
          </div>
          <p className="products-section__product__brand">{data.category ? data.category : "Product's category"}</p>
        </div>
      </div>
    </div>
  )
}

export default CreateProducts