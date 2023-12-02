type User = {
   readonly _id :string
    name:string
    email:string
    isActive:boolean

}

type a ={

    name: string

}

type b ={
    dob:string
}

type c & a & b ={
    bbb: number

}


let myUser :User = {

    _id : "12345",
    name:"umanah",
    email: "h@h.com",
    isActive:false

}

//myUser._id = "1234" this would return an error because it was marked as read only
// hence the operatopn is not allowed 
// @Param[]

export {}