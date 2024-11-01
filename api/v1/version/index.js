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
  if (request.method === "GET") {
    return handleGet(request, response);
  } else {
    return response.status(405).json({ error: "Method not allowed" });
  }
}

/**
 * Handle GET requests
 * @param {VercelRequest} request
 * @param {VercelResponse} response
 * @returns {Promise<VercelResponse>}
 */
async function handleGet(request, response) {
  return response.status(200).json({
    method: request.method,
    version: "v1",
  });
}
