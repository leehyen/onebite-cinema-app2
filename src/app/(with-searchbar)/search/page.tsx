"use client";
import { useSearchParams ,useRouter} from "next/navigation";

export default function Page(){
    const router=useRouter();
      const searchParams = useSearchParams();
      const q = searchParams.get("q");
 
    return <div>Search Layout :{q}</div>
}