

var timeleft = 15;
var downloadTimer = setInterval(function () {
  timeleft--;
  document.getElementById("countdowntimer").textContent = timeleft;
  if (timeleft <= 0) clearInterval(downloadTimer);
}, 1000);

var timelefts = 6;
var downloadTimers = setInterval(function () {
  timelefts--;
  document.getElementById("countdowntimer2").textContent = timelefts;
  if (timelefts <= 0) clearInterval(downloadTimers);
}, 1000);