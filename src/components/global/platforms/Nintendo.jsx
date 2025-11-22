// ====================================================================== 

// Componente Nintendo: 
// Props: width, height
// Retorna: img Nintendo

// ======================================================================

const Nintendo = ({ width, height }) => {
    return (
        // Renderizar la imagen del logo de Nintendo
        <img
            width={width}
            height={height}
            src="https://wp.logos-download.com/wp-content/uploads/2021/02/Nintendo_Switch_Logo.svg?dl"
        />
    );
};

// ====================================================================== 

// ** Exportación **

export default Nintendo;
