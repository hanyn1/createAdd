import React from 'react'
import { useState } from 'react';
import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.css';
export default function AddCar({onAddCar}) {
    const [newCar,setNewCar]=useState({
        name:"",
        color:"",
        type:"",
        image:""
    })
    const handleAddCar=()=>{

        if (newCar.name.trim() === '' || newCar.type.trim() === '' || newCar.image.trim() === '' || newCar.color.trim() === '') {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Please fill in all fields!',
            });
            return;
          }

        onAddCar(newCar)
        setNewCar({
            name:"",
            color:"",
            type:"",
            image:""
        })

        Swal.fire({
            icon: 'success',
            title: 'Car Added!',
            showConfirmButton: false,
            timer: 1500, // Automatically close after 1.5 seconds
          })

    }


  return (
    <div>
        <h1 style={{color:'red'}}>Add your fav car</h1>
      <form>
      <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="inputName"
            className="form-control"
            aria-describedby="nameHelpBlock"
            value={newCar.name}
            onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Color
          </label>
          <input
            type="text"
            id="inputColor"
            className="form-control"
            aria-describedby="nameHelpBlock"
            value={newCar.color}
            onChange={(e) => setNewCar({ ...newCar, color: e.target.value })}
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Type
          </label>
          <input
            type="text"
            id="inputType"
            className="form-control"
            aria-describedby="nameHelpBlock"
            value={newCar.type}
            onChange={(e) => setNewCar({ ...newCar, type: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Image
          </label>
          <input
            type="text"
            id="inputImage"
            className="form-control"
            aria-describedby="nameHelpBlock"
            value={newCar.image}
            onChange={(e) => setNewCar({ ...newCar, image: e.target.value })}
          />
        </div>

        <button className="btn btn-primary" type="button" onClick={handleAddCar}>
          Add Car
        </button>

      </form>
    </div>
  )
}
