// app/page.jsx
import Link from "next/link";
import Portada2 from "@/app/(public)/portada2/page";
import Catalogo from "@/app/(public)/catalogo/page";
import footer from "@/app/(public)/footer/page";



export default function Home() {


    return (
        <main>
            <Portada2></Portada2>

<Catalogo></Catalogo>



        </main>
    );
}