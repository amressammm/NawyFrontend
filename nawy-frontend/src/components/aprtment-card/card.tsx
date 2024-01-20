import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { apartmentModel } from "@/models/apartmentModel";

import { apartmentsImages } from "@/constants/apartments";
import Link from "next/link";

export default function ApartmentCard({ data }: { data: apartmentModel }) {
  const image =
    apartmentsImages[Math.floor(Math.random() * apartmentsImages.length)];

  return (
    <Link href={{ pathname: data._id, query: { image: image } }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={image}
            style={{ height: "150px" }}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.address}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
