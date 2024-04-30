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
      <div key={option.value} onClick={() => handleOptionClick(option)}>
        {option.value}
      </div>
    )
  });

  const icon = <span className="text-2xl">
    {menuOpen ? <GoChevronDown /> : <GoChevronLeft />}
  </span>

  return (
    <div>
      <div onClick={handleMenuClick} className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer">
        {value?.label || 'Select...'}
        {icon}
      </div>
      <div>{menuOpen && renderedOptions}</div>
    </div>
  )
}

export default Dropdown;