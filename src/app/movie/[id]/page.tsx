
import notFound from "@/app/not-found";
import style from "./page.module.css";
import { ReviewData } from "@/types";
import ReviewItem from "@/components/review-item";
import ReviewEditor from "@/components/review-editor";

export function generateStaticParams(){
  return [{id:"1"},{id:"2"},{id:"3"}]
}
async function MovieDetail({movieId}:{movieId:string}){
  const response=await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/${movieId}`
  );
  if(!response.ok){
    if(response.status===404){
      notFound();
    }
    return <div>오류가 발생했습니다...</div>;
  }
  const movie=await response.json();

  const {title,releaseDate,company,genres,subTitle,description,runtime,posterImgUrl,}=movie;
  return (
    <div className={style.container}>
      <div 
            className={style.cover_img_container} 
            style={{backgroundImage:`url('${posterImgUrl}')`}}>
            <img src={posterImgUrl}/>
        </div>

        <div className={style.title} >{title}</div>
        <div className={style.memo} >{releaseDate} / {genres} / {runtime}</div>
        <div className={style.company} >{company}</div>
        <div className={style.subTitle} >{subTitle}</div>
        <div className={style.description} >{description}</div>
    </div>
  );
}
async function ReviewList({movieId}:{movieId:string}){
  const response=await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/movie/${movieId}`
  );
  if(!response.ok){
    throw new Error(`Review fetch failed:${response.statusText}`);
  }
  const reviews: ReviewData[]=await response.json();
  return (
    <section>
      {reviews.map((review)=>(
        <ReviewItem key={`review-items-${review.id}`} {...review}/>
      ))}  
    </section>
  );
}

export default function Page({params,}: {params: {id: string}}) {
  return (
  <div className={style.container}>
    <MovieDetail movieId={params.id}/>
    <ReviewEditor movieId={params.id}/>
    <ReviewList movieId={params.id}/>
  </div>
  )
}