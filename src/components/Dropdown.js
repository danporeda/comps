import { useState, useEffect, useRef } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';
import Panel from './Panel';

function Dropdown({ options, value, onChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) return;
      
      if (!divEl.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

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
    <div ref={divEl} className="w-48 relative">
      <Panel 
        onClick={handleMenuClick} 
        className="flex justify-between items-center cursor-pointer"
      >
        {value?.label || 'Select...'}
        {icon}
      </Panel>
      {menuOpen && (
        <Panel className="absolute top-full">
          {renderedOptions}
        </Panel>
      )}
    </div>
  )
}

export default Dropdown;