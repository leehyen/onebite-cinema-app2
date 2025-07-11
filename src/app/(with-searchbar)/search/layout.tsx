"use client"
import { ReactNode, useEffect, useState } from "react";
import Searchbar from "./page"
import { useRouter,useSearchParams } from "next/navigation";

export default function Layout({
  children
}:{
  children:ReactNode;
}){
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search,setSearch]=useState("");
  const q = searchParams.get("q"); 
  

  const onChangeSearch=(e:React.ChangeEvent<HTMLInputElement>)=>{
      setSearch(e.target.value);
  };
      
  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };
  return(
    <div>
        <input
          value={search}
          onKeyDown={onKeyDown}
          onChange={onChangeSearch}
          placeholder="검색어를 입력하세요 ..."
        />
        <button onClick={onSubmit}>검색</button>
        {children}
    </div>
  )
}