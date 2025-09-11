import { ImageListItem, ImageList, Box } from "@mui/material";

export const ImageGallery = ({ images }) => {
  return (
    <ImageList sx={{ width: "100%", height: 500 }} cols={4} rowHeight={200}>
      {" "}
      {images &&
        images.map((image) =>
          image ? (
            <ImageListItem key={image}>
              {" "}
              <Box
                component="img"
                src={`${image}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt="Imagen de la nota"
                loading="lazy"
                sx={{
                  width: { xs: "160px", sm: "200px", md: "300px" },
                  height: { xs: "160px", sm: "200px", md: "300px" },
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />
            </ImageListItem>
          ) : null
        )}
    </ImageList>
  );
};
