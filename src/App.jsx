// ====================================================================== 

// ** Importaciones **

import ViewsIndex from "./pages/ViewsIndex";
import SmoothScrollbarWrapper from "./components/global/SmoothScrollbarWrapper.jsx";

// ====================================================================== 

// ** Componente principal **

// ====================================================================== 

function App() {
    return (
        // Scrollbar suave
        <SmoothScrollbarWrapper>
            <ViewsIndex />
        </SmoothScrollbarWrapper>
    );
}

// ====================================================================== 

// ** Exportacion **

export default App;