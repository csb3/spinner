let time = 100;
const characters = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];

for (const letter of characters) {
  setTimeout(() => {
    process.stdout.write(`\r${letter}   `);
  }, time);
  time += 200;
}
setTimeout(() => {
  process.stdout.write("\n");
}, time);