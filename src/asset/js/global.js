// // Set the date we're counting down to (10 days from now at 00:00)
// const countDownDate = new Date();
// countDownDate.setDate(countDownDate.getDate() + 10);
// countDownDate.setHours(0, 0, 0, 0); // Set to 00:00 of the 10th day

// // Update the countdown every 1 second
// const x = setInterval(function () {
//   // Get the current time
//   const now = new Date().getTime();
//   // Calculate the remaining time
//   const distance = countDownDate.getTime() - now;

//   // Time calculations
//   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   const totalHours = Math.floor(distance / (1000 * 60 * 60));
//   const hours = totalHours % 24;
//   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Update the HTML content
//   document.getElementById("days").innerHTML = days.toString().padStart(2, "0");
//   document.getElementById("hours").innerHTML = hours.toString().padStart(2, "0");
//   document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, "0");
//   document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, "0");

//   // If the countdown is over, display a message
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("days").innerHTML = "00";
//     document.getElementById("hours").innerHTML = "00";
//     document.getElementById("minutes").innerHTML = "00";
//     document.getElementById("seconds").innerHTML = "00";
//   }
// }, 1000);
