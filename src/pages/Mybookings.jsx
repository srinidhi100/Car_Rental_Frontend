import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Mybookings() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://car-rental-backend-toqm.onrender.com/api/cars');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching bookings data: ', error);
      }
    };

    fetchData();
  }, []);

  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(3); // You can change the number of cars per page
  const [sortOrder, setSortOrder] = useState('asc'); // Sorting state

  // Search Filter
  const filteredData = data.filter(car => 
    car.carName.toLowerCase().includes(search.toLowerCase()) || 
    car.brand.toLowerCase().includes(search.toLowerCase())
  );

  // Sort by Date
  const sortedData = filteredData.sort((a, b) => {
    const aDate = new Date(a.bookedDates[0]);
    const bDate = new Date(b.bookedDates[0]);
    return sortOrder === 'asc' ? aDate - bDate : bDate - aDate;
  });

  // Pagination
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = sortedData.slice(indexOfFirstCar, indexOfLastCar);

  const handleSearch = (e) => setSearch(e.target.value);
  const handleSortChange = () => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const handleCancelBooking = async (carId) => {
    try {
      // Uncomment this line when the API is ready
      // const response = await axios.delete(`http://localhost:5000/api/cancelcars/${carId}`);
      setData(data.filter(car => car._id !== carId)); // Remove the canceled booking from the list
      alert('Booking canceled successfully');
    } catch (error) {
      console.error('Error canceling booking: ', error);
      alert('Failed to cancel booking');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search by car name or brand"
          className="border px-4 py-2"
          value={search}
          onChange={handleSearch}
        />
      </div> {/* Closing div for search input */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {currentCars.map(car => (
          <div key={car.id} className="border p-4 rounded shadow">
            <img src={car.imgUrl} alt={car.carName} className="w-full h-48 object-cover" />
            <h2 className="font-bold text-xl mt-2">{car.carName}</h2>
            <p>{car.description}</p>
            <p><strong>Brand:</strong> {car.brand}</p>
            <p><strong>Price:</strong> ${car.price}</p>
            <p><strong>Speed:</strong> {car.speed}</p>
            <p><strong>Booked Dates:</strong> {car.bookedDates.join(', ')}</p>
            <button
              onClick={() => handleCancelBooking(car._id)}
              className="btn btn-danger mt-3"
            >
              Cancel Booking
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 btn btn-primary text-white disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2">{currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={indexOfLastCar >= sortedData.length}
          className="px-4 py-2 btn btn-primary text-white disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Mybookings;
