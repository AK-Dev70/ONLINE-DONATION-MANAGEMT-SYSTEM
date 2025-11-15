// server.js (ESM) — fixed fallback using app.use()
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets (css, images, html files) from project root
app.use(express.static(__dirname));

// Explicit routes (optional but convenient)
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
app.get("/about", (req, res) => res.sendFile(path.join(__dirname, "about.html")));
app.get("/contact", (req, res) => res.sendFile(path.join(__dirname, "contact.html")));
app.get("/donate", (req, res) => res.sendFile(path.join(__dirname, "donate.html")));
app.get("/thankyou", (req, res) => res.sendFile(path.join(__dirname, "thankyou.html")));
app.get("/payment", (req, res) => res.sendFile(path.join(__dirname, "payment.html")));
app.get("/DonationHistory", (req, res) => res.sendFile(path.join(__dirname, "DonationHistory.html")));

// Fallback: for any other request, serve index.html
// NOTE: use app.use(...) or '/*' instead of raw '*' to avoid path-to-regexp errors.
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
