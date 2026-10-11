// Renders src/data/profile.js to resume/resume.html, then prints public/Nathan_Studley_Resume.pdf with headless Chrome.
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { certifications, education, experience, profile, skills } from "../src/data/profile.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const htmlPath = join(root, "resume", "resume.html");
const pdfPath = join(root, "public", "Nathan_Studley_Resume.pdf");

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const jobs = experience
  .map(
    (j) => `
  <div class="job">
    <div class="row"><span class="role">${esc(j.role)} <span class="org">· ${esc(j.org)}</span></span><span class="date">${esc(j.dates)}</span></div>
    ${j.orgNote ? `<div class="note">${esc(j.orgNote)} · ${esc(j.location)}</div>` : `<div class="note">${esc(j.location)}</div>`}
    ${j.bullets.length ? `<ul>${j.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>` : ""}
  </div>`
  )
  .join("");

const skillRows = skills
  .map((g) => `<div class="skill"><b>${esc(g.group)}:</b> ${esc(g.items.join(" · "))}</div>`)
  .join("");

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>${esc(profile.name)} — Resume</title>
<style>
  @page { size: Letter; margin: 0.4in 0.5in; }
  * { box-sizing: border-box; }
  body { font-family: "Segoe UI", Inter, Arial, sans-serif; color: #18181b; font-size: 9.4pt; line-height: 1.32; margin: 0; }
  h1 { font-size: 21pt; margin: 0; letter-spacing: -0.3px; }
  .title { color: #6d28d9; font-weight: 600; font-size: 10.5pt; margin-top: 1px; }
  .contact { color: #3f3f46; font-size: 8.8pt; margin-top: 3px; }
  .contact a { color: inherit; text-decoration: none; }
  h2 { font-size: 9pt; text-transform: uppercase; letter-spacing: 1.6px; color: #6d28d9; border-bottom: 1.2px solid #ddd6fe; padding-bottom: 2px; margin: 11px 0 5px; }
  .summary { margin: 0; color: #27272a; }
  .job { margin-bottom: 7px; break-inside: avoid; }
  .row { display: flex; justify-content: space-between; gap: 12px; }
  .role { font-weight: 700; font-size: 10pt; }
  .org { font-weight: 600; color: #3f3f46; }
  .date { color: #52525b; white-space: nowrap; font-size: 8.8pt; }
  .note { color: #71717a; font-size: 8.6pt; margin-bottom: 2px; }
  ul { margin: 2px 0 0; padding-left: 15px; }
  li { margin-bottom: 1.5px; }
  .skill { margin-bottom: 2px; }
</style></head><body>
  <h1>${esc(profile.name)}</h1>
  <div class="title">${esc(profile.title)}</div>
  <div class="contact">${esc(profile.location)} · <a href="mailto:${profile.email}">${esc(profile.email)}</a> · <a href="https://${profile.site}">${esc(profile.site)}</a> · <a href="https://www.${profile.linkedin}">${esc(profile.linkedin)}</a> · <a href="https://${profile.github}">${esc(profile.github)}</a></div>
  <h2>Summary</h2>
  <p class="summary">${esc(profile.summary)}</p>
  <h2>Experience</h2>
  ${jobs}
  <h2>Skills</h2>
  ${skillRows}
  <h2>Education & Certifications</h2>
  <div class="row"><span><b>${esc(education.degree)}</b>, ${esc(education.school)}</span><span class="date">${esc(education.date)}</span></div>
  <div class="note">${esc(education.detail)}</div>
  ${certifications.map((c) => `<div class="row"><span><b>${esc(c.name)}</b></span><span class="date">${esc(c.date)}</span></div>`).join("")}
</body></html>`;

mkdirSync(dirname(htmlPath), { recursive: true });
writeFileSync(htmlPath, html);

const chromeCandidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
].filter(Boolean);
const chrome = chromeCandidates.find((p) => existsSync(p));
if (!chrome) throw new Error("Chrome not found; set CHROME_PATH");

execFileSync(chrome, [
  "--headless=new",
  "--disable-gpu",
  "--no-pdf-header-footer",
  `--print-to-pdf=${pdfPath}`,
  pathToFileURL(htmlPath).href,
]);
console.log(`wrote ${pdfPath}`);
