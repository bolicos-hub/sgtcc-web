import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MANAGER as M } from "@/constants";

// const ManagerBoardNew: React.FC = () => {
//   const navigate = useNavigate();
//   const [isLoading] = useState(false);

//   return isLoading ? (
//     <Loader show={isLoading} />
//   ) : (
//     <>
//       <Container>
//         <Title>Criar Banca</Title>
//         <p>Esse é o formulário para criar uma nova Banca.</p>
//         <Space size="x-large" />
//         <Row>
//           <Input required label={"Nome"} />
//         </Row>
//         <Space />
//         <Row>
//           <Input required label={"Primeiro Professor"} />
//         </Row>
//         <Space />
//         <Row>
//           <Input required label={"Segundo Nome"} />
//         </Row>
//         <Space />
//         <Row>
//           <Button onClick={() => navigate(M.BOARDS())} appearance={"cancel"}>
//             Voltar
//           </Button>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default ManagerBoardNew;

const ManagerBoardNew: React.FC = () => {
  return <></>;
};

export default ManagerBoardNew;