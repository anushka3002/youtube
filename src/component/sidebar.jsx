import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  const slidebarData = [
    {
      icon: "https://cdn2.iconfinder.com/data/icons/pittogrammi/142/65-512.png",
      title: "Home",
      route: "/",
    },
    {
      icon: "data:image/png;base64,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",
      title: "Shorts",
      route: "/shorts",
    },
    {
      icon: "https://cdn.iconscout.com/icon/free/png-256/subscriptions-1781681-1518361.png",
      title: "Subscriptions",
      route: "/subscriptions",
    },
    {
      icon: "https://static.thenounproject.com/png/2481186-200.png",
      title: "Library",
      route: "/library",
    },
    {
      icon: "https://uxwing.com/wp-content/themes/uxwing/download/computers-mobile-hardware/history-line-icon.png",
      title: "History",
      route: "/history",
    },
    {
      icon: "https://icon-library.com/images/youtube-video-icon-png/youtube-video-icon-png-27.jpg",
      title: "Your videos",
      route: "/my_videos",
    },
    {
      icon: "https://cdn.iconscout.com/icon/free/png-256/watch-later-1781603-1513853.png",
      title: "Watch later",
      route: "/watch_later",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/126/126473.png",
      title: "Liked videos",
      route: "/liked_videos",
    },
    {
      icon: "https://cdn1.iconfinder.com/data/icons/youtube-23/27/Union-6-512.png",
      title: "Anushka",
      route: "/playlist",
    },
  ];

  return (
    <div className="fixed z-20 px-1 lg:block hidden">
      {/* side bar */}
      <div className="">
        <div onClick={() => setShowSidebar(!showSidebar)} className="pt-5 z-50">
          <img
            className="mx-auto items-center justify-center mx-auto cursor-pointer"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvuUG62nIlWV_nnpvNT8_sdmvSPfsqF9HU0Q&usqp=CAU"
            width="20px"
            height="20px"
            id="lefticon"
          />
        </div>
        <Link to="/">
          <div className="pt-8">
            <img
              className="mx-auto items-center justify-center mx-auto"
              src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/65-512.png"
              width="20px"
              id="lefticon"
            />
            <p className="text-[10px] pt-2 text-center">Home</p>
          </div>
        </Link>
        <Link to="/shorts">
          <div className="pt-6">
            <img
              className="items-center justify-center mx-auto"
              src="data:image/png;base64,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"
              width="18px"
              id="lefticon"
            />
            <p className="text-[10px] pt-2 text-center">Shorts</p>
          </div>
        </Link>
        <div className="pt-6">
          <img
            className="items-center justify-center mx-auto"
            src="https://cdn.iconscout.com/icon/free/png-256/subscriptions-1781681-1518361.png"
            width="24px"
            id="lefticon"
          />
          <p className="text-[10px] pt-2 text-center">Subscriptions</p>
        </div>
        <Link to="/library">
          <div className="pt-6">
            {" "}
            <img
              className="items-center justify-center mx-auto"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAADPz89hYWGWlpalpaXDw8OLi4v8/Pzv7+/p6enT09PZ2dkiIiLy8vJMTExFRUXj4+NycnKvr6+FhYVYWFg6Ojqfn59RUVEKCgpaWlrAwMBCQkJISEg1NTVsbGwVFRUuLi6Pj48HnYJSAAAEGklEQVR4nO3di1raQBCG4QU5JBBCAdFWrVbv/yILta2Kq93DTOYf+n9X4PswEjanDYExxhhjjDHGGGPspabZLMdD17XNQLx2t12NbFrPl/rKbmuk+939VNfXGPuOrWaKwLG17rkHtVGdWtP+dNXrAK+tYS89qhB31qzXXSkMameNettWXnhnbTpJ/BsVakaPraSF1qD3CR/64T5C8S+br9aeSEtJ4MJaE2suKZxZa2KtJYUTa000yX9EgCVFpFZQeGGNidadvXBMIYUUmkchhRTaRyGFFNpH4RDCe1HRaQjC3eybqOltCMJpWHwXRb0JQxjCpajqdSjCoDapacJuf3HSzU5YGBZrUdjf0oSRC9cTaaHWpCIJdSYVShhahUnFEoYwr9LEQhPKX/yAE4b+SxXoXXhC6UlFFMpOKqQwtIKTiimUnFRUodykwgpDK3T3Ea5QalKRhTKTCi0UWftjCyUmFV1YP6nwwuq1P76wdlI9COsm1YUwLCruevQhrJlUL8LySXUjLD5L5UdYOqmehOH27IVFa39fwpIz/96E+ZPqThgWmWt/f8LcSfUozLtG5VIYFhnfqT6FOZPqVZg+qW6FyUd/v8LUSXUsnP04c2HqSsOrMP0MnFNhxorfpzBnLexRmHeO2KEwc/3kT5i7BvYmzPnN7VJYcNbUl7DkfKInYe75C3fCwvP6foSl12a8CPviu2ucCCuukfoQ1lzn9iBsq+6qcSCsvN8EX1j7FAa6sP5JGnChwDMm2EKJ54SQhTJPJQILb2WegsIVSj3JhiosWynFAhUW3VcSD1Mo+VwQolDyiRlIoeCEHsMTSj9jiSasWynFAhMqvD4TSyj/FDCWUOedA0BCpRe84gg1JvQYilDrrRgwQsVXEGMI9d5OgyF8Un0POIJQNwoppNA+Cimk0D4KKaTQPgr9C9P2KEkTPgz/5ye0ERRqrtTLS9srKE0IuCnZaLSSFIJtfvhc4haIacJgtQPwZ0XeBlwh1DqpW1PihlaJws3wgH+Vuk9nohDwiJi6Y1eqEO5DTN5qNVWItBvwr5I3zksWhv3wik9Kf+N8urB/HJzxcRmPG6ULkYjX6cAcYehRBjXxWJ8vBPm6ucvb2TFPGDb2x8WsDzBfeDA+Wf5GXef6CoSHut3lw+muGAO0nYxL9lYtEfqKQv9R6D8K/Ueh/yj0H4X+o9B/FPrvvxTuJ+bln435OMiru6MbQWFrjYl2IShsrDHRJIVBcc/l8kSFiFfoZYVLa00sUWGju8N7WaLCMLXmRJIVIt4NJCxUfEKwNGFh2FqD3iUtbK6sRadJC0OP9n0qLgw92KcoLwwN1v+igvDwjYp00FARHg79OKOqJDz8Rp2rvR0gr72W8FDTdmP78u4JYowxxhhjjDHG2Nn1E2sTe015x+DfAAAAAElFTkSuQmCC"
              width="24px"
              id="lefticon"
            />
            <p className="text-[10px] pt-2 text-center">Library</p>
          </div>
        </Link>
      </div>
      {/* slide bar */}
      <div
        className={`top-0 left-0 w-[19vw] bg-white fixed h-full z-40  ease-in-out duration-300 flex opacity-100 ${
          showSidebar ? "translate-x-0 " : "-translate-x-full"
        }`}
      >
        <div className="w-full">
          <div className="pt-5  fixed w-full z-50">
            {/* slide bar header */}
            <div className="flex">
              <img
                onClick={() => setShowSidebar(!showSidebar)}
                className="ml-5 cursor-pointer"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvuUG62nIlWV_nnpvNT8_sdmvSPfsqF9HU0Q&usqp=CAU"
                width="20px"
                height="20px"
                id="lefticon"
              />
              <div className="ml-7 w-[90px] h-[18px]">
                <img
                  className="cursor-pointer"
                  onClick={() => navigate("/")}
                  src="https://149504167.v2.pressablecdn.com/wp-content/uploads/2019/10/2000px-YouTube_Logo_2017.svg_.png"
                />
              </div>
            </div>
            <div className="pt-8 mx-6">
              {slidebarData.map((e) => {
                return (
                  <div>
                    <Link to={e.route}><div
                    onClick={()=>setShowSidebar(!showSidebar)}
                      className={` flex hover:bg-[#f2f2f2] py-2.5 px-2 rounded-[15px]`}
                    >
                      <div className="w-[20%]">
                        <img
                          className=""
                          src={e.icon}
                          width="20px"
                          id="lefticon"
                        />
                      </div>
                      <p className="text-[14px] focus:font-medium ml-3 w-[80%] align-middle my-auto">
                        {e.title}
                      </p>
                    </div></Link>
                    {e.title == "Subscriptions" && <hr className="my-3"></hr>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
