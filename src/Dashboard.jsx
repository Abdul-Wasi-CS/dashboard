import React, { useState } from 'react'
import { IoMenuSharp } from "react-icons/io5";
import './Dashboard.css'

const Dashboard=()=> {
    const [show ,setshow] = useState(true)
  return (
    <div className='container-fluid'>
      <div className='row'>
      <div className='text-start toggler shadow bg-white mt-3'><button className='border-0'><IoMenuSharp  onClick={(e) => {e.preventDefault();
  setshow(!show);}}/></button></div>
       {show && <div className='col-sm-3 shadow bg-white rounded mt-2'>
            <div >
            <div className='mt-3'>
            <img src="./images/dashboard/sidebar-pic.png" alt="" height="30px"/>
            </div>
            <div className='bg-primary mt-5'><h5 className='text-white p-3'>Dashboard</h5></div>
        </div>
        </div>
    }
        <div className='col-sm-9 mt-2'>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
