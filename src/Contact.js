import React, { useState } from "react";
import { useNavigate } from "react-router";
import backgroundImage from "./backgroundImage.png"; // import your image file

const suggestions = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Surat",
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Visakhapatnam",
  "Agartala",
  "Agra",
  "Aizawl",
  "Ajmer",
  "Akola",
  "Aligarh",
  "Allahabad",
  "Ambala",
  "Ambattur",
  "Amravati",
  "Amreli",
  "Amritsar",
  "Anand",
  "Asansol",
  "Aurangabad",
  "Bagaha",
  "Balurghat",
  "Barbil",
  "Bardhaman",
  "Bareilly",
  "Basti",
  "Bathinda",
  "Belgaum",
  "Bellary",
  "Bhavnagar",
  "Bhilai",
  "Bhilwara",
  "Bhimavaram",
  "Bhimtal",
  "Bhiwandi",
  "Bhopal",
  "Bhubaneswar",
  "Bijnor",
  "Bikaner",
  "Bokaro",
  "Chandigarh",
  "Chapra",
  "Chikmagalur",
  "Chirala",
  "Coimbatore",
  "Cuttack",
  "Darbhanga",
  "Davanagere",
  "Dehradun",
  "Dhanbad",
  "Dibrugarh",
  "Dindigul",
  "Durgapur",
  "Faridabad",
  "Fatehpur",
  "Firozabad",
  "Gadwal",
  "Gangtok",
  "Gaya",
  "Gonda",
  "Gopalpur",
  "Gorakhpur",
  "Gulbarga",
  "Guntur",
  "Gurgaon",
  "Guwahati",
  "Gwalior",
  "Habra",
  "Hajipur",
  "Haldia",
  "Haldwani",
  "Hardoi",
  "Hisar",
  "Hoshiarpur",
  "Howrah",
  "Hubli-Dharwad",
  "Ichalkaranji",
  "Tirupati",
  "Jabalpur",
  "Jalandhar",
  "Jalgaon",
  "Jammu",
  "Jamnagar",
  "Jamshedpur",
  "Jangaon",
  "Jhansi",
  "Jharsuguda",
  "Jodhpur",
  "Jorhat",
  "Kadapa",
  "Kannauj",
  "Kannur",
  "Karimganj",
  "Karnal",
  "Kavaratti",
  "Kharagpur",
  "Kochi",
  "Kolar",
  "Kolhapur",
  "Kozhikode",
  "Krishnanagar",
  "Kurnool",
  "Lakhimpur",
  "Loni",
  "Ludhiana",
  "Madhyamgram",
  "Madurai",
  "Mahbubnagar",
  "Maheshtala",
  "Malegaon",
  "Mancherial",
  "Mandya",
  "Mangalore",
  "Mangaluru",
  "Meerut",
  "Mira-Bhayandar",
  "Mirzapur",
  "Modasa",
  "Moradabad",
  "Muzaffarnagar",
  "Mysore",
  "Nagapattinam",
  "Nanded",
  "Nandurbar",
  "Nashik",
  "Navi Mumbai",
  "Navsari",
  "Nellore",
  "Neyveli (TS)",
  "Nizamabad",
  "Noida",
  "Pali",
  "Panipat",
  "Parbhani",
  "Patan",
  "Patiala",
  "Patna",
  "Pilani",
  "Port Blair",
  "Pudukkottai",
  "Purulia",
  "Raiganj",
  "Raipur",
  "Rajam",
  "Rajkot",
  "Rajpur Sonarpur",
  "Ranaghat",
  "Ranchi",
  "Ratlam",
  "Rewa",
  "Rohtak",
  "Roorkee",
  "Rudrapur",
  "Saharanpur",
  "Salem",
  "Sambalpur",
  "Sangli-Miraj & Kupwad",
  "Sattenapalle",
  "Nagari",
  "Shahjahanpur",
  "Shimla",
  "Sikar",
  "Siliguri",
  "Solapur",
  "Sopore",
  "South Dumdum",
  "Srikakulam",
  "Srinagar",
  "Sultan Pur Majra",
  "Surendranagar Dudhrej",
  "Suryapet",
  "Tenali",
  "Thiruvananthapuram",
  "Tiruchirappalli",
  "Tirunelveli",
  "Tumkur",
  "Udaipur",
  "Ujjain",
  "Ulhasnagar",
  "Vadodara",
  "Valsad",
  "Varanasi",
  "Vellore",
  "Vijayawada",
  "Warangal",
  "Yemmiganur",
];
const Contact = () => {
  const [value, setValue] = useState("");

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    contactNumber: "",
    email: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    let a = formData.contactNumber / 1000000000;
    console.log(a);
    if (
      formData.email === "" ||
      formData.contactNumber === "" ||
      formData.name === "" ||
      formData.company === "" ||
      !suggestions.includes(value)
    ) {
      alert("Enter all details");
    } else if (a >= 10 || a < 1) {
      alert("Enter valid 10 digit number");
    } else if (!formData.email.includes("@")) {
      alert("Please correct your mail");
    } else {
      navigate("/thankYouPage");
      setFormData({
        name: "",
        company: "",
        contactNumber: "",
        email: "",
        location: "",
      });
      e.preventDefault();
    }
    // Your form submission logic goes here
    console.log(formData);
    // Reset the form
  };

  let navigate = useNavigate();
  {
  }

  return (
    <>
      <div className="grid grid-cols-3">
        <div className="">
          <img
            className=""
            src="https://3.bp.blogspot.com/-jIjJ3ehNBz0/Vt-L--0vraI/AAAAAAAAOvQ/l2LQHSMmRfw/s1600/03-03%2B%257E%2Bcycling.gif"
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto mt-8 w-full "
          style={{ marginTop: 0 }}
        >
          <div className="grid grid-cols-1 gap-6 py-11">
            <label className="block" style={{ marginTop: 50 }}>
              <span className="text-gray-900">
                <strong>Name</strong>
              </span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="   e.g: ( Tyler )"
                className="mt-1 py-2 block w-full rounded-md border-solid border-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-90 "
                Required
              />
            </label>

            <label className="block">
              <span className="text-gray-900">
                <strong>company</strong>
              </span>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="   e.g: ( abc pvt. ltd )"
                className="mt-1 py-2 block w-full rounded-md border-solid border-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </label>

            <label className="block">
              <span className="text-gray-900">
                <strong>Contact Number </strong>
              </span>
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="   e.g: 99467xxxx1"
                className="mt-1 py-2 block w-full rounded-md border-solid border-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </label>

            <label className="block">
              <span className="text-gray-900">
                <strong>Email Address</strong>
              </span>
              <input
                type="email"
                name="email"
                placeholder="   e.g ( xyz@gmail.com )"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 py-2 block w-full rounded-md border-solid border-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </label>

            <label className="block">
              <span className="text-gray-900">
                <strong>Location</strong>
              </span>
              <input
                type="text"
                id="myInput"
                value={value}
                placeholder="  choose from dropDown "
                onChange={handleInputChange}
                list="suggestions"
                className="mt-1 py-2 block w-full rounded-md border-solid border-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />

              <datalist id="suggestions">
                {suggestions.map((suggestion) => (
                  <option key={suggestion} value={suggestion} />
                ))}
              </datalist>
            </label>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-3 text-base font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-900 focus:outline-none focus:bg-indigo-500"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="fixed bottom-0 right-0 p-4">
        <p className="text-gray-700 animate-bounce hover:bg-gray-300 rounded-lg p-2">
          Contact No.: 8708592253
        </p>
      </div>
    </>
  );
};
export default Contact;
