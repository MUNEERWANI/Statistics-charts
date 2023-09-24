import React from 'react';
import wineData from '../data/wineData.json';
import './Table.css';
import {
  calculateClassWiseMean,
  calculateClassWiseMedian,
  calculateClassWiseMode,
} from '../UtilityFunctions/statisticsUtils';

import { gamma } from '../UtilityFunctions/gamma';


interface ClassWiseStatistics {
  [key: string]: number;
}

const GammaTable = () => {
  const data = wineData;

  const dataWithGamma = gamma(data);

  // Calculate class-wise mean, median, and mode for "Gamma"
  const classWiseMean: ClassWiseStatistics = calculateClassWiseMean(
    dataWithGamma,
    'Alcohol',
    'Gamma'
  );
  const classWiseMedian: ClassWiseStatistics = calculateClassWiseMedian(
    dataWithGamma,
    'Alcohol',
    'Gamma'
  );
  const classWiseMode: ClassWiseStatistics = calculateClassWiseMode(
    dataWithGamma,
    'Alcohol',
    'Gamma'
  );

  return (
    <div>
      <table className="data-table">
        <thead>
          <tr>
            <th colSpan={4}>Gamma Data Summary</th>
          </tr>
          <tr>
            <th>Class (Alcohol)</th>
            <th>Mean (Gamma)</th>
            <th>Median (Gamma)</th>
            <th>Mode (Gamma)</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(classWiseMean).map(cls => (
            <tr key={cls}>
              <td>{cls}</td>
              <td>{classWiseMean[cls].toFixed(3)}</td>
              <td>{classWiseMedian[cls].toFixed(3)}</td>
              <td>{classWiseMode[cls].toFixed(3)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GammaTable;
