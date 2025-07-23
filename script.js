const form = document.getElementById('cabBookingForm');
const confirmation = document.getElementById('confirmation');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  document.querySelectorAll('.error').forEach(e => e.style.display = 'none');
  let hasError = false;

  if (!form.name.value.trim()) {
    document.getElementById('nameError').style.display = 'block';
    hasError = true;
  }
  if (!form.phone.value.match(/^[0-9]{10}$/)) {
    document.getElementById('phoneError').style.display = 'block';
    hasError = true;
  }
  if (!form.pickup.value.trim()) {
    document.getElementById('pickupError').style.display = 'block';
    hasError = true;
  }
  if (!form.drop.value.trim()) {
    document.getElementById('dropError').style.display = 'block';
    hasError = true;
  }
  if (!form.cabType.value) {
    document.getElementById('cabTypeError').style.display = 'block';
    hasError = true;
  }
  if (!form.date.value) {
    document.getElementById('dateError').style.display = 'block';
    hasError = true;
  }
  if (!form.time.value) {
    document.getElementById('timeError').style.display = 'block';
    hasError = true;
  }

  if (hasError) return;

  confirmation.className = "confirmation success";
  confirmation.innerHTML = `
    <strong>Booking Confirmed!</strong><br>
    Thank you, <span style="color: #ffffffff;">${form.name.value}</span>.<br>
    Your <span style="color: #ffffffff;">${form.cabType.value}</span> cab is booked from <span style="color: #ffffffff;">${form.pickup.value}</span>
    to <span style="color: #ffffffff;">${form.drop.value}</span> on
    <span style="color: #ffffffff;">${form.date.value}</span> at
    <span style="color: #ffffffff;">${form.time.value}</span>.
  `;
  confirmation.style.display = "block";
  form.reset();
});
