
 <script>
const countdown = () => {
  const eventDate = new Date("April 27, 2025 09:00:00").getTime();
  const now = new Date().getTime();
  const gap = eventDate - now;

  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);
  }

  document.getElementById("countdown").innerHTML =
    `${d}d ${h}h ${m}m ${s}s`;

  if (gap < 0) {
    document.getElementById("countdown").innerHTML = "The event has begun!";
  }


setInterval(countdown, 1000);
</script>