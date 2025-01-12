import { exec } from "child_process";

const command = `find . \\( -name "node_modules" -o -name ".next" -o -name ".turbo" \\) -type d -prune -exec rm -rf '{}' + && pnpm i`;

console.log("🧽 Running cleanup and reinstall...");
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Error: ${stderr}`);
  }
  console.log(stdout);
});
