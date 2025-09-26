// Color theme functions
function color1() { 
    document.documentElement.style.setProperty('--primary-color', '#28e98c');
    document.documentElement.style.setProperty('--primary_color', '#28e98c');
    updateActiveColor(0);
}
function color2() { 
    document.documentElement.style.setProperty('--primary-color', '#e4af12');
    document.documentElement.style.setProperty('--primary_color', '#e4af12');
    updateActiveColor(1);
}
function color3() { 
    document.documentElement.style.setProperty('--primary-color', '#fe6f1d');
    document.documentElement.style.setProperty('--primary_color', '#fe6f1d');
    updateActiveColor(2);
}
function color4() { 
    document.documentElement.style.setProperty('--primary-color', '#14c5fd');
    document.documentElement.style.setProperty('--primary_color', '#14c5fd');
    updateActiveColor(3);
}
function color5() { 
    document.documentElement.style.setProperty('--primary-color', '#c0c0c0');
    document.documentElement.style.setProperty('--primary_color', '#c0c0c0');
    updateActiveColor(4);
}
function color6() { 
    document.documentElement.style.setProperty('--primary-color', '#1338f3');
    document.documentElement.style.setProperty('--primary_color', '#1338f3');
    updateActiveColor(5);
}
function color7() { 
    document.documentElement.style.setProperty('--primary-color', '#f31313');
    document.documentElement.style.setProperty('--primary_color', '#f31313');
    updateActiveColor(6);
}
function color8() { 
    document.documentElement.style.setProperty('--primary-color', '#ff99cc');
    document.documentElement.style.setProperty('--primary_color', '#ff99cc');
    updateActiveColor(7);
}

function updateActiveColor(index) {
    const colorBoxes = document.querySelectorAll('.color-boxed a');
    colorBoxes.forEach((box, i) => {
        if (i === index) {
            box.classList.add('clr-active');
        } else {
            box.classList.remove('clr-active');
        }
    });
}