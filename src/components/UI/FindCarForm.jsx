import React, { useState } from "react";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = ({ passMessage }) => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    time: "",
    carType: "ac",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://car-rental-backend-toqm.onrender.com/api/find-car", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
        passMessage(data);
        alert("Car search request submitted successfully!");
      } else {
        console.error("Error submitting form");
        alert("Failed to find a car. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input
            type="text"
            name="from"
            placeholder="From address"
            required
            value={formData.from}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            type="text"
            name="to"
            placeholder="To address"
            required
            value={formData.to}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            type="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            name="time"
            required
            value={formData.time}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="select__group">
          <select name="carType" value={formData.carType} onChange={handleChange}>
            <option value="ac">AC Car</option>
            <option value="non-ac">Non AC Car</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button type="submit" className="btn find__car-btn">
            Find Car
          </button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
