const bookingInformation = {
    firstName : "", 
    lastName  : "",
    email : "",
    phoneNumber : "",
    fromAddress : "",
    toAddress : "",
    noOfPerson : "",
    noOfLuggage : "",
    dateOfBirth : "",
    journeyTime :"",
    description :"",
    paymentInformation : "",
    carID :"",
    bookingDate :"",
} 
const cardetail = {
    carName : "",
    carNumber : "",
    availableDate : "",
    Ac : "",

}
const details = {
    
        id: 1,
        bookedDates : ["30-01-2025","1-02-2025"],
        brand: "Tesla",
        rating: 112,
        carName: "Tesla Malibu",
        imgUrl: img01,
        model: "Model 3",
        price: 50,
        speed: "20kmpl",
        gps: "GPS Navigation",
        seatType: "Heated seats",
        automatic: "Automatic",
        description:
          " Tesla is a sleek, high-performance electric vehicle offering luxury, efficiency, and cutting-edge technology. With a spacious interior, advanced autopilot, and an impressive all-electric range, it ensures a smooth, eco-friendly ride—perfect for city drives or coastal cruising.",
 }
 const carData = [
    {
      id: 1,
      brand: "Tesla",
      rating: 112,
      carName: "Tesla Malibu",
      imgUrl: "https://res.cloudinary.com/dveuwzppn/image/upload/v1738176978/alrysq80nurwq7iu4e3y.png",
      model: "Model 3",
      price: 50,
      speed: "20kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      automatic: "Automatic",
      bookedDates : ["30-01-2025","1-02-2025"],
      description:
        " Tesla is a sleek, high-performance electric vehicle offering luxury, efficiency, and cutting-edge technology. With a spacious interior, advanced autopilot, and an impressive all-electric range, it ensures a smooth, eco-friendly ride—perfect for city drives or coastal cruising.",
    },
  
    {
      id: 2,
      brand: "Toyota",
      rating: 102,
      carName: "Toyota Aventador",
      imgUrl: "https://res.cloudinary.com/dveuwzppn/image/upload/v1738176977/wcfhk8w6bb0g0scjnvg1.png",
      model: "Model-2022",
      price: 50,
      speed: "20kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      automatic: "Automatic",
      bookedDates : ["30-01-2025","1-02-2025"],
      description:
        " The Aventador is a high-performance supercar made by Lamborghini. If you were referring to a specific Toyota model or a custom-modified vehicle, let me know! I’d be happy to help with the correct description",
    },
  
    {
      id: 3,
      brand: "BMW",
      rating: 132,
      carName: "BMW X3",
      imgUrl: "https://res.cloudinary.com/dveuwzppn/image/upload/v1738176977/o9fwquuv4wllpvgkkq8g.png",
      model: "Model-2022",
      price: 65,
      speed: "20kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      bookedDates : ["30-01-2025","1-02-2025"],
      automatic: "Automatic",
      description:
        "The BMW X3 is a luxury compact SUV designed for a smooth and powerful driving experience. With its spacious interior, advanced technology, and premium comfort, it’s perfect for both city drives and long trips. Featuring top-tier safety, intuitive infotainment, and a stylish design, the X3 ensures a hassle-free and enjoyable ride. Rent now for the perfect blend of performance and elegance.",
    },
  
    {
      id: 4,
      brand: "Nissan",
      rating: 102,
      carName: "Nissan Mercielago",
      imgUrl: "https://res.cloudinary.com/dveuwzppn/image/upload/v1738176978/alrysq80nurwq7iu4e3y.png",
      model: "Model-2022",
      price: 70,
      speed: "20kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      bookedDates : ["30-01-2025","1-02-2025"],
      automatic: "Automatic",
      description:
        "The Lamborghini Murciélago is a high-performance supercar with a powerful V12 engine, offering thrilling speed and precision. Its striking design and luxurious interior make it the ultimate choice for performance enthusiasts. Rent it now for an unforgettable driving experience.",
    },
  
    {
      id: 5,
      brand: "Ferrari",
      rating: 94,
      carName: "Ferrari Camry",
      imgUrl: "https://res.cloudinary.com/dveuwzppn/image/upload/v1738176977/wcfhk8w6bb0g0scjnvg1.png",
      model: "Model-2022",
      price: 45,
      speed: "20kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      bookedDates : ["30-01-2025","1-02-2025"],
      automatic: "Automatic",
      description:
        " The Toyota Camry is a reliable, comfortable sedan that offers smooth handling and excellent fuel efficiency. With a spacious interior, advanced safety features, and a reputation for durability, the Camry is perfect for everyday driving and long trips. Rent the Toyota Camry for a practical yet stylish ride.",
    },
  
    {
      id: 6,
      brand: "Mercedes",
      rating: 119,
      carName: "Mercedes Benz XC90",
      imgUrl: "https://res.cloudinary.com/dveuwzppn/image/upload/v1738176977/xyd83ruy5l7jrbwcvwzs.png",
      model: "Model-2022",
      price: 85,
      speed: "20kmpl",
      gps: "GPS Navigation",
      bookedDates : ["30-01-2025","1-02-2025"],
      seatType: "Heated seats",
      automatic: "Automatic",
      description:
        "XC90 is a luxurious and spacious SUV, known for its safety features, elegant design, and advanced technology. With a comfortable interior, versatile seating, and powerful engine options, the XC90 provides a smooth and enjoyable ride for both city driving and long road trips. Rent the XC90 for a premium, family-friendly driving experience.",
    },
  
    {
      id: 7,
      brand: "Audi",
      rating: 82,
      carName: "Audi Fiesta",
      imgUrl: "https://res.cloudinary.com/dveuwzppn/image/upload/v1738176979/cy5fyys7tbbwqenqseh4.png",
      model: "Model 3",
      price: 50,
      speed: "20kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      bookedDates : ["30-01-2025","1-02-2025"],
      automatic: "Automatic",
      description:
        "Fiesta is a compact, stylish, and efficient hatchback perfect for city driving. Known for its agility, fuel efficiency, and modern features, it offers a smooth and fun driving experience. Whether you're navigating tight city streets or heading on a weekend getaway, the Ford Fiesta is the perfect choice for a versatile and economical ride.",
    },
  
    {
      id: 8,
      brand: "Colorado",
      rating: 52,
      carName: "Rolls Royce Colorado",
      imgUrl: "https://res.cloudinary.com/dveuwzppn/image/upload/v1738176977/xyd83ruy5l7jrbwcvwzs.png",
      model: "Model 3",
      price: 50,
      speed: "20kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      bookedDates : ["30-01-2025","1-02-2025"],
      automatic: "Automatic",
      description:
        " The Rolls-Royce  is the epitome of luxury and craftsmanship. With a powerful V12 engine, exquisite interiors made from the finest materials, and a ride that delivers unparalleled comfort, the Phantom offers an extraordinary driving experience. Perfect for those who demand the best in both performance and style, the Rolls-Royce Phantom is the ultimate symbol of sophistication.",
    },
  ];
  
 
  