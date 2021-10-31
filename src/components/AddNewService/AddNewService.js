import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddNewService.css";
const AddNewService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch(`https://radiant-peak-15690.herokuapp.com/services`, {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert("Added a new service successfully")
          reset()
        }
      })
  }
  return (
    <div className="add-new-service-container">
      <Container>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="d-flex flex-column add-new-service-form justify-content-center align-items-center"
        >
          <label className="add-new-service-label" htmlFor="service-name">
            Service name
          </label>
          <input
            type="text"
            placeholder="service name"
            {...register("name", { required: true })}
          />
          <label
            className="add-new-service-label"
            htmlFor="service-description"
          >
            Service description
          </label>
          <input
            type="text"
            placeholder="description"
            {...register("description", { required: true })}
          />
          <label className="add-new-service-label" htmlFor="service-photo">
            Service Photo
          </label>
          <input
            type="text"
            placeholder="image"
            {...register("image", { required: true })}
          />
          <input type="submit" value="Add Service" />
        </form>
      </Container>
    </div>
  );
};

export default AddNewService;
