// ====================================================================== 

// ** Componente Smartphone **
// Props: width, height
// Retorna: img Smartphone

// ======================================================================

const Smartphone = (props) => {
    return (
        // Renderizar la imagen del logo de Smartphone
        <img
            {...props}
            src="https://images.vexels.com/media/users/3/208476/isolated/preview/4c2a67b8c8fbf754b795febf869c55a2-smartphone-device-illustration.png"
            alt="Smartphone Logo"
        />
    );
};

// ======================================================================

// ** Exportación **

export default Smartphone;