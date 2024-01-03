import { useState, useEffect } from "react";
import logo from "../../assets/logo/Perfect-Heal-Ortho-General-Clinic_Logo-01-e1672666778585-300x99.png";
import phoneimg from "../../assets/phone_calling.gif";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setDoctor } from "../../redux/features/docSlice";
import toast from "react-hot-toast";
const navLinks = [
  {
    path: "/home",
    display: "About us",
  },
  {
    path: "/treatment",
    display: "Treatments",
  },
  {
    path: "/facilities",
    display: "Facilities",
  },
  {
    path: "/contact",
    display: "Contact us",
  },
];
const Header = () => {
  // State to track the visibility of dropdowns
  const [showTreatmentsDropdown, setShowTreatmentsDropdown] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isMouseOverTreatmentsMenu, setIsMouseOverTreatmentsMenu] =
    useState(false);
  const [isMouseOverTreatmentsDropdown, setIsMouseOverTreatmentsDropdown] =
    useState(false);

  useEffect(() => {
    if (!isMouseOverTreatmentsMenu && !isMouseOverTreatmentsDropdown) {
      setShowTreatmentsDropdown(false);
    }
  }, [isMouseOverTreatmentsMenu, isMouseOverTreatmentsDropdown]);

  const handleTreatmentsMenuEnter = () => {
    setShowTreatmentsDropdown(true);
    setIsMouseOverTreatmentsMenu(true);
  };

  const handleTreatmentsMenuLeave = () => {
    setIsMouseOverTreatmentsMenu(false);
  };

  const handleTreatmentsDropdownEnter = () => {
    setIsMouseOverTreatmentsDropdown(true);
  };

  const handleTreatmentsDropdownLeave = () => {
    setIsMouseOverTreatmentsDropdown(false);
  };

  // States and handlers for Facilities Dropdown
  const [showFacilitiesDropdown, setShowFacilitiesDropdown] = useState(false);
  const [isMouseOverFacilitiesMenu, setIsMouseOverFacilitiesMenu] =
    useState(false);
  const [isMouseOverFacilitiesDropdown, setIsMouseOverFacilitiesDropdown] =
    useState(false);

  useEffect(() => {
    if (!isMouseOverFacilitiesMenu && !isMouseOverFacilitiesDropdown) {
      setShowFacilitiesDropdown(false);
    }
  }, [isMouseOverFacilitiesMenu, isMouseOverFacilitiesDropdown]);

  const handleFacilitiesMenuEnter = () => {
    setShowFacilitiesDropdown(true);
    setIsMouseOverFacilitiesMenu(true);
  };

  const handleFacilitiesMenuLeave = () => {
    setIsMouseOverFacilitiesMenu(false);
  };

  const handleFacilitiesDropdownEnter = () => {
    setIsMouseOverFacilitiesDropdown(true);
  };

  const handleFacilitiesDropdownLeave = () => {
    setIsMouseOverFacilitiesDropdown(false);
  };

  const treatmentSubMenu = {
    "Orthopaedics and Sports Injuries": [
      { name: "Arthroscopy", path: "/treatment/arthroscopy" },
      { name: "Sports injuries", path: "/treatment/sports-injuries" },
      { name: "Bone fractures", path: "/treatment/bone-fractures" },
      { name: "Rheumatoid arthritis", path: "/treatment/rheumatoid-arthritis" },
      { name: "Hip and Knee Joint Replacement", path: "/treatment/hip-knee" },
    ],

    "Internal Medicine": [
      { name: "Fever", path: "/treatment/fever" },
      { name: "COPD", path: "/treatment/copd" },
      { name: "Hypertension", path: "/treatment/hypertension" },
      { name: "Diabetes", path: "/treatment/diabetes" },
      { name: "Chronic cough", path: "/treatment/cough" },
      { name: "Tuberculosis", path: "/treatment/tuberculosis" },
      { name: "Dyspepsia", path: "/treatment/dyspepsia" },
      { name: "Migrain", path: "/treatment/migraine" },
      { name: "Asthma", path: "/treatment/asthma" },
      { name: "Thyroid disorders", path: "/treatment/thyroid" },
      { name: "Hepatitis", path: "/treatment/hepatitis" },
    ],
  };

  const handleClick = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    localStorage.clear();
    dispatch(setDoctor(null));
    toast.success("Logout successfully");
    navigate("/home");
  };
  const { doctor } = useSelector((state) => state.doctor);
  return (
    <header className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-between m-0 px-5 h-[8rem] w-[90rem]">
          <div>
            <img src={logo} className="h-[4rem]" alt="Perfect Heal" />
          </div>
          <div className="navigation">
            <ul className="menu flex items-center gap-[2.7rem] ">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="relative"
                  onMouseEnter={() => {
                    if (link.path === "/treatment") handleTreatmentsMenuEnter();
                    if (link.path === "/facilities")
                      handleFacilitiesMenuEnter();
                  }}
                  onMouseLeave={() => {
                    if (link.path === "/treatment") handleTreatmentsMenuLeave();
                    if (link.path === "/facilities")
                      handleFacilitiesMenuLeave();
                  }}
                >
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[18px] leading-7 font-[600]"
                        : "text-textColor text-[18px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                  {/* Treatments Dropdown*/}
                  {link.path === "/treatment" && showTreatmentsDropdown && (
                    <div
                      className="absolute  w-full md:w-auto top-5 left-0 z-20 bg-white px-2 py-5"
                      onMouseEnter={handleTreatmentsDropdownEnter}
                      onMouseLeave={handleTreatmentsDropdownLeave}
                    >
                      {Object.entries(treatmentSubMenu).map(
                        ([category, items]) => (
                          <div key={category}>
                            <span className="text-left top-5 text-orange-500 text-[20px] leading-7 font-[600]">
                              {category}
                            </span>
                            <div className="dropdown-content flex m-1 py-4 arrangement text-[17px] w-[72rem] grid grid-cols-4 gap-6 border-b ">
                              {items.map((item) => (
                                <a
                                  className="border-b"
                                  key={item.path}
                                  href={item.path}
                                >
                                  {item.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  )}
                  {/* Facilities Dropdown */}

                  {link.path === "/facilities" && showFacilitiesDropdown && (
                    <div
                      className="absolute w-full md:w-auto top-5 left-0 z-20 bg-white"
                      onMouseEnter={handleFacilitiesDropdownEnter}
                      onMouseLeave={handleFacilitiesDropdownLeave}
                    >
                      <div className="dropdown-content flex flex-col m-1 py-4 arrangement w-[12rem]">
                        <a
                          href="/facilities/operative-procedures"
                          className="py-1 block"
                        >
                          Operative Procedures
                        </a>
                        <a
                          href="/facilities/patient-services"
                          className="py-1 block"
                        >
                          Our Patient Services
                        </a>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="inline-flex">
            <Link to="/">
              <figure className="w-[60px] h-[30px] rounded-full">
                <img
                  src={phoneimg}
                  className="rounded-full animate-bounce h-[50px] w-[50px]"
                  alt="Phone number"
                />
              </figure>
            </Link>
            <Link to="/">
              <span className="text-[#CF2234] text-xl font-bold mt-2">
                80541 02361
              </span>
            </Link>
            <div className="px-10">
              {doctor ? (
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  onClick={handleClick}
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
