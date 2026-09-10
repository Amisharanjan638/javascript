
//function based get and set

function User(email, password) {
 this.value = email
    this.val = password
    Object.defineProperty(this, 'email', {
        get: function() {
            return this.value.toUpperCase()
        },

        set: function(value) {
            this.value = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function() {
            return this.val.toUpperCase()
        },

        set: function(val) {
            this.val= val
        }
    })

   
}

const Amisha = new User("chai@chai.com", "chai")

console.log(Amisha.email)