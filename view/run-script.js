import { exec } from "child_process";

const runCommand = () => {
  exec("nid -p telecom-mas-agent -n 1000 -m 300 -t 3000", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }
    console.log(`Output: ${stdout}`);
  });
};

const runInIterations = async () => {
  for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i + 1}`);
    runCommand();
    await new Promise((resolve) => setTimeout(resolve, 60000)); // Wait for 1 minute
  }
};

runInIterations();