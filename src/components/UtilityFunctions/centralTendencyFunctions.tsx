export const calculateMean = (data: number[]) => {
    const sum = data.reduce((acc, value) => acc + value, 0);
    return sum / data.length;
  };
  
  export const calculateMedian = (data: number[]) => {
    const sortedData = data.sort((a, b) => a - b);
    const middle = Math.floor(sortedData.length / 2);
  
    if (sortedData.length % 2 === 0) {
      return (sortedData[middle - 1] + sortedData[middle]) / 2;
    } else {
      return sortedData[middle];
    }
  };
  
  export const calculateMode = (data: number[]) => {
    const countMap = new Map<number, number>();
  
    for (const value of data) {
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