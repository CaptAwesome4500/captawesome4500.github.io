const currentDate = new Date();

const day = currentDate.getDate();
const month = currentDate.getMonth() + 1;

//Dec. 12 & 13

if (month == 5){
  document.body.style.backgroundColor = "red";
}
