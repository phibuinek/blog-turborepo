import { calculatePageNumbers } from "@/lib/helper";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  totalPages: number;
  currentPage: number;
  pageNeighbors?: number;
  className?: string;
};

const Pagination = ({
  totalPages,
  currentPage,
  pageNeighbors = 2,
  className,
}: Props) => {
  const pageNumbers = calculatePageNumbers(){
    pageNeighbors,
    currentPage,
    totalPages
  };
  return <div className="flex items-center justify-center gap-2">
    {currentPage != 1 && (<button className={cn("rounded-md py-2 px-2 bg-slate-200")}>
        <Link href={`?page=${currentPage-1}`}>
        <ChevronLeftIcon className="w-4"/>
        </Link>
        </button>
    )}

    {pageNumbers.map((page,index)=> <button key={index} className={cn("px-3 py-1 rounded-md transition hover:text-sky-600",{"bg-slate-200":currentPage != page && page != "...", "bg-blue-500 text-white": currentPage != page})}>
        <Link href={`?page=${page}`}>{page}</Link>
    </button>)}

    {currentPage != totalPages && (<button className={cn("rounded-md py-2 px-2 bg-slate-200")}><Link href={`?page=${currentPage+1}`}>
        <ChevronRightIcon className="w-4"/>
        </Link></button>)}
  </div>;
};

export default Pagination;
