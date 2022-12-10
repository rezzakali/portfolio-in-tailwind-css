import React from 'react';

const ServicesCard = ({ title, icon, text }) => {
  return (
    <div className="text-start duration-500 hover:scale-105">
      <div className="text-5xl dark:text-[#2a8ebd] text-[#6d28d9]">{icon}</div>
      <h1 className="text-2xl py-3">{title}</h1>
      <p className="text-lg">{text}</p>
    </div>
  );
};

export default ServicesCard;
