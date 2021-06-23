import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

const api = 'http://localhost:5000/api' //todo: get this from config, you know better.

const HeaderUserInfo = () => {

    const [username, setUsername] = useState('Some User');

    useEffect(() => {
        const getUsernameAsync = async () => {
            // credentials must be included in order for the browser to store cookies from the server.
            await fetch(`${api}/cookies/username`, { credentials: 'include' });
            setUsername(Cookies.get('username'));
        }
        getUsernameAsync();
    }, [username]);

    return (
        <>
            Signed in as: <a href="#login">{username}</a>
        </>
    )
}

export default HeaderUserInfo
