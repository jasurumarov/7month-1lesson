import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Link } from 'react-router-dom'

// IMAGES
import { IoStar } from 'react-icons/io5'
import { RiShoppingCart2Line } from 'react-icons/ri'

const Products = () => {
  const {data: products, loading} = useFetch(`/products`)
  console.log(products);

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
            <button>
              <RiShoppingCart2Line />
                Add
            </button>
        </div>
        <p className="products-section__product__brand">{el.category[0].toUpperCase() + el.category.slice(1)}</p>
    </div>
  ))
  return (
    <div className='products-section'>  
      <div className="container">
        <div className="products-section__title">
          <h2>Popular Products</h2>
          <ul>
              <li className={`category active`}>All</li>
              <li className={`category `}>Milks & Dairies</li>
              <li className={`category `}>Coffes & Teas</li>
              <li className={`category `}>Pet Foods</li>
              <li className={`category `}>Meats</li>
              <li className={`category `}>Vegetables</li>
              <li className={`category `}>Fruits</li>
          </ul>
        </div>
        <div className="products-section__products">
            {cards}
        </div>
        {loading ? <div className="loading">
            {loadingItem}
        </div> : <></>}
      </div>
    </div>
  )
}

export default Products