var fname = null
console.log(fname)
// var fname = "sam"
// console.log(typeof(fname)) primitive data type
// const age = 23
// console.log(typeof(age))
// let status = true
// console.log(typeof(status))
// let yrs = "27years"
// console.log(typeof(yrs))
let person = {
    name:"wale", //reference data type
    age:21,
    status:true
}
// console.log(person['age'])
// let person_name = "tom"
if(person.name == 'john'){
    alert('user name found')
}else if(person.age == 21 && person.status == false){
    alert("user age matched")
}else{
    alert("unknown entry")
}