import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const SLIDE = [
    { id: 1, content: <span>01. The World expands<br/>along the new path created</span>, desc: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다.", link: "https://my.matterport.com/show/?m=yEdf9FWaNav", title: "스마트 테크놀로지" },
    { id: 2, content: <span>02. The World expands<br/>along the new path created</span>, desc: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다.", link: "https://my.matterport.com/show/?m=yEdf9FWaNav", title: "스마트 테크놀로지" },
    { id: 3, content: <span>03. The World expands<br/>along the new path created</span>, desc: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다.", link: "https://my.matterport.com/show/?m=yEdf9FWaNav", title: "스마트 테크놀로지" },
]

const MainVisual = () => {

    const [IDX, setIDX] = useState();
    useEffect(() => {
        setIDX(0)
    }, []);

    const mainSlide = useRef(null);

    const setting = {
        arrows: false,
        dots: true,
        afterChange: index => setIDX(index),
        autoplay: true,
        autoplaySpeed: 5000,
        // fade: true,
    }

    return (
        <section className='MainVisual'>
            <Slider {...setting} ref={mainSlide}>
                {
                    SLIDE.map((slide, idx) => {
                        return (
                            <figure key={slide.id} className={`itm0${slide.id} ${(idx === IDX ? 'on' : '')}`}>
                                <div className="inner" >
                                    <p className='tit'>{slide.content}</p>
                                    <div className='des'>{slide.desc}</div>
                                    <a href={slide.link} target="_blank" className='cbtn'>
                                        VIEW MORE
                                    </a>
                                </div>
                            </figure>
                        )
                    })
                }
            </Slider >
            <div className='slideNum'>
                0{IDX + 1}<span> / 0{SLIDE.length}</span>
            </div>
            <ul className='slideTab'>
                {
                    SLIDE.map((dots, idx) => {
                        return (
                            <li key={dots.id} className={idx === IDX ? 'on' : ''} onClick={()=> mainSlide.current.slickGoTo(idx)}>{dots.title}</li>
                        )
                    })
                }
            </ul>
            <div className='slideArrows'>
                <button onClick={() => mainSlide.current.slickPrev()}><i className='xi-arrow-left'></i></button>
                <button onClick={() => mainSlide.current.slickNext()}><i className='xi-arrow-right'></i></button>
            </div>
        </section >
    )
}

export default MainVisual;