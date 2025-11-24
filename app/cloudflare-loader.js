export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Log for debugging (check Worker logs)
    console.log("Worker received:", url.pathname);

    // Handle proxy requests
    if (url.pathname.startsWith("/proxy/")) {
      const imagePath = url.pathname.replace("/proxy", "");
      const supabaseURL = `https://afeoolopdqmqjcvsgdxc.supabase.co/storage/v1/object/public${imagePath}`;

      console.log("Fetching from Supabase:", supabaseURL);

      try {
        const response = await fetch(supabaseURL);

        // Add CORS headers
        const newResponse = new Response(response.body, response);
        newResponse.headers.set("Access-Control-Allow-Origin", "*");
        newResponse.headers.set("Cache-Control", "public, max-age=31536000");

        return newResponse;
      } catch (error) {
        return new Response("Error fetching image: " + error.message, {
          status: 500,
        });
      }
    }

    return new Response("Not a proxy request", { status: 404 });
  },
};
