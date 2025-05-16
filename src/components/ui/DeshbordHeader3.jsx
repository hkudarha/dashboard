import React from 'react'

const stats = [
    {
        title: "Deals",
        value: "256",
        bgColor: "bg-gray-300",
        borderColor: "border-gray-300",
        change: "5",
        changeColor: "text-gray-500",
        rotate: "",
    },
    {
        title: "Values",
        value: "528K",
        bgColor: "bg-[#d32f59]",
        borderColor: "border-rose-400",
        containerBg: "bg-rose-50",
        change: "7.9%",
        changeColor: "text-[#d32f59]",
        rotate: "rotate-180",
    },
    {
        title: "Win rate",
        value: "44%",
        bgColor: "bg-gray-300",
        borderColor: "border-gray-300",
        change: "1.2%",
        changeColor: "text-green-500",
        rotate: "rotate-180",
    },
];


const DeshbordHeader3 = ({ title, value, change, color }) => {

    const colorClass =
        color === "green" ? "text-green-400" : color === "red" ? "text-red-400" : "text-white";


    return (
        <div className='flex w-full  flex-wrap gap-4 items-start'>
            <div className="hidden md:block p-6 lg:w-1/3">
                <h2 className="text-sm text-black font-semibold mb-1">Revenue</h2>
                <div className="flex items-center justify-between gap-2 flex-nowrap w-full text-sm">
                    <h1 className="text-2xl font-extrabold text-black">$528,976</h1>
                    <span className="text-gray-400 text-lg font-medium">.82</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-[#d32f59]/10 text-[#d32f59] font-semibold">
                        7.9%
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-[#d32f59] text-white font-medium">
                        $456,778
                    </span>
                </div>

                {/* Footer Text */}
                <p className="text-xs text-black font-medium mt-3">
                    vs prev- <span className="font-bold text-black">$501,641.73</span> Jun 1 - Aug 31, 2023
                </p>
            </div>


            {/* Top Deals Card */}
            <div className="bg-white p-4 rounded-2xl shadow w-full sm:w-[35%] lg:w-[12%]">
                <h2 className="text-xs text-gray-400">Top Deals</h2>
                <p className="text-lg font-semibold text-black">72</p>
                <div className="flex items-center mt-2">
                    <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="avatar"
                        className="w-6 h-6 rounded-full"
                    />
                    <span className="ml-2 text-sm font-medium">name</span>
                </div>
            </div>

            {/* Best Deal Card */}
            <div className="bg-black text-white p-4 rounded-2xl shadow w-full sm:w-[48%] lg:w-[18%] relative">
                <h2 className="text-xs text-gray-400">Best deal</h2>
                <p className="text-lg font-semibold">$42,300</p>
                <p className="text-sm mt-1 text-white">Rolf Inc</p>
                <button className="absolute top-3 right-3 w-5 h-5 rounded-full bg-white text-black text-xs">✕</button>
            </div>

            {/* Stat Cards */}
            <div className="flex  flex-wrap gap-2 w-full lg:w-[30%]">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className={`border ${item.borderColor} ${item.containerBg || "bg-white"} px-4 py-5 rounded-2xl w-[30%] min-w-[90px]`}
                    >
                        <p className="text-sm text-gray-500 font-medium">{item.title}</p>
                        <div className={`${item.bgColor} rounded-full w-12 h-6 flex items-center justify-center`}>
                            <span className="text-white text-sm font-semibold">{item.value}</span>
                        </div>
                        <div className={`flex items-center text-xs ${item.changeColor} font-medium`}>
                            <svg className={`w-3 h-3 mr-1 ${item.rotate}`} fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.585l3.71-4.355a.75.75 0 011.14.977l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            {item.change}
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default DeshbordHeader3