import style from "./page.module.css";
import MovieItem from "@/components/movie-item";
import MovieListSkeleton from "@/components/skeleton/movie-list-skeleton";
import { MovieData } from "@/types";
import { Suspense } from "react";
import { delay } from "../util/delay";

async function AllMovies(){
  await delay(1500);
  const response=await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`,
    {cache:"force-cache"});
    if(!response.ok){
      return <div>오류가 발생했습니다 ...</div>
    }
  
    const allMovies:MovieData[]=await response.json();

    return(
      <div>
        {allMovies.map((movie)=>(
          <MovieItem key={movie.id} {...movie} imgSize={"20"}/>
        ))}
      </div>
    )
}

async function RecoMovies(){
  await delay(3000);
  const response=await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/random`,
    {next:{revalidate:3}}
  );
    if(!response.ok){
      return <div>오류가 발생했습니다 ...</div>
    }
  
    const recoMovies:MovieData[]=await response.json();

    return(
      <div>
        {recoMovies.map((movie)=>(
          <MovieItem key={movie.id} {...movie} imgSize={"30"}/>
        ))}
      </div>
    )
}


export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <Suspense fallback={<MovieListSkeleton count={3} imgsize={30}/>}>
          <RecoMovies/>
        </Suspense>
      </section>
      <section>
        <h3>등록한 모든 영화</h3>
        <Suspense fallback={<MovieListSkeleton count={10} imgsize={20}/>}>
          <AllMovies/>
        </Suspense>
      </section>
    </div>
  );
}
