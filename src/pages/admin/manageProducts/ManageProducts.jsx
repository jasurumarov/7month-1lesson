import React, { useState } from 'react'
import { useFetch } from '../../../hooks/useFetch'
import { Link } from 'react-router-dom'

// IMAGES
import { IoStar } from 'react-icons/io5'
import { RiShoppingCart2Line } from 'react-icons/ri'
import axios from '../../../api'
import { toast } from 'react-toastify'

const manageProducts = () => {
  const [reload, setReload] = useState(false)
  const {data: products, loading} = useFetch(`/products`, reload)

  let loadingItem = Array(10).fill("").map((el, i) => (
    <div key={i} className="products-section__product">
      <div className="products-section__product__img"></div>
      <p className='products-section__product__type'></p>
      <p className='products-section__product__title'></p>
      <div className='products-section__product__rating'></div>
      <p className="products-section__product__company"></p>
      <div className="products-section__product__price">
          <div></div>
          <button></button>
      </div>
      <p className="products-section__product__brand"></p>
    </div>
  ))

  const handleDeleteUser = id => {
    if(window.confirm("Are you sure")) {
      axios
        .delete(`/products/${id}`)
        .then(res => {
          console.log(res)
          setReload(p => !p)
          toast.warning("Product has been deleted")
        })
        .catch(err => console.log(err))
    }
  }

  let cards = products?.data?.map(el => (
    <div key={el.id} className="products-section__product">
        <div className="products-section__product__img">
            <Link to={`/product/${el.id}`}>
                <img src={el.image} alt="" />
            </Link>
        </div>
        <p className='products-section__product__type'>{el.category}</p>
        <p className='products-section__product__title' title={el.title}>{el.title}</p>
        <div className='products-section__product__rating'>
            <span>
              {new Array(Math.round(el.rating/ 10 / 2)).fill(<IoStar className='rate'/>) } {new Array(5 - (Math.round(el.rating/ 10 / 2))).fill(<IoStar className='unrate'/>) }  
            </span>
            <h5>({el.rating / 10 / 2})</h5>
        </div>
        <p className="products-section__product__company">By <span>BrandRows</span></p>
        <div className="products-section__product__price">
            <div>
                <p>${el.price}</p>
                <span><del>${Math.round(el.price * 2)}</del></span>
            </div>
            <button onClick={() => handleDeleteUser(el.id)}>
              <RiShoppingCart2Line />
                Delete
            </button>
        </div>
        <p className="products-section__product__brand">{el.category[0].toUpperCase() + el.category.slice(1)}</p>
    </div>
  ))
  return (
    
    <div>
        <h2>Manage Products</h2>
        <div className='products-section'>  
          <div className="container">
            <div className="products-section__products">
                {cards}
            </div>
            {loading ? <div className="loading">
                {loadingItem}
            </div> : <></>}
          </div>
        </div>
    </div>
  )
}

export default manageProducts