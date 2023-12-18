import Carousel from "../components/Carousel/Carousel";
import Specialities from "../components/Specialities/Specialities";
import AppointmentForm from "../components/AppointmentForm/AppointmentForm";
const Home = () => {
  const images = [
    "https://perfecthealclinic.com/wp-content/uploads/2023/01/Perfect-Web-Banner_3.jpg",
    "https://perfecthealclinic.com/wp-content/uploads/2023/01/Perfect-Web-Banner_1.jpg",
  ];

  return (
    <div>
      <Carousel images={images} interval={3000}></Carousel>
      <Specialities />
      <AppointmentForm />
    </div>
  );
};

export default Home;
