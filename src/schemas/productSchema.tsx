import * as Yup from "yup";

const albumValidationSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .max(256, "Title must be at most 256 characters"),
  artist: Yup.string()
    .required("Artist is required")
    .max(256, "Artist must be at most 256 characters"),
  images: Yup.array()
    .of(Yup.string().required("Image URL is required"))
    .min(1, "At least one image URL is required"),
  releaseDate: Yup.date().required("Release Date is required"),
  price: Yup.number()
    .required("Price is required")
    .min(0, "Price must be a positive number"),
  genre: Yup.string().required("Genre is required").trim(),
  songs: Yup.array().of(
    Yup.object().shape({
      title: Yup.string()
        .required("Song Title is required")
        .max(256, "Song Title must be at most 256 characters"),
      length: Yup.object().shape({
        minutes: Yup.number()
          .required("Minutes are required")
          .min(0, "Minutes must be a positive number"),
        seconds: Yup.number()
          .required("Seconds are required")
          .min(0, "Seconds must be a positive number"),
      }),
    })
  ),
  description: Yup.string().required("Description is required").trim(),
  details: Yup.array().of(
    Yup.object().shape({
      label: Yup.string().required("Label is required").trim(),
      value: Yup.string().required("Value is required").trim(),
    })
  ),
  awards: Yup.array().of(Yup.string().trim()),
  stock: Yup.object().shape({
    small: Yup.number().min(0, "Small stock must be a positive number"),
    medium: Yup.number().min(0, "Medium stock must be a positive number"),
    large: Yup.number().min(0, "Large stock must be a positive number"),
  }),
});

export default albumValidationSchema;
