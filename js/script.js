console.log("Saumi Yahya");
let input = document.getElementById("input-suhu");

// fungsi konversi
function konversi() {
  let suhu = parseFloat(input.value); // mengubah string input menjadi angka
  let hasil = (suhu * 9) / 5 + 32;
  document.getElementById("output-suhu").value = hasil;
  //   Menampilkan penjelasan konversi
  document.getElementById(
    "detail-suhu"
  ).innerHTML = `${suhu}&deg;C * 9/5 + 32 = ${hasil}&deg;F`;
}

// Menghapus input, output, penjelasan
function hapus() {
  input.value = "";
  document.getElementById("output-suhu").value = "";
  document.getElementById("detail-suhu").innerHTML = "";
}
