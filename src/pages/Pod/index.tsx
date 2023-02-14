import React from 'react';
import { useQuery } from 'react-query';

function Collection() {

    // Fetch collection data (response will be mocked)
    const fetchCollection = async () => {
        const res = await fetch('http://mock-server/collection/test');
        return res.json();
    };
    const collection = useQuery('collection', fetchCollection);

    // Collection data will be accessible 
    // here, using the mock server.
    // To manipulate this reponse object,
    // change ./src/mocks/handlers/collection.ts
    console.log('#############');
    console.log(collection.data);
    console.log('#############');

    return (
        <p>
            {`<Collection page here />`}
        </p>
    );
}

export default Collection;
