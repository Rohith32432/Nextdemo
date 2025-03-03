import { posts } from "@/app/data/data"
import Image from "next/image"

export default async function indivudalblog({ params }: { params: Promise<{ blogid: number }> }) {

const {blogid}=await params
const blog=posts.find(e=> e?.id==blogid)
    return (
    <>
     <h1 className="text-xl font-semibold">{blog?.title}</h1>
          <Image 
            width={500}
            height={100}
            src={ `https://picsum.photos/${200+5}/300`}
            alt={blog?.title || "Blog image"} // Adding a fallback alt text
            className="rounded-md mt-4 h-[200px] cursor-pointer object-cover" // Adding margin for spacing
          />
          <p className="mt-2">{blog?.para}</p>
    </>
)
}