import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';

const Pop = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
background: #fff;
z-index:999;

&.on {
    display: none;
}
`
const Popup = () => {
    const [TG, setTG] = useState();
    const [cookie, setCookie] = useCookies();

    return (
        <Pop className={TG && 'on'}>
            <div>
                브라우저!! 쿠키를 먹어라 냠!
            </div>
            <input type='checkbox' onChange={
                () => setCookie('name', 'ddd', { path: '/' })
            } />
            오늘 하루 열지 않기
            <button onClick={() => setTG(true)}>Close</button>
        </Pop>
    )
}

export default Popup;