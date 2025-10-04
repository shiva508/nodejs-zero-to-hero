const fs = require('fs');

// Non-blocking operations
fs.readFile("./input/welcome.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("Async:",data);
    const output_text = `Hello, World! ${data}`;
    fs.writeFile("./output/hello_async.txt", output_text, (err) => {
        if (err) {
            console.error("Error writing file:", err);
            return;
        }
        console.log("Async:Output written to ./output/hello_async.txt");
    });
});

// Blocking operations
const welcome_text = fs.readFileSync("./input/welcome.txt", "utf-8");
console.log("Sync:",welcome_text);
const output_text = `Hello, World! ${welcome_text}`;
fs.writeFileSync("./output/hello.txt", output_text);
console.log("Sync: Output written to ./output/hello.txt");

