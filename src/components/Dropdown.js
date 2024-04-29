import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

function Dropdown({ options }) {
  const [selectedOption, setSelectedOption] = useState('Select...');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOptionClick = (label) => {
    setSelectedOption(label);
    setMenuOpen(false);
  }

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  }

  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option.label)}>
        {option.value}
      </div>
    )
  })
  
  const icon = <span className="text-2xl">
    {menuOpen ? <GoChevronDown /> : <GoChevronLeft />}
  </span>

  return (
    <div>
      <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleMenuClick()}>
        {selectedOption}
        {icon}
      </div>
      <div>{menuOpen && renderedOptions}</div>
    </div>
  )
}

export default Dropdown;