import React from 'react'

const User = ({ avatar, name, amount, stat1, stat2, stat3, stat4, stat5 }) => {
  return (
    <div>
        <div className="flex items-center w-full mt-2 justify-between">
          <img 
            src="https://i.pravatar.cc/36" 
            alt="Avatar" 
            className="w-[2rem] h-[2rem] rounded-full"
          />
          
          
          <span className="text-gray-800 font-medium text-[1rem]">{name}</span>
          
          
          <span className="text-gray-800 text-[1rem] font-medium">${amount.toLocaleString()}</span>
          
        <div className="flex space-x-2">
            
            <span className="   flex items-center text-[0.9rem] justify-center ">
              {stat1}
            </span>
            <span className="text-gray-800  text-[0.9rem] flex items-center">
              {stat2}
            </span>
            <span className="text-gray-800 text-[0.9rem]  flex items-center">
              {stat3}
            </span>
            <span className="text-gray-800 text-[0.9rem] flex items-center">
              {stat4}%
            </span>
            <span className="text-[0.8rem]   ">
              {stat5}
            </span>
          </div>
        </div>
    </div>
  )
}

export default User;