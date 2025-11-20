/*
    DESCRIPCION DEL COMPONENTE "SmoothScrollbarWrapper"

    -> Este componente envuelve contenido (children) y reemplaza el scroll nativo por un scroll "suave" usando una librería externa "smooth-scrollbar". Su trabajo principal es: crear el scrollbar cuando el componente se monta, aplicarle una "inercia" (damping) y destruirlo cuando el componente se desmonta. De esta forma se obtiene desplazamiento más fluido sin tocar mucho el resto del código.

    PARA QUE SE USA?:

    -> Mejora la experiencia visual: el desplazamiento se siente más suave y con inercia, útil en interfaces con animaciones o diseño muy controlado.
    -> Centraliza la lógica del scrollbar en un solo lugar: cualquier parte de la app que use este wrapper obtiene el mismo comportamiento.
    -> Evita tener que aplicar estilos y scripts de scroll en cada componente que necesite scroll.

    COMO FUNCIONA?:

    -> Recibe props: children (contenido), style (objeto con estilos) y el resto de props.
    -> Extrae de style valores por defecto: height (por defecto "100vh"), overflow (por defecto "auto") y damping (por defecto 0.03), además del resto de estilos.
    -> Crea una referencia DOM con useRef para apuntar al elemento div que contendrá el scrollbar.
    -> En useEffect se comprueba si la referencia está lista; si lo está, se inicializa Scrollbar sobre ese div con la opción damping.
    -> Devuelve una función de limpieza que destruye el scrollbar cuando el componente se desmonta (evita fugas de memoria).
    -> Renderiza un div con la referencia, los estilos aplicados y el contenido.

    PROPS CLAVE Y SU USO:
    
    -> children: el contenido que debe ser scrollable.
    -> style: permite pasar height, overflow y damping (entre otros estilos). damping controla cuánto "frena" el movimiento — un número pequeño = más suave/inercial.
    -> ...props: cualquier otro atributo que quieras pasar al div (por ejemplo className, id, data- attrs).
*/

import { useRef, useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import styles from "./../../styles/modules/components/SmoothScrollbarWrapper.module.css";

export default function SmoothScrollbarWrapper({
    children,
    style = {},
    ...props
}) {
    const {
        height = "100vh",
        overflow = "auto",
        damping = 0.03,
        ...styleRest
    } = style;

    const wrapperRef = useRef(null);

    useEffect(() => {
        let scrollbar;
        if (wrapperRef.current) {
            scrollbar = Scrollbar.init(wrapperRef.current, { damping });
        }
        return () => {
            if (scrollbar) scrollbar.destroy();
        };
    }, [damping]);

    const appliedStyle = { height, overflow, ...styleRest };

    return (
        <div
            ref={wrapperRef}
            style={{
                ...appliedStyle,
            }}
            {...props}
            className={styles.wrapper}
        >
            {children}
        </div>
    );
}
