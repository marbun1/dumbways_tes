const students = [
  { name: "Andi", score: 85 },
  { name: "Budi", score: 72 },
  { name: "Cici", score: 90 },
  { name: "Doni", score: 60 },
  { name: "Eka", score: 75 },
];

console.log("Dumbways Leaderboard");

const urutan = [...students].sort((a, b) => b.score - a.score);

urutan.forEach(s => {
  console.log(`${s.name} - ${s.score}`);
});


const rata_rata =
  students.reduce((total, s) => total + s.score, 0) / students.length;
console.log("\nNilai rata-rata:", rata_rata.toFixed(1));

const TOP_global = students.filter(s => s.score > rata_rata);
console.log("Siswa di atas rata-rata:");
console.log(TOP_global.map(s => s.name).join(", "));
