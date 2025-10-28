// specific ts stuff like enum NOT working with node25, only with flag 
enum Role {
    ADMIN = 0,
    READ_ONLY = 1,
    AUTHOR = 2,
}

let userRole: Role = Role.ADMIN;


// type annotation working with node25 thanks to type-stripping (ignoring types)
let myName: string = "Oliver";

myName = "Olli"

console.log("Hello from TS: " + myName);
console.log("User-Role: " + userRole);