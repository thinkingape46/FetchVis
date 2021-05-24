export const getActivitiesByType = (data, type) => {
  const filteredData = data.filter((ac) => ac.type === type);
  return filteredData;
};

export const getActivitiesDistanceByType = (data, type) => {
  let distance = 0;
  data.forEach((ac) => {
    if (ac.type === type) {
      distance += parseInt(ac.distance) / 1000;
    }
  });
  return distance.toFixed(2);
};
