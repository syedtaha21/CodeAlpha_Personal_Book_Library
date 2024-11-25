import React from 'react'
import { Link } from 'react-router-dom'
const BooksSection = ({data}) => {
    
  return (
    <div className='d-flex justify-content-around align-items-center flex-wrap my-3'>
       
        {data && data.map((item, index)=>
          

        <div className='' style={{width:"200px", height:"350px", border:"1px solid white", borderRadius:"20px" }}>
            <div><img style={{width:"200px", height:"210px", borderTopLeftRadius:"20px", borderTopRightRadius:"20px"}} className='img-fluid' src={item.image} alt='/'/></div>
            
            <h6 style={{fontSize:"15px"}} className='text-white px-2 my-1'>{item.bookname.slice(0, 20)}...</h6>
            <b style={{fontSize:"30px", color:"red"}} className='mb-2 px-2'> Rs. {item.price}</b>
           <div className='d-flex justify-content-around align-items-center my2'> 
           <Link to={`/updateBooks/${item._id}`} className='btn btn-primary'>UPDATE</Link>
           <Link to={`/deleteBooks/${item._id}`} className='btn btn-danger'>DELETE</Link>
           </div>
           
            
            </div>)}
     
    </div>
  )
}

export default BooksSection
