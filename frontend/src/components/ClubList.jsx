import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { lightBlue, blue } from '@mui/material/colors';
import { ElistContext } from './ElistContext';

function ClubList() {

    const [currentList, setCurrentList] = useState([]);
    const [Elist, setElist] = useContext(ElistContext);
    const [clubList, setClubList] = useState([]);
    const [clubsChecked, setClubsChecked] = useState([]);

    const fetchList = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/events_api/");
            const json = await response.json();
            setCurrentList(json);
            setClubList(findUniqueClubs(json));  
            setElist(json);
        } catch (error) {
            console.log("error", error);
        }
    };


    function findUniqueClubs (x) {
        let arr = [];
        for (let i = 0; i < x.length; i++) {
            let notPresent = true;
            for (let j = 0; j < arr.length; j++) {
                if (arr[j] === x[i].host) {
                    notPresent = false;
                }
            }
            if (notPresent) {
                arr.push(x[i].host);
            }
        }
        return arr;
    }


    useEffect(() => {
        fetchList();
    },[]);


    function handleChange(club) {
        let res = [];
        let present = false;
        for(let i = 0; i < clubsChecked.length; i++) {
            if(clubsChecked[i] !== club) {
                res.push(clubsChecked[i]);
            }
            else{
                present = true;
            }
        }
        if(present === false){
            res.push(club);
        }


        if(res.length === 0){
            setElist(currentList);
        }
        else{
            let arr = [];
             for(let i = 0; i < currentList.length; i++){
                let present = false;
                for(let j = 0; j < res.length; j++){
                    if(res[j] === currentList[i].host){
                        present = true;
                    }
                }
                if(present){
                    arr.push(currentList[i]);
                }
            }
            setElist(arr);
        }

        setClubsChecked(res);

    }

    return (
        <Container>
            {clubList.map((club) => {
                return (
                    <SFormGroup>
                        <FormControlLabel control={
                            <Checkbox
                                sx={
                                    {
                                        '& .MuiSvgIcon-root': { fontSize: 40 },
                                        color: lightBlue[400],
                                        '&.Mui-checked': {
                                            color: lightBlue[300],
                                        },
                                    }
                                } 
                                onChange={() => handleChange(club)}    
                                />
                        } label={club} />
                    </SFormGroup>
                );
            })}
        </Container>
    );
}

export default ClubList;

const Container = styled.div`
    background: #1e029c;
    color: white;
    padding: 20px; 
    height: 100vh;
`;

const SFormGroup = styled(FormGroup)`
    margin-left: 20px;

`;