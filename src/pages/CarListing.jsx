import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
import { useState, useEffect,useRef } from "react";
import axios from "axios";

const CarListing = () => {
  const [carListings, setCarListings] = useState([]);
  const carListingsRef = useRef([]);
  useEffect(() => {
    const fetchCarListings = async () => {
      try {
        const response = await axios.get("http://car-rental-backend-toqm.onrender.com/api/cars");
        carListingsRef.current = response.data;
        setCarListings(response.data); // Correct way to update state
        console.log("Response Data: ", response.data); // Correctly logs new data
      } catch (error) {
        console.error("Error fetching car listings: ", error);
      }
    };

    fetchCarListings(); // Call async function
  }, []); // Run only once on mount

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By
                </span>

                <select>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>

            {carListings.map((item) => (
              <CarItem item={item} key={item.id}/>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
