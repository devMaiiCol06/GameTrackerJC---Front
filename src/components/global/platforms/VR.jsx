// ====================================================================== 

// ** Componente VR **
// Props: width, height
// Retorna: img VR

// ======================================================================

const VR = (props) => {
    return (
        // Renderizar la imagen del logo de VR
        <img
            {...props}
            src="https://cdn.freebiesupply.com/logos/large/2x/vr-1-logo-svg-vector.svg"
            alt="VR Logo"
        />
    );
};

// ======================================================================

// ** Exportación **

export default VR;