import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react'
import { Divider } from "@mui/material";
import { products } from "./productdata2";
import './slide.css'
import { NavLink } from "react-router-dom";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const Slide2 = () => {
  return (
    <div className="products_section">
        <div className="products_deal">
            <h3>best offers for you</h3>
            <button className="view_btn">view all</button>
        </div>
        <Divider />
        <Carousel
        responsive={responsive}
        itemClass="carousel-item-padding-40-px"
        dotListClass="custom-dot-list-style"
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        draggable={false}
        infinite={true}
        centerMode={true}
        autoPlaySpeed={3000}
        swipeable={true}
        autoPlay={true}
        keyBoardControl={true}
        showDots={false}
        >
            {
                products.map((e)=>{
                    return(
                      <NavLink to="/getproductsone2">
                        <div className="products_items">
                            <div className="product_img">
                                <img src={e.url} alt="item" />
                            </div>
                            <p className="products_name">
                                {e.title.shortTitle}
                            </p>
                            <p className="products_offer">
                                {e.discount}
                            </p>
                        </div>
                      </NavLink>
                    )
                })
            }
        </Carousel>
    </div>
  )
}

export default Slide2