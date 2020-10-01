import React, { memo, useState, useCallback } from 'react'
import { withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../_actions/user_action'

const LoginPage = memo(( { history } ) => {

    const dispatch = useDispatch();

    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");
    
    const onChangeId = useCallback((e) => {
        setId(e.currentTarget.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.currentTarget.value);
    }, []);

    const onSubmitHandler = useCallback((e) => {
        e.preventDefault();

        let body = {
            id:Id,
            password:Password
        };



        dispatch(loginUser(body))
        .then(res => {
            if(res.payload.loginSuccess) { 
                console.log(history);
                history.push('/');
            } else {
                console.log(res.payload);
            }
        })
    }, [Id, Password]);

    return (
        <>
        <form onSubmit={onSubmitHandler}>
            <label>id</label>
            <input value={Id} onChange={onChangeId}></input>
            <label>password</label>
            <input type="password" value={Password} onChange={onChangePassword}></input>
            <button type='submit'>갸아아악</button>
        </form>
        </>
    )
});

export default withRouter(LoginPage);