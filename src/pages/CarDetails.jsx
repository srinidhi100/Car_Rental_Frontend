import React, { useEffect, useRef, useState } from "react";
import carData from "../assets/data/carData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import BookingForm from "../components/UI/BookingForm";
import PaymentMethod from "../components/UI/PaymentMethod";
import axios from 'axios';

const CarDetails = () => {
  const { slug } = useParams();

  // useEffect(async () => {
  //   try {
  //   await getAllCarListing();
  //   window.scrollTo(0, 0); 
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // }, [singleCarItem]);

  const getAllCarListing = async () => {
    try {
      console.log("Fetching car listings...");
      const response = await axios.get('/api/car-listings');
      const carListings = response.data;
      console.log("Car Listings: ", carListings);
      return carListings;
    } catch (error) {
      console.error("Error fetching car listings: ", error);
      throw error;
    }
  };

  const [carListings, setCarListings] = useState([]);
  const [singleCarItem, setSingleCarItem] = useState({});
  const carListingsRef = useRef([]);
  const singleCarItemRef = useRef({});
  useEffect(() => {
    const fetchCarListings = async () => {
      try {
        const response = await axios.get("http://https://car-rental-backend-toqm.onrender.com/api/cars");
        carListingsRef.current = response.data;
        setCarListings(response.data); // Correct way to update state
        console.log("Response Data: ", response.data); // Correctly logs new data
        setSingleCarItem(carListingsRef.current.find((item) => item.carName === slug));
        console.log("singleCarItem", singleCarItem);
        singleCarItemRef.current = carListingsRef.current.find((item) => item.carName === slug)
      console.log("singleCarItemRef", singleCarItemRef.current);
      } catch (error) {
        console.error("Error fetching car listings: ", error);
      }
    };

    fetchCarListings(); // Call async function
  }, []); // Run only once on mount


  return (
    <Helmet title={singleCarItem.carName}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={singleCarItem.imgUrl} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{singleCarItem.carName}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    ${singleCarItem.price}.00 / Day
                  </h6>

                  <span className=" d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    ({singleCarItem.rating} ratings)
                  </span>
                </div>

                <p className="section__description">
                  {singleCarItem.description}
                </p>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-roadster-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.model}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-settings-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.automatic}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-timer-flash-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.speed}
                  </span>
                </div>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                    {singleCarItem.gps}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-wheelchair-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.seatType}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-building-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.brand}
                  </span>
                </div>
              </div>
            </Col>

            <Col lg="12" className="mt-5">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold ">Booking Information</h5>
                <BookingForm id={singleCarItemRef.current._id} />
              </div>
            </Col>

            {/* <Col lg="5" className="mt-5">
              <div className="payment__info mt-5">
                <h5 className="mb-4 fw-bold ">Payment Information</h5>
                <PaymentMethod />
              </div>
            </Col> */}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
