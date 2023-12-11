import React from 'react'
import './carList.css'
import AddCar from './AddCar';
import Data from '../database/Data';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
export default function CarsList() {
    //inisialization with data
    const [cars,setCars]=useState(Data)
    //function to add the new car
    const handleAddCar=(newCar)=>{
        const updateCar=[...cars,{...newCar, id:cars.length+1}]
        setCars(updateCar)
    }

  return (
    <div>
        <h1 style={{color:'red'}}>YOUR FAV CAR LIST</h1>
      {
        cars.map((car)=>(
            <div class="card mb-3" style={{width: "540px"}} key={car.id}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={car.image} class="img-fluid rounded-start" alt='...' />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title" >{car.name}</h5>
        <p class="card-text">{car.type}</p>
        <p class="card-text"><small class="text-body-secondary">{car.color}</small></p>
      </div>
    </div>
  </div>
</div>
        ))
      }
      <AddCar onAddCar={handleAddCar}/>
      
    </div>
  )
}
