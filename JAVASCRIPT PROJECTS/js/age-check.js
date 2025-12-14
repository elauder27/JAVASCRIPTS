const isHoliday = true;
let childAge = 6;
let adultAge = 65;

if ((childAge <= 6 && adultAge <= 65) || !isHoliday) {
  console.log("Discount is available");
} else {
  console.log("sorry, you do not qualify for a discount");
}
