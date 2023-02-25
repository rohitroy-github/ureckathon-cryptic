import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from "axios";

export const Register = (props) => {
  const navigate = useNavigate();
  const [showpass, setShow] = useState(true)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post('http://localhost:5000/usercrypto', data).then((res) => {
      console.log(res);
      localStorage.setItem('crypticUser', JSON.stringify(res.data.user))
      navigate("/dashboard");
    }).catch((error) => {
      alert(error.message)
    })

  };
  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <Form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <label style={{ display: 'block' }}>Name</label>
          <span className="passwordHolder">
            <input
              placeholder="Name"
              type="text"
              {...register("Name", { required: true, maxLength: 20 })}
              style={{ width: '100%' }}
            />
          </span>
        </Form.Field>
        {errors.Name && <p className="error-paragraph">Please check the Name</p>}
        <Form.Field>

          <label >Email</label>
          <span className="passwordHolder">
            <input
              placeholder="Email"
              type="email"
              {...register("email", {
                required: true,
                pattern:
                  '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/',
              })}
            />
          </span>
        </Form.Field>
        {errors.email && <p className="error-paragraph">Please check the Email</p>}
        <Form.Field>
          <label style={{ display: 'block' }}>Password</label>
          <span className="passwordHolder">
            <input
              placeholder="Password"
              type={showpass ? 'password' : 'text'}
              {...register("password", {
                required: true,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
              })}
            />
            {showpass && <VisibilityIcon className="showicon" onClick={() => setShow(false)} />}
            {!showpass && <VisibilityOffIcon className="showicon" onClick={() => setShow(true)} />}
          </span>
        </Form.Field>
        {errors.password && <p className="error-paragraph">Please check the Password</p>}
        <Button type="submit">Register</Button>
      </Form>
      <div className="btn-div">
        <p className="text-btn">Already have an account? </p>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("login")}
        >
          Login here.
        </button>
      </div>
    </div>
  );
};