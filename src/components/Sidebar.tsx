import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Modal } from "./Modal";
import { logout } from "@modules/index";
import { useDispatch } from "react-redux";
import {
  MenuActivityIcon,
  MenuDashboardIcon,
  MenuLogoutIcon,
  MenuOrdersIcon,
  MenuPaymentsIcon,
  MenuServicesIcon,
  MenuTherapistIcon,
  MenuUsersIcon,
  MenuHamburgerIcon,
} from "../assets/icon";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = location;
  const [isOpenModalLogout, setIsOpenModalLogout] = useState<boolean>(false);
  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  const handleLogoutModal = () => {
    setIsOpenModalLogout(!isOpenModalLogout);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth/signin");
  };

  const modalContent = (
    <>
      <h6 className="mb-2 text-center text-xl font-semibold text-boxdark dark:text-white">
        Logout confirmation
      </h6>
      <p className="mb-6 text-center text-base text-body">
        Are you sure you want to exit the admin panel?
      </p>
      <button
        className="rounded-xl bg-danger px-6 py-2 text-white outline-none"
        onClick={handleLogout}
      >
        Logout
      </button>
    </>
  );

  return (
    <>
      <aside
        ref={sidebar}
        className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
          <NavLink to="/" className="flex items-center gap-3">
            <img src="/images/Icon.png" alt="Logo" />
            <p className="text-2xl font-semibold text-white">Home Spa</p>
          </NavLink>

          <button
            ref={trigger}
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
            className="block lg:hidden"
          >
            <MenuHamburgerIcon />
          </button>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
            {/* <!-- Menu Group --> */}
            <div>
              <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                MENU
              </h3>

              <ul className="mb-6 flex flex-col gap-1.5">
                {/* <!-- Menu Item Dashboard --> */}
                <li>
                  <NavLink
                    to="/"
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                      (pathname === "/" || pathname.includes("dashboard")) &&
                      "bg-graydark dark:bg-meta-4"
                    }`}
                  >
                    <MenuDashboardIcon />
                    Dashboard
                  </NavLink>
                </li>
                {/* <!-- End Menu Item Dashboard --> */}

                {/* <!-- Menu Item Users --> */}
                <li>
                  <NavLink
                    to="/users"
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                      pathname.includes("users") && "bg-graydark dark:bg-meta-4"
                    }`}
                  >
                    <MenuUsersIcon />
                    Users
                  </NavLink>
                </li>
                {/* <!-- Menu Item Users --> */}

                {/* <!-- Menu Item Therapist --> */}
                <li>
                  <NavLink
                    to="/therapist"
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                      pathname.includes("therapist") &&
                      "bg-graydark dark:bg-meta-4"
                    }`}
                  >
                    <MenuTherapistIcon />
                    Therapist
                  </NavLink>
                </li>
                {/* <!-- Menu Item Therapist --> */}

                {/* <!-- Menu Item Orders --> */}
                <li>
                  <NavLink
                    to="/orders"
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                      pathname.includes("orders") &&
                      "bg-graydark dark:bg-meta-4"
                    }`}
                  >
                    <MenuOrdersIcon />
                    Orders
                  </NavLink>
                </li>
                {/* <!-- Menu Item Orders --> */}

                {/* <!-- Menu Item Services --> */}
                <li>
                  <NavLink
                    to="/services"
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                      pathname.includes("services") &&
                      "bg-graydark dark:bg-meta-4"
                    }`}
                  >
                    <MenuServicesIcon />
                    Services
                  </NavLink>
                </li>
                {/* <!-- Menu Item Services --> */}

                {/* <!-- Menu Item Payments --> */}
                <li>
                  <NavLink
                    to="/payments"
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                      pathname.includes("payments") &&
                      "bg-graydark dark:bg-meta-4"
                    }`}
                  >
                    <MenuPaymentsIcon />
                    Payments
                  </NavLink>
                </li>
                {/* <!-- Menu Item Payments --> */}

                {/* <!-- Menu Item Activity --> */}
                <li>
                  <NavLink
                    to="/activity"
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                      pathname.includes("activity") &&
                      "bg-graydark dark:bg-meta-4"
                    }`}
                  >
                    <MenuActivityIcon />
                    Activity History
                  </NavLink>
                </li>
                {/* <!-- Menu Item Activity --> */}
              </ul>
            </div>

            {/* <!-- Others Group --> */}
            <div>
              <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                OTHERS
              </h3>

              <ul className="mb-6 flex flex-col gap-1.5">
                {/* <!-- Menu Item Logout --> */}
                <li>
                  <div
                    // to="/auth/signin"
                    onClick={handleLogoutModal}
                    className={`group relative flex cursor-pointer items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                      pathname.includes("logout") &&
                      "bg-graydark dark:bg-meta-4"
                    }`}
                  >
                    <MenuLogoutIcon />
                    Logout
                  </div>
                </li>
                {/* <!-- Menu Item Logout --> */}
              </ul>
            </div>
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>
      </aside>
      <Modal
        closeModal={() => setIsOpenModalLogout(false)}
        isOpen={isOpenModalLogout}
        desc={modalContent}
        title=""
        withButton={false}
        type="submit"
        centerContent
        onClick={handleLogoutModal}
      />
    </>
  );
};

export default Sidebar;
