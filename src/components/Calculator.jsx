import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import CalculatorForm from '../components/CalculatorForm'
import DetailedTable from '../components/DetailedTable'
import TotalPointsContainer from '../components/TotalPointsContainer'


const Calculator = () => {
  const [packageList, setPackageList] = useState([]);
  const [availableCategories, setAvailableCategories] = useState([]);

  const [addedPackages, setAddedPackages] = useState([]);

  useEffect(() => {
    const loadPackageList = () => {
      setPackageList([
        {id: 1, category: 'Cervezas', type: 'Botella 330cc', points: 20},
        {id: 2, category: 'Cervezas', type: 'Botella 500cc', points: 30},
        {id: 3, category: 'Cervezas', type: 'Botella 710cc', points: 40},
        {id: 4, category: 'Licores', type: 'Botella Vidrio 275cc', points: 20},
        {id: 5, category: 'Licores', type: 'Botella Pisco 700cc o 750cc', points: 50},
        {id: 6, category: 'Licores', type: 'Botella Aperitivo 700cc o 750cc', points: 60},
        {id: 7, category: 'Licores', type: 'Botella Ron 700cc o 750cc', points: 60},
        {id: 8, category: 'Licores', type: 'Botella Vodka 750cc', points: 70},
        {id: 9, category: 'Licores', type: 'Botella Baileys 750cc', points: 70},
        {id: 10, category: 'Licores', type: 'Botella Tequila 750cc', points: 70},
        {id: 11, category: 'Licores', type: 'Botella Gin 700cc o 750cc', points: 100},
        {id: 12, category: 'Licores', type: 'Botella Whisky 700cc o 750cc', points: 100},
        {id: 25, category: 'Vinos', type: 'Botella 375cc', points: 30},
        {id: 26, category: 'Vinos', type: 'Botella 500cc', points: 40},
        {id: 13, category: 'Vinos', type: 'Botella 750cc', points: 50},
        {id: 14, category: 'Vinos', type: 'Espumante 750cc', points: 50},
        {id: 15, category: 'Vinos', type: 'Botellón 1,5 Litros', points: 70},
        {id: 16, category: 'Jugos', type: 'Botella vidrio 200cc o 250cc', points: 20},
        {id: 17, category: 'Jugos', type: 'Botella vidrio 300cc o 350cc', points: 30},
        {id: 18, category: 'Jugos', type: 'Botella vidrio 475cc o 500cc', points: 40},
        {id: 19, category: 'Jugos', type: 'Botella vidrio 1 Litro', points: 60},
        {id: 20, category: 'Aguas', type: 'Botella vidrio 200cc o 250cc', points: 20},
        {id: 21, category: 'Aguas', type: 'Botella vidrio 300cc o 350cc', points: 30},
        {id: 22, category: 'Aguas', type: 'Botella vidrio 475cc o 500cc', points: 40},
        {id: 23, category: 'Otros', type: 'Sidra 275cc o 330cc', points: 20},
        {id: 24, category: 'Otros', type: 'Tónica 200cc', points: 20},
      ]);
    }

    const loadAvailableCategories = () => {
      setAvailableCategories([
        'Cervezas',
        'Licores',
        'Vinos',
        'Jugos',
        'Aguas',
        'Otros'
      ]);
    }

    loadPackageList();
    loadAvailableCategories();
  }, []);

  const addPackage = (newPackage) => {
    setAddedPackages([...addedPackages, newPackage]);
    const {id} = newPackage.package;
    setPackageList(packageList.filter(currentPackage => currentPackage.id !== id));
  }

  const removeSelected = (packageToRestore) => {
    setAddedPackages(addedPackages.filter(currentPackage => currentPackage.package.id !== packageToRestore.id));
    setPackageList([...packageList, packageToRestore]);
  }

  return (
    <Container component="main" className="calculator-container">
      <Box>
        <h1>Calculadora Loopin</h1>

        <CalculatorForm 
          addPackage={ addPackage } 
          packageList={ packageList }
          availableCategories={ availableCategories }
        />

        <DetailedTable
          addedPackages={addedPackages}
          removeSelected={removeSelected}
        />

        <TotalPointsContainer
          totalPoints={addedPackages.reduce((accum, currentPackage) => accum + currentPackage.total_points, 0)}
        />
        
      </Box>
    </Container>
  );
}

export default Calculator;