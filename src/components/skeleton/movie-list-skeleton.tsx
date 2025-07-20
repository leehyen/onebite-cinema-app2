import MovieItemSkeleton from "./movie-item-skeleton";

export default function MovieListSkeleton({count,imgsize,}:{count:number,imgsize:number;}){
    
    return (
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: '10'
    }}>
      { new Array(count).fill(0).map((_,idx)=>(
        <MovieItemSkeleton key={`movie-item-skeleton-${idx}`} imgSize={imgsize}/>  
    ))}
    </div>
  );
}