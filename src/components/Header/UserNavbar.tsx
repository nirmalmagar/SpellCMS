import {useRef, useEffect, useState } from "react";
import { routes } from "../../utils/routes";
import {ArrowRightStartOnRectangleIcon} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import DarkModeSwitcher from "../DarkModeSwitcher";
const DropdownUser = () => {
  const navigate = useNavigate();
  const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);
  const closeDropdownRef = useRef<HTMLDivElement | null>(null);

  const logout = () => {
    localStorage.removeItem("AUTH_TOKEN");
    navigate(routes.USER_AUTH_LOGIN);
  };

  useEffect(() => {
    const changeHandler = (e: MouseEvent) => {
      if (
        closeDropdownRef.current &&
        !closeDropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownMenu(false);
      }
    };

    document.addEventListener("mousedown", changeHandler);
    return () => {
      document.removeEventListener("mousedown", changeHandler);
    };
  }, []);
  return (
    <>
      <div ref={closeDropdownRef} className="text-right font-semibold gap-x-40 text-sm">
        <div
          className="flex justify-end items-center text-black gap-x-8 cursor-pointer"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        >
          <div>
            <div>nirmal@gmail.com</div>
            <span>( user )</span>
          </div>
          <div>{dropdownMenu ? <ChevronDownIcon className="w-4 h-4" /> : <ChevronUpIcon className="w-4 h-4"/> }</div>
        </div>
        {dropdownMenu && (
          <div
            onClick={logout}
            className="absolute top-18 cursor-pointer right-0 rounded-b-lg bg-white w-60 p-4 pr-14"
          >
              <div className="text-md text-black">
                <div className="flex items-center gap-8 float-right">
                  <ArrowRightStartOnRectangleIcon className="w-5 h-5" />
                  <span>LogOut</span>
                </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DropdownUser;
