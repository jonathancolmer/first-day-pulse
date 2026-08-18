import { cp, mkdir, rm, writeFile } from "node:fs/promises";

const fields = {
  apiKey: "FIREBASE_API_KEY",
  authDomain: "FIREBASE_AUTH_DOMAIN",
  databaseURL: "FIREBASE_DATABASE_URL",
  projectId: "FIREBASE_PROJECT_ID",
  storageBucket: "FIREBASE_STORAGE_BUCKET",
  messagingSenderId: "FIREBASE_MESSAGING_SENDER_ID",
  appId: "FIREBASE_APP_ID"
};

const firebaseConfig = {};
for (const [field, environmentName] of Object.entries(fields)) {
  const value = process.env[environmentName];
  if (!value) throw new Error(`Missing required environment variable: ${environmentName}`);
  firebaseConfig[field] = value;
}

const outputDirectory = new URL("../_site/", import.meta.url);
await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });

for (const filename of ["index.html", "styles.css", "app.js", ".nojekyll"]) {
  await cp(new URL(`../${filename}`, import.meta.url), new URL(filename, outputDirectory));
}

const browserConfig = `window.FIRST_DAY_PULSE_FIREBASE_CONFIG = Object.freeze(${JSON.stringify(firebaseConfig, null, 2)});\n`;
await writeFile(new URL("firebase-config.js", outputDirectory), browserConfig, "utf8");

console.log("GitHub Pages artifact prepared in _site.");
