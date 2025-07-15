import style from "./page.module.css";
import MovieItem from "@/components/movie-item";
import { MovieData } from "@/types";

async function AllBooks(){
  const response=await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`,
    {cache:"no-store"});
    if(!response.ok){
      return <div>오류가 발생했습니다 ...</div>
    }
  
    const allMovies:MovieData[]=await response.json();

    return(
      <div>
        {allMovies.map((movie)=>(
          <MovieItem key={allMovies.id} {...movie}/>
        ))}
      </div>
    )
}

async function RecoBooks(){
  const response=await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/random`,
    {next:{revalidate:3}}
  );
    if(!response.ok){
      return <div>오류가 발생했습니다 ...</div>
    }
  
    const allMovies:MovieData[]=await response.json();

    return(
      <div>
        {allMovies.map((movie)=>(
          <MovieItem key={allMovies.id} {...movie}/>
        ))}
      </div>
    )
}


export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <RecoBooks/>
      </section>
      <section>
        <h3>등록한 모든 영화</h3>
        <AllBooks/>
      </section>
    </div>
  );
}
