function View(cube, controller, solver) {

    var isExploded = false;
    var isPrime = false;

    document.getElementById("button_explode").addEventListener('click', function () {
        if(isExploded) {
            isExploded = false;
            document.getElementById("button_explode").style.opacity = 0.4;
            document.getElementById("button_scramble").style.opacity = 1;
            document.getElementById("button_solve").style.opacity = 1;
        }
        else {
            isExploded = true;
            document.getElementById("button_explode").style.opacity = 1;
            document.getElementById("button_scramble").style.opacity = 0.4;
            document.getElementById("button_solve").style.opacity = 0.4;
        }

        cube.explodedView();
    });
    document.getElementById("button_scramble").addEventListener('click', function () {
        if(!isExploded) {
            var strSquence = "";
            controller.scramble(20).forEach(function(move) {
                strSquence += move + " ";
            });

            document.getElementById("sequence_display").innerHTML =
                "Scramble sequence :<br>" +
                strSquence
            ;
        }
    });
    document.getElementById("button_solve").addEventListener('click', function () {
        if(!isExploded) {
            var strSquence = "";
            solver.solve().forEach(function(move) {
                strSquence += move + " ";
            });

            document.getElementById("sequence_display").innerHTML =
                "Resolve sequence :<br>" +
                strSquence
            ;
        }
    });
    document.getElementById("button_left").addEventListener('click', function () {
        controller.turnLeft();
    });
    document.getElementById("button_leftprime").addEventListener('click', function () {
        controller.turnLeftReverse();
    });
    document.getElementById("button_right").addEventListener('click', function () {
        controller.turnRight();
    });
    document.getElementById("button_rightprime").addEventListener('click', function () {
        controller.turnRightReverse();
    });
    document.getElementById("button_up").addEventListener('click', function () {
        controller.turnUp();
    });
    document.getElementById("button_upprime").addEventListener('click', function () {
        controller.turnUpReverse();
    });
    document.getElementById("button_front").addEventListener('click', function () {
        controller.turnFront();
    });
    document.getElementById("button_frontprime").addEventListener('click', function () {
        controller.turnFrontReverse();
    });
    document.getElementById("button_down").addEventListener('click', function () {
        controller.turnDown();
    });
    document.getElementById("button_downprime").addEventListener('click', function () {
        controller.turnDownReverse();
    });
    document.getElementById("button_back").addEventListener('click', function () {
        controller.turnBack();
    });
    document.getElementById("button_backprime").addEventListener('click', function () {
        controller.turnBackReverse();
    });

    document.getElementById("slider_speed").addEventListener('input', function(evt){
        cube.setSpeed(this.value);
    });

    window.addEventListener('keydown', function(evt) {
        console.log(evt.keyCode);
        switch(evt.keyCode) {

            case 32:            // Space
                isPrime = true;
                break;

            case 66:            // Back
                isPrime ? controller.turnBackReverse() : controller.turnBack();
                break;
            case 68:            // Down
                isPrime ? controller.turnDownReverse() : controller.turnDown();
                break;
            case 70:            // Front
                isPrime ? controller.turnFrontReverse() : controller.turnFront();
                break;
            case 76:            // Left
                isPrime ? controller.turnLeftReverse() : controller.turnLeft();
                break;
            case 82:            // Right
                isPrime ? controller.turnRightReverse() : controller.turnRight();
                break;
            case 85:            // Up
                isPrime ? controller.turnUpReverse() : controller.turnUp();
                break;
        }
    });
    window.addEventListener('keyup', function(evt) {
        console.log(evt.keyCode);
        switch(evt.keyCode) {

            case 32:            // Space
                isPrime = false;
                break;
        }
    });
}