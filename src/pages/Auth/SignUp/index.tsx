import React, { useState } from 'react'
import Container from '@/components/Container';
import Loader from '@/components/Loader';


const SignUp: React.FC = () => {
    const [isLoading] = useState(false);

    return isLoading
        ? <Loader show={isLoading} />
        : (<>
            <Container>
                {"SIGN_UP"}
            </Container>
        </>);
}

export default SignUp;