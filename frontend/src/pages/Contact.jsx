import Card from "../components/AddresCard/addressCard";
import BookNow from "../components/BooknowCard/bookcard";
import Mapgeo from "../components/MapComponent/Mapgeo";

const Contact = () => {
  const center = [31.309039, 75.573076]; // latitude and longitude for Perfect heal
  const zoom = 16;
  return (
    <div className="p-0">
      <div
        className="bg-red-600 text-white text-center py-4"
        style={{
          background: "linear-gradient(to bottom, #F15A2D, #CF2234)",
        }}
      >
        <h1 className="text-2xl font-bold p-8">Contact Us</h1>
      </div>
      <div className="flex justify-center items-start h-[700px] w-full p-10 pt-24 space-x-4">
        <Card
          title="Perfect Heal"
          subtitle="Perfect Heal Ortho & General Clinic"
          address="80L, Mall Road, Model Town, Jalandhar - 144 003"
          phone="80541 02361"
          email="info@perfecthealclinic.com"
        />
        <BookNow />
      </div>
      <Mapgeo center={center} zoom={zoom} />
    </div>
  );
};

export default Contact;
