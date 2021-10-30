import React from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import "./BookOrder.css"
import useAuth from '../../hooks/useAuth';
import { Container } from 'react-bootstrap';
const BookOrder = () => {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  const { id } = useParams();
  const date = new Date();
  return (
    <div>
      <Container className="d-flex justify-content-center align-items-center">
        <form className="d-flex flex-column book-order-form " onSubmit={handleSubmit(onSubmit)}>
          <input {...register("email")} />
          <input {...register("date")} defaultValue={date} type="date" />
          <input type="text" defaultValue={user.displayName}  {...register("name")} />
          <input type="submit" />
        </form>
      </Container>
    </div>
  );
};

export default BookOrder;