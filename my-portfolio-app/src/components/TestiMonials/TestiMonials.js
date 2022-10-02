// import React, { useEffect, useState } from 'react';
import TestiMonialsDetails from "./TestiMonialsDetails";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./TestiMonials.css";

const TestiMonials = () => {
  const testiMonials = [
    {
      id: 1,
      name: "Viraj Poriya",
      description:
        "Platform is super easy to use and is getting better and more versatile all the time!",
      address: "USA",
      img: "assets/language-images/dj.png",
    },
    {
      id: 2,
      name: "Madina Ansari",
      description:
        "An easy and powerful tool to collect and share recommendations and measure customer satisfaction at various meeting points in the online store.",
      address: "Asia",
      img: "assets/language-images/drf1.png",
    },
    {
      id: 3,
      name: "Maulik Zalavadiya",
      description:
        "We are able to capture testimonials at the right moment and have found some pretty creative ways to utilize them using the tools that Trustmary provides.",
      address: "Asia",
      img: "assets/language-images/images.png",
    },
    {
      id: 4,
      name: "Nima Prajapati",
      description:
        "Excellent service and easy implementation. Quick process to start using and get reviews and testimonials for your website!",
      address: "UK",
      img: "assets/language-images/p.jpg",
    },
  ];
  //Owl Carousel Settings
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 4000,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <section id="testimonial" className="testimonials pt-70 pb-50">
      <div className="container mt-5">
        <p className="miniTitle text-center">Testimonials</p>
        <br />

        <p className="text-center contp">
          Excellent service and easy implementation. Quick process to start
          using and get reviews and testimonials for your website!
        </p>
        <div className="text-center ">
          <h3 className="sectionTitle">
            Here’s what our Customers are saying about us online!
          </h3>
        </div>
        <div className="row">
          <div className="col-md-12">
            <OwlCarousel
              id="customer-testimonoals"
              className="owl-carousel owl-theme"
              {...options}
            >
              {testiMonials.length === 0 ? (
                <div className="item">
                  <div className="shadow-effect">
                    <img
                      className="img-circle"
                      src={"assets/images/images.jpg 12"}
                    />

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna.
                    </p>
                  </div>
                  <div className="testimonial-name">
                    <h5>Harit Patel</h5>
                    <small>India</small>
                  </div>
                </div>
              ) : (
                testiMonials.map((testiMonialDetail) => {
                  return (
                    <TestiMonialsDetails
                      testiMonialDetail={testiMonialDetail}
                      key={testiMonialDetail.id}
                    />
                  );
                })
              )}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestiMonials;
