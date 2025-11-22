// ====================================================================== 

// ** Componente PC **
// Props: width, height
// Retorna: img PC

// ======================================================================

const PC = (props) => {
    return (
        // Renderizar la imagen del logo de PC
        <img
            {...props}
            src="https://uxwing.com/wp-content/themes/uxwing/download/computers-mobile-hardware/monitor-color-icon.png"
            alt="PC Logo"
        />
    );
};

// ======================================================================

// ** Exportación **

export default PC;