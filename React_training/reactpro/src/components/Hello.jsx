function Hello({person}) {
  const {fname,lname,age,seatNumbers}=person;
  return (
    <div>I am {fname} {lname} and my age is {age}.
    My seat numbers are:{seatNumbers.filter((vals,index)=>vals>0)}
    </div>
  );
}

export default Hello;
