import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

const BookingForm = (props) => {
  console.log("props", props.id);
  const carIDD = props.id;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    fromAddress: "",
    toAddress: "",
    passengers: "1 person",
    luggage: "1 luggage",
    journeyDate: "",
    journeyTime: "",
    notes: "",
    paymentMethod: "",
    carId: carIDD,
  });

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);

    try {
      const response = await axios.post("https://car-rental-backend-toqm.onrender.com/api/bookings", formData);
      console.log("Response:", response.data);
      alert("Booking Successful!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Booking Failed");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        {/* <div className="card-header bg-primary text-white text-center">
          <h4>Car Booking Form</h4>
        </div> */}
        <div className="card-body p-4">
          <form onSubmit={submitHandler}>
            <div className="row">
              {/* First Name */}
              <div className="col-md-6 mb-3">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" required value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
              </div>
              {/* Last Name */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" required value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
              </div>
            </div>

            <div className="row">
              {/* Email */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </div>
              {/* Phone Number */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-control" required value={formData.phoneNumber} onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} />
              </div>
            </div>

            <div className="row">
              {/* From Address */}
              <div className="col-md-6 mb-3">
                <label className="form-label">From Address</label>
                <input type="text" className="form-control" required value={formData.fromAddress} onChange={(e) => setFormData({ ...formData, fromAddress: e.target.value })} />
              </div>
              {/* To Address */}
              <div className="col-md-6 mb-3">
                <label className="form-label">To Address</label>
                <input type="text" className="form-control" required value={formData.toAddress} onChange={(e) => setFormData({ ...formData, toAddress: e.target.value })} />
              </div>
            </div>

            <div className="row">
              {/* Passengers Dropdown */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Passengers</label>
                <select className="form-select" value={formData.passengers} onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}>
                  <option>1 Person</option>
                  <option>2 Persons</option>
                  <option>3 Persons</option>
                  <option>4 Persons</option>
                  <option>5+ Persons</option>
                </select>
              </div>
              {/* Luggage Dropdown */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Luggage</label>
                <select className="form-select" value={formData.luggage} onChange={(e) => setFormData({ ...formData, luggage: e.target.value })}>
                  <option>1 Luggage</option>
                  <option>2 Luggage</option>
                  <option>3 Luggage</option>
                  <option>4 Luggage</option>
                  <option>5+ Luggage</option>
                </select>
              </div>
            </div>

            <div className="row">
              {/* Journey Date */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Journey Date</label>
                <input type="date" className="form-control" required value={formData.journeyDate} onChange={(e) => setFormData({ ...formData, journeyDate: e.target.value })} />
              </div>
              {/* Journey Time */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Journey Time</label>
                <input type="time" className="form-control" required value={formData.journeyTime} onChange={(e) => setFormData({ ...formData, journeyTime: e.target.value })} />
              </div>
            </div>

            {/* Notes */}
            <div className="mb-3">
              <label className="form-label">Additional Notes</label>
              <textarea className="form-control" rows="3" value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })}></textarea>
            </div>

            {/* Payment Method */}
            <div className="mb-3">
              <label className="form-label">Payment Method</label>
              <div className="d-flex gap-3">
                {["Direct Bank Transfer", "Cheque Payment", "Master Card", "Paypal"].map((method) => (
                  <div key={method} className="form-check">
                    <input className="form-check-input" type="radio" name="paymentMethod" value={method} onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })} />
                    <label className="form-check-label">{method}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button type="submit" className="btn btn-primary w-100">Reserve Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
