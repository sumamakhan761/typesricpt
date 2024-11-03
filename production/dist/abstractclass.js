"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //some complex calculation
        return 8;
    }
}
class instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter); // calling a parents 
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const sm = new instagram("test", "Test", 3);
sm.getReelTime();
