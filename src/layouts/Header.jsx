import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { userState } from "../recoil";
import { useRecoilState } from "recoil";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);
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
          {user ? (
            <div className="flex items-center">
              <div className="dropdown dropdown-end">
                <Link to={`/studio/channel/${user.id}`} className="mr-4 mt-2">
                  <i className="fi fi-rr-video-plus text-3xl"></i>
                </Link>
                <label tabIndex="0" class="btn btn-ghost btn-circle avatar">
                  <div class="w-10 rounded-full">
                    <img
                      src="https://placeimg.com/80/80/people"
                      alt="profile"
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <div>
                      <Link to={`/users/${user.id}`}>Profile</Link>
                    </div>
                  </li>
                  <li>
                    <a>Setting</a>
                  </li>
                  <li>
                    <div
                      onClick={() => {
                        setUser(null);
                        navigate("/");
                      }}
                    >
                      Logout
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex gap-4">
              <div>
                <Link to="/join">회원가입</Link>
              </div>
              <div className="mr-2">
                <Link to="/login">로그인</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
