import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

interface Props {
  section_number: number;
  update_section: React.Dispatch<React.SetStateAction<number>>;
  type: string;
}



const Button = styled.button`
  width: 176px;
  height: 48px;
  border: 2px solid grey;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${ 'black'};
  cursor: pointer;
`;

export default function ChangeSectionBtn({
  section_number,
  update_section,
  type,
}: Props) {
  const backgroundIn: boolean = true;

  const handleData = (): void => {
    console.log(section_number); // Corrected variable name
    if (!type) {
      console.log('No type defined');
    } else if (section_number < 0) {
      console.log('Section number cannot be less than 0');
    } else if (type === '+') {
      update_section(section_number + 1);
    } else if (type === '-') {
      update_section(section_number - 1);
    } else if (type === 's+1') {
      update_section(section_number + 1);
    } else if (type === 's-1') {
      update_section(section_number - 1);
    }
  };

  return (
    <Button onClick={handleData}>
      {type === '+' ? 'Next Section' : type === '-' ? 'Previous Section' : type === 's+1' ? 'Next Semester' : type === 's-1' ? 'Previous Semester' : ''}
    </Button>
  );
}
