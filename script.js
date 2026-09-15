const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const image = new Image();

image.src = "spiderman.png";

let points = [];


/* When the image is loaded */
image.onload = function () {

    canvas.width = image.width;
    canvas.height = image.height;

    /*
        Draw the original image temporarily
        so we can analyze its pixels.
    */

    ctx.drawImage(image, 0, 0);

    const imageData = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
    );

    const data = imageData.data;

    /*
        Find dark pixels.
        These pixels will become
        the drawing lines.
    */

    points = [];

    for (let y = 0; y < canvas.height; y += 2) {

        for (let x = 0; x < canvas.width; x += 2) {

            const index =
                (y * canvas.width + x) * 4;

            const red = data[index];
            const green = data[index + 1];
            const blue = data[index + 2];

            const brightness =
                (red + green + blue) / 3;

            /*
                Dark pixels are selected.
            */

            if (brightness < 100) {

                points.push({
                    x: x,
                    y: y
                });

            }
        }
    }

    /*
        Clear the canvas.
        The original image disappears.
    */

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    /*
        White background.
    */

    ctx.fillStyle = "white";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );
};


/* Start the animation */

function startDrawing() {

    if (points.length === 0) {
        alert("Image is still loading...");
        return;
    }

    /*
        Clear canvas.
    */

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.fillStyle = "white";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    /*
        Drawing style.
    */

    ctx.fillStyle = "black";

    let index = 0;


    /*
        Animation function.
    */

    function draw() {

        /*
            Draw several points
            during every frame.
        */

        for (let i = 0; i < 150; i++) {

            if (index >= points.length) {

                console.log(
                    "Spider-Man drawing completed!"
                );

                return;
            }

            const point = points[index];

            ctx.fillRect(
                point.x,
                point.y,
                2,
                2
            );

            index++;
        }

        requestAnimationFrame(draw);
    }

    draw();
        }
