import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import "./BookOrder.css"
import useAuth from '../../hooks/useAuth';
import { Container } from 'react-bootstrap';
const BookOrder = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [bookOrderedService, setBookOrderedService] = useState();
  const { register, handleSubmit, reset } = useForm();
  useEffect(() => {
    fetch(`https://radiant-peak-15690.herokuapp.com/services/${id}`)
      .then(res => res.json())
      .then(data => setBookOrderedService(data))
  }, [])
  const onSubmit = data => {
    data.image = bookOrderedService?.image;
    data.serviceName = bookOrderedService?.name;
    data.status = "pending";
    fetch("https://radiant-peak-15690.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert("ordered successfully")
          reset();
        }
      })
  }


  return (
    <div>
      <Container className="d-flex justify-content-center align-items-center">
        <form className="d-flex flex-column book-order-form " onSubmit={handleSubmit(onSubmit)}>
          <input type="email" {...register("email")} defaultValue={user.email} />
          <input {...register("date")} type="date" />
          <input type="text" defaultValue={user.displayName} {...register("name")} />
          <input type="submit" value="Order" />
        </form>
      </Container>
    </div>
  );
};

export default BookOrder;