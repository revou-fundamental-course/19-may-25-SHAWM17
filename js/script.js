console.log("Saumi Yahya");
let input = document.getElementById("input-suhu");
let mode = "CtoF"; // Mode default adalah C ke F

// fungsi konversi
function konversi() {
  let suhu = parseFloat(input.value); // mengubah string input menjadi angka
  let hasil;
  if (mode === "CtoF") {
    hasil = (suhu * 9) / 5 + 32;
    document.getElementById("output-suhu").value = hasil;
    //   Menampilkan penjelasan konversi
    document.getElementById(
      "detail-suhu"
    ).innerHTML = `${suhu}&deg;C * 9/5 + 32 = ${hasil}&deg;F`;
  } else {
    hasil = ((suhu - 32) * 5) / 9;
    document.getElementById("output-suhu").value = hasil;
    //   Menampilkan penjelasan konversi
    document.getElementById(
      "detail-suhu"
    ).innerHTML = `${suhu}&deg;F - 32 * 5/9 = ${hasil}&deg;C`;
  }
}

// Menghapus input, output, penjelasan
function hapus() {
  input.value = "";
  document.getElementById("output-suhu").value = "";
  document.getElementById("detail-suhu").innerHTML = "";
}

function reverse() {
  mode = mode === "CtoF" ? "FtoC" : "CtoF";

  // update label UI
  document.getElementById("input-label").innerHTML =
    mode === "CtoF" ? "Celcius (&deg;C)" : "Fahrenheit (&deg;F)";
  document.getElementById("output-label").innerHTML =
    mode === "CtoF" ? "Fahrenheit (&deg;F)" : "Celcius (&deg;C)";

  // Mengosongkan input, output, penjelasan
  hapus();
}
