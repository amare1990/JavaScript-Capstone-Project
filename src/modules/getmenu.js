const getMenu = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian', {
    method: 'GET',
  });
  const responseJSON = await response.json();
  return responseJSON.meals;
};

export default getMenu;
