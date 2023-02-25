import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
  const navigate = useNavigate();
  const [showpass, setShow] = useState(true)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post('http://localhost:5000/userLogin', data).then((res) => {
      console.log(res);
      localStorage.setItem('crypticUser', JSON.stringify(res.data.user))
      navigate("/dashboard");
    }).catch((error) => {
      alert(error.message)
    })
  };
  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <Form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <label>Email</label>
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
          <label>Password</label>
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
        {errors.password && <p className="error-paragraph">Please give a suitable password</p>}
        <Button type="submit">Login</Button>
      </Form>
      <div className="btn-div">
        <p className="text-btn">Don't have an account? </p>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("register")}
        >
          Register here.
        </button>
      </div>
    </div>
  );
};
