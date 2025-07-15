import { ReactNode } from "react";
import Searchbar from "./page"

export default function Layout({
  children
}:{
  children:ReactNode;
}){
  return(
    <div>
      {children}
    </div>
  )
}