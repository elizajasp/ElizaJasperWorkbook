function setup() {
    createCanvas (1000,1000);
    background(66, 114, 240);
    }
    function draw() {
    fill(300);
    circle(600,350, 600);
    fill(153, 76, 0);
    triangle (650, 250, 750, 300, 850, 260);
    fill(153, 76, 0);
    triangle (600, 250, 500, 300, 400, 260);
    fill(1, 1, 1);
    circle (600, 500, 150, 60);
    fill(235, 40, 50);
    triangle (630, 250, 650, 410, 600, 400);
    circle(mouseX, mouseY, 50);
    }