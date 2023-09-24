
import { calculateMean,
  calculateMedian,
  calculateMode } from "./centralTendencyFunctions";
  
  export const calculateClassWiseMean = (
    data: any[],
    classKey: string,
    valueKey: string
  ) => {
    const uniqueClasses = [...new Set(data.map(item => item[classKey]))];
    const classWiseMean: Record<string, number> = {};
  
    uniqueClasses.forEach(cls => {
      const filteredData = data
        .filter(item => item[classKey] === cls)
        .map(item => item[valueKey]);
  
      const mean = calculateMean(filteredData);
      classWiseMean[cls] = mean;
    });
  
    return classWiseMean;
  };
  
  export const calculateClassWiseMedian = (
    data: any[],
    classKey: string,
    valueKey: string
  ) => {
    const uniqueClasses = [...new Set(data.map(item => item[classKey]))];
    const classWiseMedian: Record<string, number> = {};
  
    uniqueClasses.forEach(cls => {
      const filteredData = data
        .filter(item => item[classKey] === cls)
        .map(item => item[valueKey]);
  
      const median = calculateMedian(filteredData);
      classWiseMedian[cls] = median;
    });
  
    return classWiseMedian;
  };
  
  export const calculateClassWiseMode = (
    data: any[],
    classKey: string,
    valueKey: string
  ) => {
    const uniqueClasses = [...new Set(data.map(item => item[classKey]))];
    const classWiseMode: Record<string, number> = {};
  
    uniqueClasses.forEach(cls => {
      const filteredData = data
        .filter(item => item[classKey] === cls)
        .map(item => item[valueKey]);
  
      const mode = calculateMode(filteredData);
      classWiseMode[cls] = mode;
    });
  
    return classWiseMode;
  };
  