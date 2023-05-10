import React from 'react'
import Carousel from 'react-material-ui-carousel'
import "./banner.css";

const data = [
    "https://www.indiaistore.com/files/uploads/products/iphone-14/iPhone-14-Pro-5g-d.jpg",
    "https://www.daiwa.in/wp-content/uploads/2021/12/new-tv-launch-banner-2.jpg",
    "https://phonewaleonline.com/wp-content/uploads/pwweb/uploads/2023/02/banner-Samsung-new-ahmedabad-surat-baroda-fonebook-phonewale-lattest-smart-phones-s23-galaxy.jpg", 
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bf180e2d-5bea-4aeb-8aba-9ea2f09e7aef/deu2up6-8d45c200-e05d-4c5d-b45b-05d01acfc429.jpg/v1/fill/w_1280,h_720,q_75,strp/fashion_sale_web_banner_by_koshaldesign_deu2up6-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYmYxODBlMmQtNWJlYS00YWViLThhYmEtOWVhMmYwOWU3YWVmXC9kZXUydXA2LThkNDVjMjAwLWUwNWQtNGM1ZC1iNDViLTA1ZDAxYWNmYzQyOS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Vo7oFfCQJXOWmwvoRDUVCksRun6nQ9gh20-61DnbBOY",
    "https://hafeleappliances.com/images/products/SMALL%20APPLIANCES/Home%20Page%20Banner%201366%20x%20490%201.jpg"
]


const Banner = () => {
    return (
        <>
            <Carousel
                className="carousel"
                autoPlay={true}
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                navButtonsProps={{
                    style: {
                        background: "#c0ebcb",
                        color: "#252525",
                        borderRadius: 0,
                        marginTop: -31,
                        height: "104px",
                        borderRadius: "3px"
                    }
                }}>
                {
                    data.map((imag, i) => {
                        return (
                            <>
                                <img src={imag} alt="img" key={i} className="banner_img" />
                            </>
                        )
                    })
                }

            </Carousel>
        </>
    )
}

export default Banner;