import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
//gsap... javascript animation, styled-component

const Btn = styled.div`
position: fixed;
bottom: 100px;
right: 100px;
color: #fff;
background: #008850;
font-size:30px;
padding: 10px;
border-radius: 50%;
visibility:hidden;
opacity:0;
cursor:pointer;
${props => {
        if (props.on) {
            return `
        visibility:visible;
        opacity:1,
        background: #000`
        }
    }}
`;

const Totop = () => {
    const [scrollY, setScrollY] = useState(300);
    const totopHandler = () => {
        gsap.to(window, { duration: 0.5, scrollTo: 0 });
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            let scy = window.scrollY;
            setScrollY(scy)
        });
        return () => {
            window.removeEventListener('scroll',() => {
                
            })
        }
    }, []);

    return (
        <Btn onClick={totopHandler} className={scrollY > 400 ? 'on' : ''} >
            <i className="xi-arrow-top"></i>
        </Btn>
    )
}

export default Totop;