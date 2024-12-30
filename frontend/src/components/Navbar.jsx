import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" >hello
                    </Typography>
                    <Link to='/add'>
                        <Button variant="contained" colour="primary" >Add</Button>
                    </Link>
                    <Link to='/view'>
                        <Button variant="contained" colour="primary" >View</Button>
                    </Link>
                   
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Navbar