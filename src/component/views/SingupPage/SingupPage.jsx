import React, { memo, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { singupUser } from '../../../_actions/user_action'

export default memo(() => {

    const dispatch = useDispatch();

    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");
    const [Name, setName] = useState("");
    const [Point, setPoint] = useState("");
    const [Role, setRole] = useState(0);

    const onSubmitHandler = useCallback((e) => {
        e.preventDefault();

        let data = {
            id:Id,
            password:Password,
            name:Name,
            point:Point,
            role:Role
        };

        dispatch(singupUser(data));

    });
    
    const onChangeId = useCallback((e) => {
        setId(e.currentTarget.value);
    });

    const onChangePassword = useCallback((e) => {
        setPassword(e.currentTarget.value);
    });

    const onChangeName = useCallback((e) => {
        setName(e.currentTarget.value);
    });

    const onChangePoint = useCallback((e) => {
        setPoint(e.currentTarget.value);
    });

    const onChangeRole = useCallback((e) => {
        setRole(e.currentTarget.value);
    });
    
    return (
        <>
        <form onSubmit={onSubmitHandler}>
            <label>id</label>
            <input value={Id} onChange={onChangeId}></input>
            <label>password</label>
            <input type="password" value={Password} onChange={onChangePassword}></input>
            <label>이름</label>
            <input value={Name} onChange={onChangeName}></input>
            <label>포인트</label>
            <input value={Point} onChange={onChangePoint}></input>
            <label>권한</label>
            <input value={Role} onChange={onChangeRole}></input>
            <button type='submit'>냐아아악</button>
        </form>
        </>
    )
});
