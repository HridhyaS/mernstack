import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { use } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const View = () => {
    var [user, setuser] = useState([])
    var navigate = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:3004/get")
            .then((response) => {
                console.log(response.data)
                setuser(response.data)
            })
    }, [])

    const delval = (id) => {
        console.log(id)
        axios.delete("http://localhost:3004/remove/" + id)
            .then((response) => {
                alert(response.data.message)
                window.location.reload()
            })
    }
    const edival = (row) => {
        navigate("/add", { state:{row}})
}
    return (
        <div>
            <br /> <br /> <br /> <br /> <br /> <br /> <br />
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Department</TableCell>
                            <TableCell>Salary</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user.map((row) => {
                            return (

                                <TableRow>
                                    <TableCell>{row.Name}</TableCell>
                                    <TableCell>{row.Age}</TableCell>
                                    <TableCell>{row.Dept}</TableCell>
                                    <TableCell>{row.Sal}</TableCell>
                                    <TableCell>
                                        <Button onClick={() => { delval(row._id) }}>Delete</Button>
                                        <Button onClick={() => { edival(row._id) }}>Edit</Button>

                                    </TableCell>
                                </TableRow>
                            )
                        })}

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default View