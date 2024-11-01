// api/index.js
/**
 * @typedef {import('@vercel/node').VercelResponse} VercelResponse
 * @typedef {import('@vercel/node').VercelRequest} VercelRequest
 *
 * @param {VercelRequest} request
 * @param {VercelResponse} response
 * @returns {Promise<VercelResponse>}
 * */
export default async function handler(request, response) {
  if (request.method === "POST") {
    return handlePost(request, response);
  } else {
    return response.status(405).json({ error: "Method not allowed" });
  }
}

/**
 * Handle POST requests
 * @param {VercelRequest} request
 * @param {VercelResponse} response
 * @returns {Promise<VercelResponse>}
 */
async function handlePost(request, response) {
  const { name, password } = request.body;
  if (!name || !password) {
    return response
      .status(400)
      .json({ error: "name and password are required" });
  }

  return response.status(200).json({
    status: "success",
    name: name,
    password: password,
  });
}

/**
 * Handle GET requests
 * @param {VercelRequest} request
 * @param {VercelResponse} response
 * @returns {Promise<VercelResponse>}
 */
async function handleGet(request, response) {
  console.log("host:", request.headers.host);
  return response.status(200).json({
    transaction: "TODO",
    message: "This is a GET request",
  });
}
