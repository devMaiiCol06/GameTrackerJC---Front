// ======================================================================

// Importaciones Generales

import styles from "../../styles/modules/components/InterfaceHero.module.css";

// ======================================================================

// Componente InterfaceHero
// Props: context
// Retorna: InterfaceHero

// ======================================================================

// ** Props **
// context: string library o stats

// ======================================================================

const InterfaceHero = ({ context }) => {
    // ** Variables **

    // Contenido Hero
    const contentsHero = [
        {
            title: "Game Library",
            label: "Manage and explore your gaming collection",
            context: "library",
        },
        {
            title: "Gaming Statistics",
            label: "Comprehensive overview of your gaming journey",
            context: "stats",
        },
    ];

    // ** Renderizado **

    return (
        // Renderizar un div con la clase interfaceHeroContainer y el contenido del array contentsHero segun el contexto
        <div className={styles.interfaceHeroContainer}>
            {contentsHero
            // Filtrado de contenido segun el contexto
                .filter((cont) => context === cont.context)
                // Mapeo de contenido
                .map((cont) => (
                    <div key={cont.title}>
                        <h1>{cont.title}</h1>
                        <p>{cont.label}</p>
                    </div>
                ))}
        </div>
    );
};

// ======================================================================

// ** Exportacion **

export default InterfaceHero;
