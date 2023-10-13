import fs from "fs";

const config = ({ path = ".env" } = {}) => {
  try {
    const env = fs.readFileSync(path, { encoding: "utf-8" });

    const lines = env.split("\n");

    lines.forEach((line) => {
      if (line && !line.startsWith("#")) {
        const [key, ...value] = line.split("=");
        process.env[key] = value.join("=");
      }
    });
  } catch (_) {
    console.error(`No .env file found in ${path}`);
  }
};

const dotenv = {
  config,
};

export default dotenv;
