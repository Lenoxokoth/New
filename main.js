function imgSlider(anything){
    document.querySelector(".bike").src = anything;
}

// mixitup
const containerEl = document.querySelector(".project-container");
var mixer = mixitup(containerEl);

mixer.filter('*');
