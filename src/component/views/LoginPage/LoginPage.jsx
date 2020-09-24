import React, { memo, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../_actions/user_action'

export default memo(( { history }) => {

    const dispatch = useDispatch();

    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");
    
    const onChangeId = useCallback((e) => {
        setId(e.currentTarget.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.currentTarget.value);
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let body = {
            id:Id,
            password:Password
        };

        dispatch(loginUser(body)).then(res => {
            if(res.payload.loginSuccess) { 
                history.push('/');
            } else {
                alert('로그인 실패');
            }
        })
    };

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
