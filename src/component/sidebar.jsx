import React from 'react'

const Sidebar = () => {
  return (
    <div className='fixed z-20 px-1 lg:block hidden'>
      {/* side bar */}
      <div className="">
          <div className="pt-5"><img className="mx-auto items-center justify-center mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvuUG62nIlWV_nnpvNT8_sdmvSPfsqF9HU0Q&usqp=CAU" width="20px" height="20px" id="lefticon"/></div>
       <div className="pt-8"><img className="mx-auto items-center justify-center mx-auto" src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/65-512.png" width="20px" height="20px" id="lefticon"/>
        <p className="text-[10px] pt-2 text-center">Home</p></div>
        <div className="pt-6"><img className="items-center justify-center mx-auto" src="https://cdn.iconscout.com/icon/free/png-256/explore-1781524-1513844.png" width="24px" height="24px" id="lefticon"/>
        <p className="text-[10px] pt-2 text-center">Explore</p></div>
        <div className="pt-6"><img className="items-center justify-center mx-auto" src="https://cdn.iconscout.com/icon/free/png-256/subscriptions-1781681-1518361.png" width="24px" height="24px" id="lefticon"/>
        <p className="text-[10px] pt-2 text-center">Subscriptions</p></div>
        <div className="pt-6"> <img className="items-center justify-center mx-auto" src="https://static.thenounproject.com/png/2481186-200.png" width="24px" height="24px" id="lefticon"/>
        <p className="text-[10px] pt-2 text-center">Library</p></div>
      </div>
    </div>
  )
}

export default Sidebar