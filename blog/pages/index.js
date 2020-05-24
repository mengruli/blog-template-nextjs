import { withLayout } from '../utils/hoc'
import React, { useState } from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Col,
    Row,
    ListGroup,
    ListGroupItem
  } from 'reactstrap'
import fetch from 'node-fetch';

function IndexPage(props) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [animating, setAnimating] = useState(false)
    const categories = Object.keys(props)

    const sites = [
        {
            title: "Thoughts on Software Enigineering",
            description: "Click the background to access the site",
            url: "https://system-design.graycat89.com",
            background: "images/dsc-triangle.png"
        },
        {
            title: "Talk is cheap, show me the code",
            description: "Click the background to access the site",
            url: "https://coding.graycat89.com",
            background: "images/coding.png"
        },
        {
            title: "She can code; She can cook; Are you hungry?",
            description: "Click the background to access the site",
            url: "https://cooking.graycat89.com",
            background: "images/food.jpg"
        },
        {
            title: "Thoughts on life",
            url: "https://life.graycat89.com",
            description: "Click the background to access the site",
            background: "images/life.jpg"
        }
    ]

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === sites.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? sites.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = sites.map((item) => {
        return (
          <CarouselItem
            className="site-slide"
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.title}
          >
            <a target="_blank" href={item.url}>
            <img src={item.background} alt={item.title} />
            </a>
            <CarouselCaption className="slide-caption" captionText={item.description} captionHeader={item.title} />
          </CarouselItem>
        );
    });

    return(
        <div>
             <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            >
            <CarouselIndicators items={sites} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
            <div style={{marginTop: "1em"}}>
                { categories.map(c => {
                    return <Row>
                        <Col>
                        <h3>{c}</h3>
                        <ListGroup>
                        {
                            props[c].map(p => {
                                return <ListGroupItem>
                                    <a href={"posts/" + p.id}>{p.title}</a>
                                </ListGroupItem>
                            })
                        }
                        </ListGroup>
                        </Col>
                    </Row>
                }) }
            </div>
        </div>
    )
}

export async function getServerSideProps(ctx) {

    const res = await fetch(`${process.env.API_BASE || 'http://localhost:3000/api'}/posts?limit=5`);
    const json = await res.json();
    
    return {
        props: json
    }
}
export default withLayout(IndexPage)