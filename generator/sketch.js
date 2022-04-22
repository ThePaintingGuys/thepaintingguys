const button = document.getElementById('btn');
const number = document.getElementById('num');
const start = document.getElementById('st');

button.addEventListener('click', () => {
  console.log(` jsi kokot n ${number.value} s ${start.value}`)
  generate(number.value, start.value);
});

function setup() {}

function draw() {}

function generate(n, strt) {
  createCanvas(8, 8);
  colorMode(HSB, 360, 100, 100, 1);

  for (let i = 0; i < n; i++) {

    let shirtColor = color(random(0, 360), 100, 100);
    let skinColor = color(30, random(0, 100), 100);
    let hairColor = color(30, random(0, 100), 100);
    let bgColor = color(200, random(0, 100), 100);
  
    let img = createImage(8, 8);
    img.loadPixels();
  
    // SLUNKO
    img.set(0, 0, color(60, 90, 100));
    img.set(0, 1, color(60, 90, 100));
    img.set(1, 0, color(60, 90, 100));
    img.set(1, 1, color(60, 90, 100));
    
    // VLASY
    img.set(2, 2, hairColor);
    img.set(3, 2, hairColor);
    img.set(4, 2, hairColor);
    img.set(5, 2, hairColor);
  
    // OCI
    img.set(2, 3, color(0, 0, 0));
    img.set(5, 3, color(0, 0, 0));
    
    // OBLICEJ
    img.set(3, 3, skinColor);
    img.set(4, 3, skinColor);
    
    img.set(2, 4, skinColor);
    img.set(3, 4, skinColor);
    img.set(4, 4, skinColor);
    img.set(5, 4, skinColor);
  
    img.set(2, 5, skinColor);
    img.set(3, 5, skinColor);
    img.set(4, 5, skinColor);
    img.set(5, 5, skinColor);
    
    // TRIKO
    img.set(1, 6, shirtColor);
    img.set(2, 6, shirtColor);
    img.set(3, 6, shirtColor);
    img.set(4, 6, shirtColor);
    img.set(5, 6, shirtColor);
    img.set(6, 6, shirtColor);
    
    img.set(0, 7, shirtColor);
    img.set(1, 7, shirtColor);
    img.set(2, 7, shirtColor);
    img.set(3, 7, shirtColor);
    img.set(4, 7, shirtColor);
    img.set(5, 7, shirtColor);
    img.set(6, 7, shirtColor);
    img.set(7, 7, shirtColor);
    
    // POZADI
    img.set(2, 0, bgColor);
    img.set(3, 0, bgColor);
    img.set(4, 0, bgColor);
    img.set(5, 0, bgColor);
    img.set(6, 0, bgColor);
    img.set(7, 0, bgColor);
    
    img.set(2, 1, bgColor);
    img.set(3, 1, bgColor);
    img.set(4, 1, bgColor);
    img.set(5, 1, bgColor);
    img.set(6, 1, bgColor);
    img.set(7, 1, bgColor);

    img.set(0, 2, bgColor);
    img.set(0, 3, bgColor);
    img.set(0, 4, bgColor);
    img.set(0, 5, bgColor);
    img.set(0, 6, bgColor);
    img.set(1, 2, bgColor);
    img.set(1, 3, bgColor);
    img.set(1, 4, bgColor);
    img.set(1, 5, bgColor);

    img.set(7, 2, bgColor);
    img.set(7, 3, bgColor);
    img.set(7, 4, bgColor);
    img.set(7, 5, bgColor);
    img.set(7, 6, bgColor);
    img.set(6, 2, bgColor);
    img.set(6, 3, bgColor);
    img.set(6, 4, bgColor);
    img.set(6, 5, bgColor);

  
  
    img.updatePixels();
    image(img, 0, 0, 8, 8);
    let n = i + Number(strt)
    img.save(`paintingguy${n}`, 'jpg');
  }
}