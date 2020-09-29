const src = document.getElementById('text-mejik')

// Write to HTML
const writeToHtml = (req) => {
  // Saya manemukan kalau value kebaca kalau pake textarea, somehow.
  src.value = req;
}

// Huruf Kapital di awal aja gan
const sentenceCase = (src) => {
  let res = src.value.toLowerCase().replace(/[a-z]/i, (letter) => {
    return letter.toUpperCase();
  }).trim();
  writeToHtml(res);
}

// huruf kecil
const kecil = (src) => {
  let res = src.value.toLowerCase();
  writeToHtml(res);
};

// HURUF KAPITAL
const ngamok = (src) => {
  let res = src.value.toUpperCase();
  writeToHtml(res);
};

// Hutuf Kapital di tiap kata gan
const titleCase = (src) => {
  let res = src.value.toLowerCase().split(' ').map((word) => {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
  writeToHtml(res);
}

// Alternating Text
const swapCase = (src) => {
  // Kalau genap jadiin kecil, kalo ganjil jadiin gede
  let res = src.value.split('').map((c, i) =>
    i % 2 == 0 ? c.toLowerCase() : c.toUpperCase()
  ).join('');
  writeToHtml(res);
}

// Kebalik gan
const reverseCase = (src) => {
  let res = src.value.toString().split("").reverse().join("");
  writeToHtml(res);
}

// Copy to Clipboard
const copyToClipboard = (src) => {
  src.select();
  src.setSelectionRange(0, 99999); // Untuk mobile

  document.execCommand("copy"); // Salin

  alert("Teks telah tersalin ke Clipboard");
}

// Clear Text
const clearText = (src) => src.value="";