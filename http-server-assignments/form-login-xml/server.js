const http = require("http");
const fs = require("fs");
const path = require("path");
const querystring = require("querystring");

const usersFilePath = path.join(__dirname, "users.csv");

const hashPassword = (password) => {
  return password
    .split("")
    .map((char) => (char.charCodeAt(0) % 16) + 55)
    .join("");
};

const parseCSV = (data) => {
  const lines = data.split("\n").filter((line) => line.trim() !== "");
  return lines.map((line) => {
    const [username, password, name, surname, role] = line.split(",");
    return { username, password, name, surname, role };
  });
};

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/login") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const { username, password } = querystring.parse(body);
      const hashedPassword = hashPassword(password);

      fs.readFile(usersFilePath, "utf-8", (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Internal Server Error");
          return;
        }

        const users = parseCSV(data);
        const user = users.find(
          (user) =>
            user.username === username && user.password === hashedPassword
        );

        const now = new Date();
        const response = {
          success: !!user,
          timestamp: now.toISOString(),
          user: user
            ? {
                username: user.username,
                name: user.name,
                surname: user.surname,
                role: user.role,
              }
            : { username },
        };

        res.writeHead(200, { "Content-Type": "application/xml" });
        res.end(`
          <response>
            <success>${response.success}</success>
            <timestamp>${response.timestamp}</timestamp>
            <user>
              <username>${response.user.username}</username>
              ${response.user.name ? `<name>${response.user.name}</name>` : ""}
              ${
                response.user.surname
                  ? `<surname>${response.user.surname}</surname>`
                  : ""
              }
              ${response.user.role ? `<role>${response.user.role}</role>` : ""}
            </user>
          </response>
        `);
      });
    });
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method Not Allowed");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
