import { AxiosError } from "axios";

export const generateError = (exception: AxiosError) => {
    console.error(`ERROR on FETCH = ${exception}`);
    console.warn(`MESSAGE => ${exception.message}`);
    console.warn(`CAUSE => ${exception.cause}`);
    console.warn(`STATUS => ${exception.status}`);
};