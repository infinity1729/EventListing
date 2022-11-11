import React from 'react';
import styled from 'styled-components';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { lightBlue, blue } from '@mui/material/colors';

function ClubList() {

    const list = [
        "CC","AI CLUB","FEC"
    ];

  return (
    <Container>
        {list.map( (club) => {
            return (
                <SFormGroup>
                    <FormControlLabel control={
                    <Checkbox defaultChecked  
                    sx={
                        { '& .MuiSvgIcon-root': { fontSize: 40 } ,
                        color: lightBlue[400],
                        '&.Mui-checked': {
                            color: lightBlue[300],
                        },
                    }
                    } />
                    } label={club}/>
                </SFormGroup>
            );
        })}; 
    </Container>
  );
}

export default ClubList;

const Container = styled.div`
    background: #1e029c;
    height: 85vh;
    color: white;
    padding: 20px; 
`;

const SFormGroup = styled(FormGroup)`
    margin-left: 20px;

`;