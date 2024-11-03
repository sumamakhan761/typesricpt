console.log("helllo world"); /// terminal go type tsc -W so that that come to index .js in the dir of dist 

// class User {
//   public email : string
//   public name : string 
//   readonly city : string = "Mumbai"

//   constructor(email: string , name : string){
//     this.email = email
//     this.name = name
//   }
// }

class User {

  protected _courseCount = 1 // protected means that we can use only function or say in the diff classes not the above

  readonly city: string = "Mumbai"
  constructor(
    public email: string,
    public name: string,
    // private userId: string
  ) {
  }

  private deleteToken() {
    console.log("Token deleted");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`
  }

  get courseCount(): number {
    return this._courseCount
  }

  set courseCount(courseNum){
    if(courseNum <= 1){
      throw new Error ("Course count should be more than 1")
    }

    this._courseCount = courseNum
  }
}

class SubUser extends User {
  isFamily: boolean = true
  changeCourseCount(){
      this._courseCount = 4// if private so we can't  use bcz private use only on over class not at all 
  }
}
const sumama = new User("sumama@.com", "sumama")

sumama.name // we access it bcz this is public

// sumama.deleteToken()// this give error bcz deletetoken is private if its a protected also give error we can't use this out of the classes
