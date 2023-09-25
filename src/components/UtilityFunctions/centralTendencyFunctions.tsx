export const calculateMean = (data: number[]) => {
    const filteredData = data.filter(value => typeof value === 'number' && !isNaN(value));
  
    if (filteredData.length === 0) {
      return 0;
    }
  
    const sum = filteredData.reduce((acc, value) => acc + value, 0);
    return sum / filteredData.length;
  };
  
  
  export const calculateMedian = (data: number[]) => {
    const filteredData = data.filter(value => !isNaN(value));
  
    const sortedData = filteredData.sort((a, b) => a - b);
    const middle = Math.floor(sortedData.length / 2);
  
    if (sortedData.length === 0) {
      return 0;
    }
  
    if (sortedData.length % 2 === 0) {
      return (sortedData[middle - 1] + sortedData[middle]) / 2;
    } else {
      return sortedData[middle];
    }
  };
  
  export const calculateMode = (data: number[]) => {
    const filteredData = data.filter(value => !isNaN(value));
  
    const countMap = new Map<number, number>();
  
    for (const value of filteredData) {
      countMap.set(value, (countMap.get(value) || 0) + 1);
    }
  
    let mode: number | undefined;
    let maxCount = 0;
  
    for (const [value, count] of countMap.entries()) {
      if (count > maxCount) {
        mode = value;
        maxCount = count;
      }
    }
  
    return mode !== undefined ? mode : 0;
  };
    
  