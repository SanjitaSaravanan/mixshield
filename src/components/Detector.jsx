import React, { useState, useEffect } from 'react';
import './Detector.css';

function Detector() {
  const [area, setArea] = useState('');
  const [area1, setArea1] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('feet');
  const [calculatedArea, setCalculatedArea] = useState(null);

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

    let calculatedAreaValue = 0, newarea = 0;
    if (selectedUnit === 'feet') {
      newarea = (length * breadth) * 0.3048;
    } else if (selectedUnit === 'meter') {
      newarea = length * breadth;
    }
    calculatedAreaValue = ((26 * Math.pow(10, 6)) / (2 * 96485 * (newarea)));

    setCalculatedArea(calculatedAreaValue.toFixed(4));
  };

  return (
    <div className="container ">
      <div className="m-4 d-flex flex-column align-items-center">
      <form className={`d-flex flex-column col-6 p-4 rounded ${calculatedArea !== null ? (calculatedArea < 1 ? 'bg-success' : 'bg-danger') : 'bg-white'}`}>          <label htmlFor="area" className="text-dark mb-2">Area of the building</label>
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
            onKeyDown={(e) => {
              if (!(e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Backspace' || e.key === 'Tab' || (e.key >= '0' && e.key <= '9'))) {
                e.preventDefault();
              }
            }}
            onChange={handleInput}  required
            className="form-control mb-3"
          />
          <label htmlFor="area1" className="text-dark mb-2">Breadth</label>
          <input
            type="text"
            id="area1"
            value={area1}
            pattern="[0-9]*" 
            placeholder="Enter the Breadth of the building"
            onKeyDown={(e) => {
              if (!(e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Backspace' || e.key === 'Tab' || (e.key >= '0' && e.key <= '9'))) {
                e.preventDefault();
              }
            }}
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

export default Detector;
