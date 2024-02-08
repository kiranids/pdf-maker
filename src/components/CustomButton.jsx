import React from 'react';

const Button = ({
  children,
  bgColor = 'bg-gray-500',
  rounded = 'rounded-md',
  textColor = 'text-white',
  hoverBgColor = 'hover:bg-gray-600',
  hoverTextColor = 'hover:text-white',
  onClick
}) => {
  const baseClasses = `py-2 px-4 ${bgColor} ${rounded} ${textColor} transition duration-300 ease-in-out`;
  const hoverClasses = `${hoverBgColor} ${hoverTextColor} hover:bg-opacity-75`;

  return (
    <button
      className={`${baseClasses} ${hoverClasses}`}
      onClick={onClick}
      type='submit'
    >
      {children}
    </button>
  );
};

export default Button;
