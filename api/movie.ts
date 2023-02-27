import fetch from "node-fetch";

const { API_KEY } = process.env;

export default async function handler(req, res) {
  const { title, page, id } = JSON.parse(req.body);

  const url = id
    ? `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`
    : `https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}&page=${page}`;

  const response = await fetch(url);

  const data = await response.json();

  res.status(200).json(data);
}
