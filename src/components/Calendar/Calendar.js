import React, { useEffect, useState } from "react";
import './Calendar.scss';
import moment from 'moment';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from "@mui/material";
export const Calendar = (props) => {
    const [rows, setRows] = useState([]);
    useEffect(() => {
        let numberOfDays = parseInt(moment(props?.date?.substring(3, props?.date?.length), "MM-YYYY").daysInMonth());
        let firstDay = moment(props?.date, 'DD-MM-YYYY').startOf("month")?.format("d");
        let dateArray = [];
        for (let i = 0; i < parseInt(firstDay); i++) {
            dateArray?.push("NOTHING")
        }
        for (let i = 1; i <= parseInt(numberOfDays); i++) {
            dateArray?.push(i)
        }
        let newArr = [];
        while (dateArray.length) newArr.push(dateArray.splice(0, 7));
        setRows(newArr)
    }, [props])
    return (
        <div className="calendarMainContainer">
            <Typography style={{fontSize:"30px"}}>{moment(props?.date, 'DD-MM-YYYY').format("MMMM YYYY") === "Invalid date" ? "" : moment(props?.date, 'DD-MM-YYYY').format("MMMM YYYY")}</Typography>
            {rows?.length > 0 &&
            <TableContainer sx={{width:"50%",margin:"auto",border:"2px solid black"}}>
                <Table>
                    <TableHead sx={{ display: "table-header-group" }}>
                        <TableRow sx={{color:"white"}}>
                            <TableCell>Su</TableCell>
                            <TableCell>Mo</TableCell>
                            <TableCell>Tu</TableCell>
                            <TableCell>We</TableCell>
                            <TableCell>Th</TableCell>
                            <TableCell>Fr</TableCell>
                            <TableCell>Sa</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows?.map((rowData, i) => {
                            return <TableRow key={i}>
                                {rowData?.map((data, j) => {
                                    return <TableCell align="left" sx={{border:"1px solid black",bgcolor: parseInt(moment(props?.date, 'DD-MM-YYYY').format("DD")) === data ? "lightblue" : "",color: parseInt(moment(props?.date, 'DD-MM-YYYY').format("DD")) === data ? "blue" : ""}} key={j}>{data === "NOTHING" ? "" : data}</TableCell>
                                })}
                            </TableRow>
                        })}

                    </TableBody>
                </Table>
            </TableContainer>
        }
        </div>
    )
}