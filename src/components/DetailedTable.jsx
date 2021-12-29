import React from 'react';

import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { XCircle } from 'react-feather';

import { numberWithDelimiter } from '../components/helpers/numberFormat';

const DetailedTable = ({ addedPackages, removeSelected }) => {

  return (
    <TableContainer>
      {
        addedPackages.length > 0 && <Table>
          <TableHead>
            <TableRow>
              <TableCell component="th">Envase</TableCell>
              <TableCell component="th" align="right">Cantidad</TableCell>
              <TableCell component="th" align="right">Puntos</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {
              addedPackages.map(currentPackage => (
                <TableRow 
                  key={currentPackage.package.id}
                >
                  <TableCell  align="left">
                    <Chip 
                      label={currentPackage.package.category}
                      size="small"
                      className={`chip-${currentPackage.package.category.toLowerCase()}`}
                    />
                    <p className="package-type">
                      { currentPackage.package.type }
                    </p>
                  </TableCell>
                  <TableCell align="right">{currentPackage.quantity}</TableCell>
                  <TableCell align="right">
                    { numberWithDelimiter(currentPackage.total_points) }
                  </TableCell>
                  <TableCell>
                    <XCircle
                      className="clickeable-icon"
                      onClick={() => removeSelected(currentPackage.package)}
                    />
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      }
    </TableContainer>
  );
}

export default DetailedTable;