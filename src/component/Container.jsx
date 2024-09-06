import { FaRegQuestionCircle } from "react-icons/fa";
import "../index.css"
import { Nav } from "./Nav";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useState } from "react";
import { Description } from "./Description";


 const Container = () => {

    const [activeTab , setActiveTab] = useState(0);

    return (
        <div className="flex p-8 min-h-screen mr-8">

            <div className=" w-3/5 mr-3"></div>
            

            <div className="w-[720px] h-full p-5">


            {/* section-1 */}
                <div className=" bg-gray-100 w-full h-1/3 text-gray-50 rounded-2xl shadow-2xl mt-10 pb-2">
                    <div className="max-w-full flex h-full relative">
                        <div className="flex-col justify-between mt-3 p-2  text-2xl font-bold">
                            <FaRegQuestionCircle className="mb-20" />
                            <HiOutlineRectangleStack />

                        </div>

                        <div className="w-4/5 ml-6 mt-3">
                            <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
                            <div className="absolute w-[6px] h-1/4 bg-gray-50 right-3 rounded-lg shadow-2xl top-1/3"></div>

                            <div className="w-full text-base font-light">
                                <Description activeTab={activeTab} />
                            </div>
                        </div>


                    </div>
                    
                </div>

                <div className="w-9/10 h-[7px] rounded-full items-center m-10 bg-gradient-to-t from-gray-400 to-gray-600"></div>

                {/* section-2 */}

                <div className=" bg-gray-100 w-full h-1/3 text-gray-50 rounded-2xl shadow-2xl">
                    <div className="max-w-full flex h-full ">
                        <div className="flex-col justify-evenly h-1/2 mt-3 p-2  text-2xl font-bold">
                            <FaRegQuestionCircle className="mb-20" />
                            <HiOutlineRectangleStack />

                        </div>

                        <div className="flex flex-col w-full">

                            <div >
                                <div className="flex w-11/12 ml-6 mt-3 text-center h-4">

                                    <div className="flex w-3/4 justify-between">
                                        <button className="bg-gray-500 text-center w-28 h-10 rounded-2xl text-sm font-semibold text-white">Gallery</button>

                                        <button className="bg-gray-100 text-center w-28 h-10 rounded-3xl text-sm font-semibold text-white shadow-2xl shadow-black ...">+ Add image</button>
                                    </div>

                                    <div className="flex w-1/4 ml-9 gap-2">
                                        <GrLinkPrevious className="bg-gray-500 text-4xl p-2 rounded-full" />
                                        <GrLinkNext className="bg-gray-500 text-4xl p-2 rounded-full" />
                                    </div>
                                </div>

                            </div>

                            <div className="flex w-full gap-6 h-full items-center justify-center mt-6">
                                <img src="./assets/building.png" className="w-1/4 h-5/6" alt="img" />
                                <img src="./assets/building.png" className="w-1/4 h-5/6" alt="img" />
                                <img src="./assets/building.png" className="w-1/4 h-5/6" alt="img" />
                            </div>

                        </div>

                    </div>
                    

                </div>

                <div className="w-9/10 h-[7px] rounded-full items-center m-10 bg-gradient-to-t from-gray-400 to-gray-600"></div>
            </div>
        </div>
    )
}

export default Container;