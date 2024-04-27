import React from 'react';
import styled from 'styled-components';

interface Props {
    languages: string[];
}

const LanguagesContainer = styled.ol`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 80%;
    border: 2px solid grey;
`;

export default function Languages({ languages }: Props) {
    return (
        <LanguagesContainer>
            {languages.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </LanguagesContainer>
    );
}
