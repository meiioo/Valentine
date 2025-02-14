function checkPin() {
    const correctPin = "201204"; // Set Pin Code yang benar
    const pinInput = document.getElementById("pin").value;

    if (pinInput === correctPin) {
        alert("Yeay Pin Benar!");
        // Lanjutkan ke halaman selanjutnya
        window.location.href = "success.html"; // Ganti dengan halaman tujuan setelah pin benar
    } else {
        alert("Pin Salah! Coba lagi.");
    }
}
