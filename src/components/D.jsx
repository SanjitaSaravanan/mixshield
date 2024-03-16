import React, { useState } from 'react';
import Navbar from './Navbar';

function D() {
  const [area, setArea] = useState('');
  const [area1, setArea1] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('feet');
  const [calculatedArea, setCalculatedArea] = useState(null);
  const [blinkColor, setBlinkColor] = useState('');

  const handleInput = (event) => {
    setArea(event.target.value);
    setCalculatedArea(null);
  };

  const handleUnitChange = (event) => {
    setSelectedUnit(event.target.value);
    setCalculatedArea(null);
  };

  const handleInputBreadth = (event) => {
    setArea1(event.target.value);
    setCalculatedArea(null);
  };

  const handleCalc = (e) => {
    e.preventDefault();

    const length = parseFloat(area);
    const breadth = parseFloat(area1);

    if (isNaN(length) || isNaN(breadth)) {
      console.error('Invalid input values for length or breadth.');
      return;
    }

    let newarea = 0;
    if (selectedUnit === 'feet') {
      newarea = (length * breadth) * 0.3048;
    } else if (selectedUnit === 'meter') {
      newarea = length * breadth;
    }
    const calculatedAreaValue = ((26 * Math.pow(10, 6)) / (2 * 96485 * (newarea)));

    setCalculatedArea(calculatedAreaValue.toFixed(4));

    if (calculatedAreaValue < 1) {
      setBlinkColor('green');
    } else {
      setBlinkColor('red');
    }
  };

  return (
    <div className="container">
      <div className="m-4 d-flex flex-column align-items-center">
        <form className={`d-flex flex-column col-6 bg-light p-4 rounded ${blinkColor}`}>
          <label htmlFor="area" className="text-dark mb-2">Area of the building</label>
          <select id="unit" onChange={handleUnitChange} value={selectedUnit} className="form-select mb-3">
            <option value="feet">Square feet</option>
            <option value="meter">Square meter</option>
          </select>
          <label htmlFor="area" className="text-dark mb-2">Type of Area/building</label>
          <select id="unit" className="form-select mb-3">
            <option value="marine">Marine or industrial structures</option>
            <option value="nonmaine">Mild steel structures (residential area)</option>
          </select>
          <label htmlFor="area" className="text-dark mb-2">Length</label>
          <input
            type="text"
            id="area"
            value={area}
            placeholder="Enter the Length of the building"
            onChange={handleInput} required
            className="form-control mb-3"
          />
          <label htmlFor="area1" className="text-dark mb-2">Breadth</label>
          <input
            type="text"
            id="area1"
            value={area1}
            placeholder="Enter the Breadth of the building"
            onChange={handleInputBreadth} required
            className="form-control mb-3"
          />
          <button type="button" onClick={handleCalc} className="btn btn-danger col-12 mb-3">Get Corrosion Value</button>
          {calculatedArea !== null && <p className="text-dark text-center">Corrosion Rate : {calculatedArea} square meter per year</p>}
        </form>
      </div>
    </div>
  );
}

export default D;