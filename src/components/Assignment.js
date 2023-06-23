import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  CardActionArea,
  CircularProgress,
  Container,
  Skeleton,
  TextField,
} from "@mui/material";
import axios from "axios";
const Assignment = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    let asyncFetch = async () => {
      let { data } = await axios.get("https://reqres.in/api/users?page=2");
      setData(data?.data);
      setFilteredData(data?.data);
    };
    asyncFetch();
  }, []);

  let changeHandler = (e) => {
    if (e.target.value.trim().length === 0) setFilteredData(data);
    else
      setFilteredData(
        filteredData.filter(
          (el) =>
            el?.first_name
              .toLowerCase()
              .search(e?.target?.value.trim().toLowerCase()) >= 0
        )
      );
  };
  return (
    <Container maxWidth="sm">
      <div className="d-flex align-items-center justify-content-center">
        <TextField
          id="outlined-basic"
          label="Search"
          size="small"
          variant="outlined"
          margin="none"
          sx={{ marginRight: 5 }}
          onChange={(e) => changeHandler(e)}
        />
      </div>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: 600,
        }}
      >
        {filteredData.length ? (
          filteredData?.map((e) => (
            <Card key={e.id} sx={{ maxWidth: 200, m: 2 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={e.avatar}
                  alt="green iguana"
                />

                <Typography
                  variant="h6"
                  component="div"
                  sx={{ px: 3, color: "#36454F" }}
                >
                  {e.first_name}
                </Typography>
              </CardActionArea>
            </Card>
          ))
        ) : (
          <Box
            sx={{
              height: 300,
              width: 600,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {filteredData.length ? (
              <CircularProgress />
            ) : (
              <img
               className="mt-5"
                height={300}
                src="https://o.remove.bg/downloads/17ab3785-3835-43e4-a0fe-ad8ab5839041/original-2022966da1fc3718d3feddfdc471ae47-removebg-preview.png"
              ></img>
            )}
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Assignment;
