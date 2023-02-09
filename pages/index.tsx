import { FormControl, InputLabel, MenuItem, Select, Box } from "@mui/material";
import Head from "next/head";
import { NextPage } from "next/types";
import React from "react";
import styles from "../styles/Home.module.css";
import Instruments from "./Instruments";
import NavBar from "./components/NavBar";


export default function Home(): JSX.Element {
    const [page, setPage] = React.useState("instruments");
    let pageToRender;
    
    if (page === "instruments") {
        pageToRender = <Instruments />;
    } else if (page === "concerts") {
        pageToRender = <h1>Concerts</h1>;
    } else if (page === "venues") {
        pageToRender = <h1>Venues</h1>;
    }    

    const handleChange = (event: any) => {
        console.log(event.target.value);
        setPage(event.target.value);
    }
    
	return (
		<Box sx={{
            width: "90%",
            margin: "auto",
        }}>
        <FormControl sx={{
            width: "30%",
            margin: "auto",
            color: 'primary.text',
        }}>
          <InputLabel>{ page[0].toUpperCase() + page.substring(1) }</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={page}
            label={ page[0].toUpperCase() + page.substring(1) }
            onChange={handleChange}
          >
            <MenuItem value={"instruments"}>Instrumentos</MenuItem>
            <MenuItem value={"concerts"}>Musica en Vivo</MenuItem>
            <MenuItem value={"venues"}>Venues</MenuItem>
          </Select>
        </FormControl>

            {pageToRender}
			
		</Box>
	);
}

