import Image from "next/image";
import Link from "next/link";

// Define a TypeScript interface for the blog prop
interface Blog {
  title: string;
  para: string;
  src?: string; // The image source is optional
}

function Card({ blog }: { blog: any }) {
  return (
    <div className="p-4 min-h-[150px] h-max border rounded-md shadow-md">
      <Link href={`/blog/${blog.id}`} >
      
      <h1 className="text-xl font-semibold">{blog?.title}</h1>
      <Image 
        width={500}
        height={100}
        src={blog?.src || `https://picsum.photos/${200+blog?.id}/300`}
        alt={blog?.title || "Blog image"} // Adding a fallback alt text
        className="rounded-md mt-4 h-[200px] cursor-pointer object-cover" // Adding margin for spacing
      />
      <p className="mt-2">{blog?.para}</p>
      </Link>
    </div>
  );
}

export default Card;
