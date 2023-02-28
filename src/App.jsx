import { useState } from "react";
import "./App.css";
import { Outlet, NavLink } from "react-router-dom";
import {
  RiMentalHealthLine,
  RiMentalHealthFill,
  RiHome3Fill,
  RiHome3Line,
  RiNeteaseCloudMusicLine,
  RiNeteaseCloudMusicFill,
  RiAccountCircleLine,
  RiAccountCircleFill,
} from "react-icons/ri";

function App() {
  const style = { color: "#371B34", fontSize: "2em" };

  return (
    <div className="App relative min-h-screen sm:bg-black flex justify-center items-center">
      <div className="sm:w-1/5 bg-light-pink h-screen w-screen overflow-auto">
        <Outlet />
        </div>
        <nav className="fixed z-[100] bottom-1 left-2 min-w-[85%] border-t p-1">
          <ul className="flex justify-between">
            <li>
              <NavLink className="text-red-300" to={"/"}>
                {({ isActive }) => (
                  <>
                    {isActive ? (
                      <RiHome3Fill style={style} />
                    ) : (
                      <RiHome3Line style={style} />
                    )}
                  </>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to={"/brain-health"}>
                {({ isActive }) => (
                  <>
                    {isActive ? (
                      <RiMentalHealthFill style={style} />
                    ) : (
                      <RiMentalHealthLine style={style} />
                    )}
                  </>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to={"/sounds"}>
                {({ isActive }) => (
                  <>
                    {isActive ? (
                      <RiNeteaseCloudMusicFill style={style} />
                    ) : (
                      <RiNeteaseCloudMusicLine style={style} />
                    )}
                  </>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to={"/account"}>
                {({ isActive }) => (
                  <>
                    {isActive ? (
                      <RiAccountCircleFill style={style} />
                    ) : (
                      <RiAccountCircleLine style={style} />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>
    </div>
  );
}

export default App;
