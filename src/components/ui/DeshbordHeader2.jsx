import React,  { useEffect, useState }  from 'react'
import { Settings2, Download, LayoutDashboard,} from "lucide-react";
import { ChevronDown,} from "lucide-react";


const DeshbordHeader2 = () => {

const handleSettings = () => {
    console.log('Settings clicked');
  };
  const handleDownload = () => {
    console.log('Download clicked');
  };
  const handleDashboard = () => {
    console.log('Dashboard clicked');
  };

  const buttons = [
    { Icon: Settings2, onClick: handleSettings },
    { Icon: Download, onClick: handleDownload },
    { Icon: LayoutDashboard, onClick: handleDashboard },
  ];


    const [showPicker, setShowPicker] = useState(false);
      const [dateRange, setDateRange] = useState("Sep 1 - Nov 30, 2023");
      const handleClick = () => {
        setShowPicker((prev) => !prev);
      };


      
  return (
    <>
         <div className="flex items-center justify-between flex-wrap gap-4 ">
          <div className="flex items-center gap-2 flex-wrap">
            <button className="w-8 h-8 flex items-center justify-center border border-gray-400 rounded-full text-gray-500 text-xl hover:bg-gray-100">
              +
            </button>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center border rounded-full px-3 py-1 gap-2"
              >
                <img
                  src={`https://i.pravatar.cc/36?img=${i}`}
                  alt={`Avatar ${i}`}
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm text-gray-800">Name</span>
              </div>
            ))}

            <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-sm font-medium">
              C
            </div>
          </div>
          <div className="flex gap-2">
            {buttons.map(({ Icon, onClick }, idx) => (
              <button
                key={idx}
                onClick={onClick}
                className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100"
              >
                <Icon className="w-4 h-4" />
              </button>
            ))}
          </div>
        </div>
        {/* Second Row */}
                <div className="flex items-center justify-between flex-wrap mb-4 gap-4">
                  <h2 className="text-[#C9C9C9] text-3xl ">New report</h2>
                  <div className="flex items-center gap-2 flex-wrap">
        
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-black relative transition">
                        <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full peer-checked:translate-x-5 transition-transform" />
                      </div>
                      <span className="text-sm text-gray-800">Timeframe</span>
                    </label>
        
        
                    <div className="relative">
                      <button
                        onClick={handleClick}
                        className="px-4 py-1 rounded-full bg-gray-100 text-sm font-semibold flex items-center gap-1"
                      >
                        {dateRange}
                        <ChevronDown className="w-4 h-4" />
                      </button>
        
                      {showPicker && (
                        <div className="absolute right-0 mt-2 bg-white border shadow-md rounded-lg p-4 z-10">
                          <p className="text-sm">Select a date range:</p>
                          <ul className="text-sm text-blue-600 mt-2 space-y-1">
                            <li onClick={() => setDateRange("Jan 1 - Mar 31, 2024")} className="cursor-pointer hover:underline">Jan 1 - Mar 31, 2024</li>
                            <li onClick={() => setDateRange("Apr 1 - Jun 30, 2024")} className="cursor-pointer hover:underline">Apr 1 - Jun 30, 2024</li>
                          </ul>
                        </div>
                      )}
                    </div>
        
                  </div>
                </div>
    </>
  )
}

export default DeshbordHeader2