import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Home.scss';
import { Button} from "@mui/material";
import { Calendar } from "../Calendar/Calendar";
export const Home = () => {
    const [date, setDate] = useState("")
    const [tempDate,setTempDate] = useState("")
    const changeDate = () => {
        if(tempDate?.length === 10)
        {
        setDate(tempDate)
        }
        else
        {
            alert("Enter valid date")
        }
    }
    return (
        <div className="homeMainContainer">
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField placeholder="DD-MM-YYYY" onChange={(e) => setTempDate(e?.target?.value)} />
                <br></br>
                <Button variant="outlined" onClick={() => changeDate()}>Show Calendar</Button>
            </Box>
            <Calendar date={date}/>
        </div>
    )
}