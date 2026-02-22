export default {
  async fetch(request: Request, env: any, ctx: any) {
    // Static assets will be served automatically from ./public via Wrangler assets.
    // This is a safe fallback for unmatched routes.
    return new Response("Not Found", { status: 404 });
  }
};
