import React, { useState } from 'react'
import axios from 'axios';
const AddBooks = () => {
  const [Data, setData]= useState({bookname:"", author:"", description:"", price:"", image:""})
  const change=(e)=>{
   const{name, value}= e.target;
   setData({...Data, [name]: value});
  };
  const submit= async(e)=>{
    e.preventDefault();
   await axios.post("http://localhost:1000/api/v1/add", Data).then((res)=>alert(res.data.message));
   setData(
    {bookname:"", author:"", description:"", price:"", image:""}
   )
  }
  console.log(Data);
  return (
    <div className='bg-dark d-flex justify-content-center align-items-center' style={{minHeight:"91.5vh"}}>
      <div className='conrainer p-4'>
        <div className="mb-3">
            <label for="exampleFormControlInput1" className='form-label text-white'>
                Book Name
                </label> 
                <input type='text' className='form-control' id='exampleFormControlInput1' placeholder='Enter Book Name' value={Data.bookname} name='bookname' onChange={change} />
                
    </div>
   <div className='mb-3'>
   <label for="exampleFormControlInput1" className='form-label text-white'>
                Author
                </label> 
                <input type='text' className='form-control' id='exampleFormControlInput1' placeholder='Enter Name Of Author' value={Data.author} name='author'onChange={change}/>
   </div>
   <div className='mb-3'>
   <label for="exampleFormControlInput1" className='form-label text-white'>
                Description
                </label> 
                <input type='text' className='form-control' id='exampleFormControlInput1' placeholder='Enter The Description' value={Data.description} name='description'onChange={change}/>
   </div>
   <div className='mb-3'>
   <label for="exampleFormControlInput1" className='form-label text-white'>
                Image
                </label> 
                <input type='text' className='form-control' id='exampleFormControlInput1' placeholder='Enter Image URL' value={Data.image} name='image'onChange={change}/>
   </div>
   <div className='mb-3'>
   <label for="exampleFormControlInput1" className='form-label text-white'>
                Price
                </label> 
                <input type='number' className='form-control' id='exampleFormControlInput1' placeholder='Enter Price Of The Book' value={Data.price} name='price'onChange={change}/>
   </div>
   <button className='btn btn-success' onClick={submit}>Submit</button>
   </div>
    </div>
    
  );
};
export default AddBooks
