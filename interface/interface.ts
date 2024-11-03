interface User {
  readonly dbId: number
  email: string
  userId: number,
  googleId?: string
  // startTrail: () => string
  startTrail(): string// we can use upperone also this 

  getCoupon(couponname: string, value: number): number
}


interface User { // add a some more info or detailing 
  githubToken: string
}

interface Admin extends User {
  role: "admin" | "ta" | "learner"
}

const spider: Admin = {
  
  dbId: 22, email: "spider@com", userId: 2211, role: "admin", githubToken: "github",
  startTrail: () => {
    return "trail started "
  },
  getCoupon: (name: "sumamaxyz", off: 10) => {
    return 123
  }

}
spider.email = "spiderxyz@.com"


