import index from "./web.html";

Bun.serve({
  port: 3457,
  routes: {
    "/": index,
  },
  development: {
    hmr: true,
    console: true,
  },
});

console.log("Web preview running at http://100.64.0.2:3457");
