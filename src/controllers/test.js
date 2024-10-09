// export const createContactsController = async (req, res) => {
//   const userId = req.user._id;
//   const photo = req.file;

//   let photoUrl;

//   if (photo) {
//     if (env("ENABLE_CLOUDINARY") === "true") {
//       photoUrl = await saveFileToCloudinary(photo);
//     } else {
//       photoUrl = await saveFileToUploadDir(photo);
//     }
//   }

//   const contact = await createContact({ ...req.body, photo: photoUrl, userId });

//   res.status(201).json({
//     status: 201,
//     message: "Successfully created a contact!",
//     data: contact,
//   });
// };
