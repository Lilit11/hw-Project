<<<<<<< HEAD
// import React from "react";
import { useState } from "react";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { IUser } from "../../helpers/types";
import { handleLogin } from "../../helpers/api";

export function Login() {
  const { register, handleSubmit } = useForm<IUser>();
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const loginHandler:SubmitHandler<IUser> = (user) => {
    handleLogin(user)
    .then(response => {
        if (response.status === "error" && response.message) {
            setError(response.message);
        } else {
            setError("");
            navigate("/profile");
        }
    })
  }

  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center">
        <MDBCol lg="8">
          <MDBCard className="my-5 rounded-3" style={{ maxWidth: "600px" }}>
            <MDBCardImage
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
              className="w-100 rounded-top"
              alt="Sample photo"
            />
            <MDBCardBody className="px-5">
              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Login Info</h3>
              <p>
                Don't you have an account? <Link to={"/"}>Signup Now</Link>
              </p>
              <form onSubmit={handleSubmit(loginHandler)}>
                {error && <p className="text-danger">{error}</p>}
                <MDBInput wrapperClass="mb-4" label="Login" type="text" {...register('login')}/>
                <MDBInput wrapperClass="mb-4" label="Password" type="password" {...register('password')}/>
                <button type="submit" className="btn btn-outline-info">
                  Submit
                </button>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
=======
import React, { useState } from 'react';
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput,
}
    from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { PartialUser } from '../../helpers/types';
import { SubmitHandler, set, useForm } from 'react-hook-form';
import { handleLogin } from '../../helpers/api';

export function Login() {

    const {register, handleSubmit} =useForm<PartialUser>()
    const [error, setError]= useState<string>("")
    const navigate = useNavigate()
    const handleForm:SubmitHandler<PartialUser> = (user)=>{
      handleLogin(user)
      .then(res=>{
        if(res.status == "error" && res.message){
            setError(res.message)
        }else{
            setError("")
            navigate('/profile')
        }
      })
        
    }
    return (
        <MDBContainer fluid>

            <MDBRow className='d-flex justify-content-center align-items-center'>

                <MDBCol lg='8'>

                    <MDBCard className='my-5 rounded-3' style={{ maxWidth: '600px' }}>
                        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp' className='w-100 rounded-top' alt="Sample photo" />

                        <MDBCardBody className='px-5'>

                            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Login Info</h3>
                            <p>Don't you have an account? <Link to={'/'}>Signup Now</Link></p>
                            <form onSubmit={handleSubmit(handleForm)}>
                                {error && <p className='text-danger'>{error}</p>}
                                <MDBInput
                                    wrapperClass='mb-4'
                                    label='Login'
                                    type='text'
                                    {...register("login")}
                                />
                                <MDBInput
                                    wrapperClass='mb-4'
                                    label='Password'
                                    type='password'
                                    {...register("password")}

                                />
                                <button type='submit' className='btn btn-outline-info' >Submit</button>
                            </form>



                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
>>>>>>> 5e7dac83b9a65d709ba21ee515199ed0e4fd3d11
}
