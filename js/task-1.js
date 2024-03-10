const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('li.item');

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;

  const categoryItems = item.querySelectorAll('ul > li');

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems.length}`);
});
