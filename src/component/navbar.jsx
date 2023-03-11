import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className=" py-5 flex justify-between mx-5">
        <div className="flex justify-between w-[12%] ">
          <div>
            {" "}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvuUG62nIlWV_nnpvNT8_sdmvSPfsqF9HU0Q&usqp=CAU"
              width="17px"
              height="17px"
            />
          </div>
          <div>
            <img
              src="https://149504167.v2.pressablecdn.com/wp-content/uploads/2019/10/2000px-YouTube_Logo_2017.svg_.png"
              width="100px"
              height="20px"
            />
          </div>
        </div>
        <div className="flex">
          <div class="flex justify-center">
            <div class="">
              <div class=" flex w-full flex-wrap">
                <input
                  type="search"
                  class="border m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon1"
                />
                <button
                  class="flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                  type="button"
                  id="button-addon1"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
                    width="22px"
                    height="22px"
                  />
                </button>
                <img
                  id="mic"
                  src="https://www.iconpacks.net/icons/1/free-microphone-icon-342-thumb.png"
                  width="22px"
                  height="22px"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex  w-40">
          <img
            id="create"
            className="w-[24px] h-[14px]"
            src="https://static.thenounproject.com/png/3750242-200.png"
            width="17px"
            height="17px"
          />
          <img
            id="icon"
            className="w-[24px] h-[14px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThsjw3SJzNMrobKr9cJmnXU0__rbQ5guJvig&usqp=CAU"
            width="17px"
            height="17px"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
