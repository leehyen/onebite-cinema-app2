import { delay } from "@/app/util/delay";
import MovieItem from "@/components/movie-item";
import { MovieData } from "@/types";

export default async function Page({
  searchParams,
}:{
  searchParams:  { q?: string };
}) {

  await delay(1500);
  const response=await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/search?q=${searchParams.q}`,
    {cache:"force-cache"}
  )
  if(!response.ok){
    return <div>오류가 발생했습니다...</div>
  }
  const movies:MovieData[]=await response.json();

  return (
    <div>
      {movies.map((movie) => (
      <MovieItem key={movie.id} {...movie} />
    ))}
    </div>
  );
}