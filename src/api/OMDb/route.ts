import { NextResponse } from "next/server";

export async function GET(req: Request) {
const API_KEY = "e1051f59";
  const query = "matrix";
  const movies = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
  ).then((res) => res.json());

  return NextResponse.json(movies);
}
