import React from 'react'
import SingleRouteHeader from '../../components/singleRouteHeader/SingleRouteHeader'
import SingleRouteProduct from '../../components/singleRouteProduct/SingleRouteProduct'

const SingleRoute = () => {
  return (
    <div className='singleRoute-page'>
      <SingleRouteHeader name={"Product"} arr={">"} sname={"Seeds of Change Organic"}/>
      <SingleRouteProduct/>
    </div>
  )
}

export default SingleRoute