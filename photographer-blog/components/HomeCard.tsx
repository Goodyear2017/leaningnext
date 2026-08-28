import Link from "next/link";
import Image from "next/image";

type HomeCardProps = {
    title: string;
    desc: string;
    buttonText: string;
    href: string;
    imageUrl: string;
    aria: string
};

export default function HomeCard({title, desc, buttonText, href, imageUrl, aria}: HomeCardProps) {
    return (
        <article className="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition gap-4 p-4">
            <div className="relative h-48 bg-gray-50 flex justify-center items-center z-10">
               <div className="relative w-[70%] h-[70%]">
                    <Image
                        src={imageUrl}
                        alt=""
                        className="object-contain " 
                        fill

                    />
                </div>
                
            </div>
           
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="flex-1 ">{desc}</p>
            <Link href={href} aria-label={aria} className="blueButton">{buttonText}</Link>
        </article>
    )
    
}