import React from "react";
import {Field, reduxForm} from "redux-form";
import store from "../../redux/store";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"input"} placeholder={"Login"} name={"login"} />
            </div>
            <div>
                <Field component={"input"} placeholder={"Password"} name={"password"} />
            </div>
            <div>
                <Field component={"input"} type={"checkbox"} name={"rememberMe"} /> Remember me
            </div>
            <div>
                <button>Log In</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;