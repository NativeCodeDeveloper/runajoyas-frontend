"use client"
import Carrusel from '@/Componentes/Carrusel';
import NavBarFemenino from '@/Componentes/NavBarFemenino';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState,useEffect} from "react";
import {Navbar} from "react-bootstrap";


export default function Portada() {
    const [publicacion, setPublicacion] = useState([]);

    const API = process.env.NEXT_PUBLIC_API_URL;

        async function listarCarrusel() {
        try {
            const res = await fetch(`${API}/publicaciones/seleccionarPublicaciones`, {
                method: "GET",
                headers: {Accept: "application/json"},
                mode: "cors"
            })

            if(!res.ok){
                throw new Error("No se ha podido obtener publicaciones desde el servidor, contacte a soporte de NativeCode.cl");
            }
           const dataPublicaciones = await res.json();
            setPublicacion(dataPublicaciones[0]);

        }catch (error) {
            console.log(error);
        }
    }





    useEffect(() => {
        listarCarrusel()
    }, []);



    return(
        <div>

            <section className="mt-14 relative w-full overflow-hidden">
                <div className="w-full ">
                    {publicacion && (
                        <Carrusel

                            imagen1={`https://imagedelivery.net/aCBUhLfqUcxA2yhIBn1fNQ/${publicacion.imagenPublicaciones_primera}/portada`}

                            imagen2={
                                publicacion.imagenPublicaciones_segunda
                                    ? `https://imagedelivery.net/aCBUhLfqUcxA2yhIBn1fNQ/${publicacion.imagenPublicaciones_segunda}/portada`
                                    : `https://imagedelivery.net/aCBUhLfqUcxA2yhIBn1fNQ/${publicacion.imagenPublicaciones_primera}/portada`
                            }

                            imagen3={
                                publicacion.imagenPublicaciones_tercera
                                    ? `https://imagedelivery.net/aCBUhLfqUcxA2yhIBn1fNQ/${publicacion.imagenPublicaciones_tercera}/portada`
                                    : `https://imagedelivery.net/aCBUhLfqUcxA2yhIBn1fNQ/${publicacion.imagenPublicaciones_primera}/portada`
                            }
                        />
                    )}
                </div>
            </section>
        </div>
    )
}