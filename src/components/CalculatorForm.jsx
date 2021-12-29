import React, { useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

const CalculatorForm = ({ addPackage, packageList, availableCategories }) => {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [quantityInput, setQuantityInput] = useState();

  useEffect(() => {
    const filterPackages = () => {
      setFilteredPackages(packageList.filter(currentPackage => currentPackage.category === selectedCategory));
    }

    filterPackages();
  }, [selectedCategory]);

  const appendPackage = () => {
    const newPackage = {
      package: selectedPackage,
      quantity: quantityInput,
      total_points: selectedPackage.points * quantityInput
    }
    
    addPackage(newPackage);
    cleanForm();
  }

  const cleanForm = () => {
    setSelectedPackage('');
    setFilteredPackages([]);
    setSelectedCategory('');
    setQuantityInput();
  }

  return (
    <section className="form-container">
      <FormControl fullWidth>
        <InputLabel id="category-label">Categoría</InputLabel>
        <Select
          labelId="category-label"
          id="category"
          value={selectedCategory}
          label="Age"
          onChange={e => setSelectedCategory(e.target.value)}
        >
          { 
            availableCategories.map((category) => (
              <MenuItem 
                value={category}
                key={category}
              >
                {category}
              </MenuItem>
            )) 
          }
        </Select>
      </FormControl>

      {
        filteredPackages && <FormControl fullWidth>
          <InputLabel id="package-list-label">Tipo de envase</InputLabel>
          <Select
            labelId="package-list-label"
            id="package-list"
            value={selectedPackage}
            label="Age"
            onChange={e => setSelectedPackage(e.target.value)}
          >
            { 
              filteredPackages.map((current_package) => (
                <MenuItem 
                  value={current_package}
                  key={current_package.type}
                >
                  {current_package.type}
                </MenuItem>
              )) 
            }
          </Select>
        </FormControl>
      }

      {
        selectedPackage && 
        <TextField 
          id="package-quantities" 
          label="Cantidad de envases" 
          variant="outlined" 
          type="number"
          inputProps={{ min: 1 }} 
          fullWidth
          onChange={e => setQuantityInput(parseInt(e.target.value))}
        />
      }

      {
        quantityInput && <div>
          <Button 
            variant="contained"
            onClick={appendPackage}
            fullWidth
            size="large"
          >
            Agregar envase
          </Button>
        </div>
      }
    </section>
  );
}

export default CalculatorForm;