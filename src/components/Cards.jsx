import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function Cards(data) {
  console.log("data in cards", data.data);
  return (
    <div style={{ width: "75vw" }}>
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ width: "15vw" }}
          style={{ border: "1px solid red" }}
          image="/static/images/cards/live-from-space.jpg"
          alt="Live from space album cover"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid blue",
            width: "100%",
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <div>
              <h3>{data?.data?.title}</h3>
              <p style={{}}>AUTHOR: {data?.data?.author}</p>
              <span>AUTHOR: {data?.data?.author}</span>
            </div>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              {data?.data?.description}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
}
