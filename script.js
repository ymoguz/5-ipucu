var att = 0
document.getElementById('loginForm').addEventListener('submit', function(event) {
    att += 1;
    if (att > 2) document.body.style.backgroundImage = "url('hirrrr.gif')";
    event.preventDefault();const errorMessage = document.getElementById("error-message");const _XİJkla = btoa(document.getElementById('_XİJkla').value);const _iyKhUi = btoa(document.getElementById('_iyKhUi').value);errorMessage.textContent = (_XİJkla == "c3UgeW9ndXJkdSBzYXJpbXNha2xhc2FrIGRhIG1pIHNha2xhc2Fr" && _iyKhUi == "c2FyaW1zYWtsYW1hc2FrIGRhIG1pIHNha2xhc2Fr") ? atob("aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2RyaXZlL2ZvbGRlcnMvMWE5di04bmtlTHplVGF4VlFjNUpxQURjYXJrQy1rUkNVP3VzcD1zaGFyaW5n") : atob("SW52YWxpZCB1c2VybmFtZSBvciBwYXNzd29yZC4gUGxlYXNlIHRyeSBhZ2Fpbi4=");
});
