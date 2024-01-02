import { Link } from "react-router-dom";
import { SidebarMenu } from "../../data/data";
const Sidebar = () => {
  return (
    <div className="bg-[#F15A2D] text-white h-screen w-1/5 p-4">
      <ul>
        {SidebarMenu.map((menu) => {
          return (
            <>
              <div className="pl-6 mb-7  text-3xl font-bold hover:underline">
                <Link to={menu.path}>{menu.name}</Link>
              </div>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
