abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string
  ) { }

  abstract getSepia(): void
  getReelTime(): number {
    //some complex calculation
    return 8
  }
}

class instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter)// calling a parents 
  }

  getSepia(): void {
    console.log("Sepia");
  }
}

const sm = new instagram ("test" , "Test" , 3)

sm.getReelTime()