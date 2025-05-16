import React, { useEffect, useState } from "react";
import {FaDribbble,  FaInstagram,  FaBehance,  FaGoogle,  FaFileAlt,} from "react-icons/fa";
import Chart from "react-apexcharts";
import { BarChart, LineChart, Line, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ReferenceDot, ReferenceLine } from "recharts";
import { FaBars, FaChevronDown } from "react-icons/fa";
import User from "../components/ui/user";
import DeshbordHeader2 from "../components/ui/DeshbordHeader2";
import DeshbordHeader3 from "../components/ui/DeshbordHeader3";
import DeshbordHeader4 from "../components/ui/DeshbordHeader4";



const data = [
  { name: "Jan", value: 200 },
  { name: "Feb", value: 350 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 400 },
];

const iconMap = {
  dribbble: <FaDribbble className="text-pink-500 text-xl" />,
  instagram: <FaInstagram className="text-pink-400 text-xl" />,
  behance: <FaBehance className="text-blue-600 text-xl" />,
  google: <FaGoogle className="text-yellow-500 text-xl" />,
  file: <FaFileAlt className="text-gray-500 text-xl" />,
};

const mockData = [
  {
    name: "Dribbble",
    amount: 227459,
    percentage: 43,
    icon: "dribbble",
    category: "design",
  },
  {
    name: "Instagram",
    amount: 153000,
    percentage: 25,
    icon: "instagram",
    category: "social",
  },
  {
    name: "Behance",
    amount: 90000,
    percentage: 18,
    icon: "behance",
    category: "design",
  },
  {
    name: "Google",
    amount: 45000,
    percentage: 14,
    icon: "google",
    category: "search",
  },
];

const DataCard = ({ name, amount, percentage, icon }) => (
  <div className="flex flex-col p-4 sm:p-3 bg-white rounded-2xl shadow-md w-full">
    {/* Top Row: Icon + Name */}
    <div className="flex items-center gap-3 mb-2">
      <div className="text-xl sm:text-2xl text-blue-600">{iconMap[icon]}</div>
      <span className="text-base sm:text-lg font-semibold text-gray-800">
        {name}
      </span>
    </div>

    {/* Bottom Row: Amount + Percentage */}
    <div className="flex items-center gap-2 justify-between">
      <div className="text-sm sm:text-base font-medium text-black">
        {percentage}%
      </div>
      <div className="text-lg sm:text-lg font-semibold text-[#C4C4C4]">
        ${amount.toLocaleString()}
      </div>

    </div>
  </div>
);



// bottom right cart data 
const chartData = [
  { day: 1, current: 250, previous: 30 },
  { day: 5, current: 160, previous: 170 },
  { day: 10, current: 75, previous: 20 },
  { day: 15, current: 220.342123, previous: 220 },
  { day: 20, current: 20, previous: 90 },
  { day: 25, current: 245, previous: 330 },
  { day: 30, current: 85, previous: 170 },
];
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    return (
      <div className="bg-[#2e2e2e] text-white px-4 py-2 rounded-md shadow-lg text-sm">
        <p className="text-gray-300">This Month</p>
        <p className="text-xl font-bold">{(value * 1_000_000).toLocaleString()}</p>
        <p className="text-sm">May</p>
      </div>
    );
  }
  return null;
};

const Home = () => {
  const [selectedTab, setSelectedTab] = useState("Revenue");
  const tabs = ["Revenue", "Leads", "W/L"];
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState("all");

  

  useEffect(() => {
    setData(mockData);
    setFiltered(mockData);
  }, []);

  const handleFilter = (cat) => {
    setCategory(cat);
    if (cat === "all") setFiltered(data);
    else setFiltered(data.filter((item) => item.category === cat));
  };

  const chartOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
        columnWidth: "50%",
      },
    },
    xaxis: {
      categories: filtered.map((item) => item.name),
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      colors: ["#60A5FA", "#F472B6", "#34D399", "#FBBF24"],
    },
  };


  const chartSeries = [
    {
      name: "Percentage",
      data: filtered.map((item) => item.percentage),
    },
  ];

  

  return (
    <div className="w-full mt-10 h-auto rounded-3xl  p-2 bg-[#FEFEFE] overflow-x-hidden">
      <div className="flex flex-col gap-4 ">
        <DeshbordHeader2/>
      </div>
      <DeshbordHeader3/>
      <DeshbordHeader4 />
      <div className="w-full h-full flex flex-col lg:flex-row gap-2">
        {/* Left Section */}
        <div className="left flex-1 h-full flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-start">

            <div className="bg-[#F0F0F0] rounded-xl p-4 w-full sm:w-1/2 h-[18rem] shadow">
              <div className="flex justify-between items-center mb-4">
                <div className="text-gray-600 cursor-pointer flex gap-2">
                  <FaBars />
                  <FaChevronDown />
                </div>
                <select
                  onChange={(e) => handleFilter(e.target.value)}
                  value={category}
                  className="border rounded px-2 py-1 text-sm"
                >
                  <option value="all">All</option>
                  <option value="design">Design</option>
                  <option value="social">Social</option>
                  <option value="search">Search</option>
                </select>
              </div>

              <div className="space-y-3 overflow-y-auto h-[13rem] pr-2">
                {filtered.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between bg-[#FFFFFF] px-3 py-2 rounded-lg"
                  >
                    <div className="flex items-center gap-2">
                      {iconMap[item.icon] || iconMap["file"]}
                      <span className="text-gray-700 font-medium">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-gray-800">
                        ${item.amount.toLocaleString()}
                      </span>
                      <span className="text-sm bg-gray-300 px-2 py-0.5 rounded-full">
                        {item.percentage}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Apex Bar Chart View */}
            <div className="bg-[#F0F0F0] rounded-xl p-4 w-full sm:w-1/2 h-[18rem] shadow flex flex-col items-center">
              <div className="flex justify-between items-center w-full mb-4">
                <div className="text-gray-600 cursor-pointer flex gap-2">
                  <FaBars />
                  <FaChevronDown />
                </div>
                <select
                  onChange={(e) => handleFilter(e.target.value)}
                  value={category}
                  className="border rounded px-2 py-1 text-sm"
                >
                  <option value="all">All</option>
                  <option value="design">Design</option>
                  <option value="social">Social</option>
                  <option value="search">Search</option>
                </select>
              </div>

              <Chart
                background="white"
                options={chartOptions}
                series={chartSeries}
                type="bar"
                height={200}
                width="100%"
              />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="w-full">
            <div className="flex rounded-2xl shadow-md bg-[#F0F0F0] overflow-hidden w-full flex-col sm:flex-row">
              {/* Left Section */}
              <div className="text-white w-full sm:w-1/3 flex flex-col justify-between rounded-t-2xl sm:rounded-l-2xl relative">
                <div className="p-4 text-black">
                  <p className="text-xs text-gray-700">Platform Value</p>
                  <div className="flex items-center gap-1">
                    <p className="font-semibold text-base">Dribbble</p>
                  </div>
                </div>

                <div className="bg-[#D82E6F] relative py-8 w-full sm:w-[12rem] rounded-tr-3xl h-full pl-4 sm:pl-[4rem] text-sm">
                  <div>
                    <p className="opacity-80">Revenue</p>
                    <p className="text-lg font-bold">$18,552</p>
                  </div>
                  <div>
                    <p className="opacity-80">Leads</p>
                    <p className="text-lg font-bold">373</p>
                  </div>
                  <div>
                    <p className="opacity-80">Win/lose</p>
                    <p className="text-lg font-bold">16%</p>
                  </div>
                  <p className="absolute left-[-22px] top-1/3 -translate-y-1/2 -rotate-90 text-white text-sm hidden sm:block">
                    Average monthly
                  </p>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between items-end">
                {/* Tabs */}
                <div className="flex gap-2 mb-4 bg-white w-min p-2 rounded-3xl">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setSelectedTab(tab)}
                      className={`px-4 py-1 rounded-full font-medium text-sm ${selectedTab === tab
                        ? "bg-black text-white"
                        : "bg-gray-200 text-gray-700"
                        }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Chart */}
                <ResponsiveContainer width="100%" height={120}>
                  <BarChart data={data}>
                    <XAxis dataKey="name" hide />
                    <YAxis
                      tickFormatter={(value) => `$${value}`}
                      ticks={[200, 300, 400, 500]}
                      width={40}
                      axisLine={false}
                      tickLine={false}
                      stroke="#6B7280"
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip formatter={(value) => `$${value}`} />
                    <Bar
                      dataKey="value"
                      fill="#D9D9D9"
                      barSize={30}
                      radius={[10, 10, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="right w-[55rem] relative  overflow-hidden">
          <div className="bg-white shadow rounded-3xl py-1 px-2 mb-2">
            <User
              avatar="https://via.placeholder.com/40"
              name="Name"
              amount={209633}
              stat1={41}
              stat2={41}
              stat3={0.84}
              stat4={41}
              stat5={33}
            />
          </div>

          <div className="card p-4 sm:p-5 rounded-xl bg-[linear-gradient(90deg,#F6F7F9_12.59%,#F5F5F5_32.23%,#F4EDF4_50.68%,#F4E8F2_74.49%,#FBEBEB_99.21%)]">

            <div className="mb-2">
              <User
                avatar="https://via.placeholder.com/40"
                name="Name"
                amount={209633}
                stat1={41}
                stat2={41}
                stat3={0.84}
                stat4={41}
                stat5={33}
              />
            </div>

            <div className="w-full items-center flex justify-between ">
                  <button className="bg-white py-1 px-2 rounded-3xl text-[0.8rem]">Top Sales</button>
                  <button className="bg-white py-1 px-2 rounded-3xl text-[0.8rem]">Sales Streak🔥</button>
                  <button className="bg-white py-1 px-2 rounded-3xl text-[0.8rem]">Top reviews👍 </button>
              </div>

            <div>
              <h5 className="font-semibold   my-2">
                Work with platforms
              </h5>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
                {mockData.map((data) => (
                  <DataCard
                    key={data.name}
                    name={data.name}
                    amount={data.amount}
                    percentage={data.percentage}
                    icon={data.icon}
                  />
                ))}
              </div>
            </div>         

            <div>
              <div className="text-black mt-4 w-full  ">
                <div className="flex justify-between items-center ">
                  <h2 className="font-semibold">Sales Dynamic</h2>

                </div>

                <ResponsiveContainer width="100%" height={130}>
                  <LineChart data={chartData}>
                    <XAxis
                      dataKey="day"
                      stroke="#666"
                      tick={{ fontSize: 8, fill: "#999" }}
                    />
                    {/* <YAxis
                      stroke="#666"
                      tickFormatter={(val) => `${val}M`}
                      tick={{ fontSize: 12, fill: "#999" }}
                    /> */}

                    {/* Tooltip */}
                    <Tooltip content={<CustomTooltip />} cursor={false} />

                    {/* Provisions Line (gray) */}
                    <Line
                      type="monotone"
                      dataKey="previous"
                      stroke="#edc7d1"
                      strokeWidth={2}
                      dot={false}
                    />

                    {/* Current Line (blue) */}
                    <Line
                      type="monotone"
                      dataKey="current"
                      stroke="#D52B57"
                      strokeWidth={3}
                      dot={false}
                      activeDot={{ r: 6, stroke: "#2f8eff", strokeWidth: 3, fill: "#1a1a1a" }}
                    />

                    {/* Highlighted Dot on Day 15 */}
                    {/* <ReferenceLine x={15} stroke="#2f8eff" strokeDasharray="4 4" /> */}
                    <ReferenceDot
                      x={15}
                      y={220.342123}
                      r={6}
                      fill="#1a1a1a"
                      stroke="#2f8eff"
                      strokeWidth={3}
                      ifOverflow="visible"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <User
              avatar="https://via.placeholder.com/40"
              name="Name"
              amount={209633}
              stat1={41}
              stat2={41}
              stat3={0.84}
              stat4={41}
              stat5={33}
            />


          </div>
        </div>
      </div>
    </div>

  );
};

export default Home;