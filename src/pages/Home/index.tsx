import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@/components/Container';
import Loader from '@/components/Loader';
import Title from '@/components/Title';
import Space from '@/components/Space';
import Row from '@/components/Row';
import Button from '@/components/Button';
import { ROUTES } from '@/constants';



const Home: React.FC = () => {
    const [isLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignIn = () => navigate(ROUTES.SIGNIN());
    const handleSignUp = () => navigate(ROUTES.SIGNUP());

    return isLoading
        ? <Loader show={isLoading} />
        : (<>
            <Container>
                <Title>SGTCC</Title>
                <Title size='h2'>Seja Bem vinde!</Title>
                <Space />
                <p>Esse é um sistema de Gerenciamento de TCC.</p>
                <Space size='x-large' />
                <Row>
                    <Button
                        onClick={handleSignUp}
                        appearance='secondary'
                    >
                        Cadastrar
                    </Button>
                    <Button
                        onClick={handleSignIn}
                    >
                        Entrar
                    </Button>
                </Row>

            </Container>
        </>);

}

export default Home;