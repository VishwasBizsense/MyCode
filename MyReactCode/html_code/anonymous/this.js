const person={
  name:"vishwas",
  sirName:"Gandhi",
  fullName:function () {
    console.log(this.name+" "+this.sirName);
  }
};
const person1={
  name:"Narendra",
  sirName:"Modi"
};
const obj= person.fullName.bind(person1);
obj();

