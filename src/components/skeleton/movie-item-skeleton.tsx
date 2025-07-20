import style from "./movie-item-skeleton.module.css";

export default function MovieItemSkeleton({imgSize}:{imgSize:number}){
  const imgClass = imgSize === 20 ? style.img20 : style.img30;
    return (
            <div className={imgClass}></div>
    )
    
}