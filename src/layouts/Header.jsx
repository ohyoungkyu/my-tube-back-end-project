import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="flex justify-between navbar bg-base-100 border-b shadow-md">
        <div>
          <div
            className="btn btn-ghost normal-case text-xl hover:bg-transparent"
            onClick={() => {
              navigate("/");
            }}
          >
            <i className="fi fi-brands-youtube text-red-500 mt-2"></i>
            <div className="ml-2">MyTube</div>
          </div>
        </div>
        <div className="flex-1 justify-end gap-2 ml-auto">
          <div className="form-control mx-auto w-1/3">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered border-gray-400"
            />
          </div>
        </div>
        <div>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-24 rounded-full">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <div>
                  <Link to="/about/3">Profile</Link>
                </div>
              </li>
              <li>
                <a>Setting</a>
              </li>
              <li>
                <div onClick={() => {
                  navigate("/");
                }}>
                  Logout
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
