import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

function Dropdown({ options, value, onChange }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOptionClick = (option) => {
    onChange(option);
    setMenuOpen(false);
  }

  const handleMenuClick = () => {
    setMenuOpen((currentMenuOpen) => !currentMenuOpen);
  }

  const renderedOptions = options.map((option) => {
    return (
      <div className="hover:bg-sky-100 rounded cursor-pointer p-1" key={option.value} onClick={() => handleOptionClick(option)}>
        {option.value}
      </div>
    )
  });

  const icon = <span className="text-2xl">
    {menuOpen ? <GoChevronDown /> : <GoChevronLeft />}
  </span>

  return (
    <div className="w-48 relative">
      <div 
        onClick={handleMenuClick} 
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
      >
        {value?.label || 'Select...'}
        {icon}
      </div>
      {menuOpen && (
        <div className="absolute top-full border rounded p-3 shadow bg-white w-full">
          {renderedOptions}
        </div>
      )}
    </div>
  )
}

export default Dropdown;