import React, { useEffect } from 'react' // rfce
import axios from 'axios'

function LandingPage() {

    useEffect(() => {
        axios.get('/auth')
        .then((res) => {
            console.log(res);
        });
        return () => {
        }
    }, [])

    return (
        <>
        <h1>이게뭐노?</h1>
        </> 
    )
}

export default LandingPage
