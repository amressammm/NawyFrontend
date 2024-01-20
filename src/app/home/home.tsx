"use client";

import ApartmentCard from "../../components/aprtment-card/card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { apartmentModel } from "@/models/apartmentModel";

export default function HomeScreen({ apartments }: { apartments: [] }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {apartments.map((value: apartmentModel, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <ApartmentCard data={value} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
