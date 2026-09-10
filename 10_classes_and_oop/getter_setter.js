class User {
    constructor(email,password){
        this.email=email
        this.password=password

    }

    get email(){
        return this.value.toUpperCase()
    }

    set email(value){
        this.value = value
    }

get password(){
    //return this.value.toUpperCase()
    return `${this.value}Amisha`
}

set password(value){
    this.value = value// Maximum call stack size exceeded
}
}

  
const Amisha = new User("a@amisha.ai","abc")
console.log(Amisha.password)
console.log(Amisha.email)