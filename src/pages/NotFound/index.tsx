import * as React from "react";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ROUTES as R } from "@/constants";

// const NotFound: React.FC = () => {
//   const navigate = useNavigate();
//   const [isLoading] = useState(false);

//   const handleBack = () => navigate(R.DASHBOARD());

//   return isLoading ? (
//     <Loader show={isLoading} />
//   ) : (
//     <>
//       <Container>
//         <Title>SGTCC</Title>
//         <Title size="h2">Página Não Encontrada!</Title>
//         <Space />
//         <p>Por favor volte a pagina inicial do sistema de Gerenciamento de TCC.</p>
//         <Space size="x-large" />
//         <Row>
//           <Button onClick={handleBack} appearance="cancel">
//             Voltar
//           </Button>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default NotFound;

const NotFound: React.FC = () => {
  return <>NOT_FOUND</>;
};

export default NotFound;
