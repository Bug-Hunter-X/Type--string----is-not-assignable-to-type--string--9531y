function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Alice", "Bob"];

for (let i = 0; i < user.length; i++) {
  console.log(greeter(user[i])); // fix
}
//Alternative solution
function greeterArray(people: string[]): string {
  return people.map(person => "Hello, " + person).join(", ");
}

console.log(greeterArray(user)); // fix