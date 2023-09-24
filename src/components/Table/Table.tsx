import React from 'react';
import {
  calculateClassWiseMean,
  calculateClassWiseMedian,
  calculateClassWiseMode,
} from '../UtilityFunctions/statisticsUtils';
import wineData from '../data/wineData.json';
import './Table.css';

interface ClassWiseStatistics {
  [key: string]: number;
}

const Table = () => {
  const data = wineData;

  const classWiseMean: ClassWiseStatistics = calculateClassWiseMean(
    data,
    'Alcohol',
    'Flavanoids'
  );
  const classWiseMedian: ClassWiseStatistics = calculateClassWiseMedian(
    data,
    'Alcohol',
    'Flavanoids'
  );
  const classWiseMode: ClassWiseStatistics = calculateClassWiseMode(
    data,
    'Alcohol',
    'Flavanoids'
  );

  return (
    <div>
      <table className="data-table">
        <thead>
          <tr>
            <th colSpan={4}>Flavanoids Data Summary</th>
          </tr>
          <tr>
            <th>Class (Alcohol)</th>
            <th>Mean (Flavanoids)</th>
            <th>Median (Flavanoids)</th>
            <th>Mode (Flavanoids)</th>
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

export default Table;
