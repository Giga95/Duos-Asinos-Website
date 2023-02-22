const categoryTitle = document.querySelectorAll('.category-title');
const allCategoryPosts = document.querySelectorAll('.all');

for(let i = 0; i < categoryTitle.length; i++){
    categoryTitle[i].addEventListener('click', filterPosts.bind(this, categoryTitle[i]));
}

function filterPosts(item){
    changeActivePosition(item);
    for(let i = 0; i < allCategoryPosts.length; i++){
        if(allCategoryPosts[i].classList.contains(item.attributes.id.value)){
            allCategoryPosts[i].style.display = "block";
            setTimeout(function() {
                allCategoryPosts[i].style.opacity = "1";
            }, 50);
        } else {
            allCategoryPosts[i].style.opacity = "0";
            setTimeout(function() {
                allCategoryPosts[i].style.display = "none";
            }, 0);
        }
    }
}


function changeActivePosition(activeItem){
    for(let i = 0; i < categoryTitle.length; i++){
        categoryTitle[i].classList.remove('active-category');
    }
    activeItem.classList.add('active-category');
};


// Career page

const checkboxes = document.querySelectorAll('#filter-options input[type="checkbox"]');
const resultsList = document.querySelector('#results-list');

function handleCheckboxChange(event) {
    const checkedFilterIds = Array.from(checkboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.getAttribute('data-filter_id'));
  
    if (checkedFilterIds.length === 0) {
      Array.from(resultsList.children).forEach((li) => {
        li.style.opacity = 0;
        li.style.display = 'block';
  
        setTimeout(() => {
          li.style.opacity = 1;
        }, 10);
      });
    } else {
      Array.from(resultsList.children).forEach((li) => {
        if (checkedFilterIds.some((id) => li.classList.contains(id))) {
          li.style.opacity = 0;
          li.style.display = 'block';
  
          setTimeout(() => {
            li.style.opacity = 1;
          }, 10);
        } else {
          li.style.display = 'none';
        }
      });
    }
  }
  
  
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', handleCheckboxChange);
});


