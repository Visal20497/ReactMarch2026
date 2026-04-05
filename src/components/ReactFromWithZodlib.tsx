import { useState } from "react";
import { z } from "zod";
import {
  Box,
  TextField,
  Button,
  Typography,
  Avatar,
  Stack,
} from "@mui/material";

const profileSchema = z.object({
  name: z.string().min(5, "Name must be at least 5 characters"),
  email: z.string().email("Invalid email"),
  profilePic: z
    .instanceof(File)
    .optional()
    .refine((file) => !file || file.size <= 5 * 1024 * 1024, {
      message: "Max file size is 5MB",
    })
    .refine(
      (file) =>
        !file || ["image/png", "image/jpeg", "image/jpg"].includes(file.type),
      {
        message: "Only PNG, JPG, JPEG files are allowed",
      },
    ),
});

type Profile = z.infer<typeof profileSchema>;

export default function ReactFormWithZodMUI() {
  const [form, setForm] = useState<Profile>({
    name: "",
    email: "",
    profilePic: undefined,
  });

  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (field: keyof Profile, value: string | File) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileChange = (file?: File) => {
    if (file) {
      handleChange("profilePic", file);
      setPreview(URL.createObjectURL(file));
    }
  };
  const handleSubmit = async () => {
    const result = profileSchema.safeParse(form);

    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors);
      return;
    }

    setErrors({});

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    if (form.profilePic) {
      formData.append("profilePic", form.profilePic);
    }
    console.log("Submitting form with data:", {
      name: form.name,
      email: form.email,
      profilePic: form.profilePic,
    });
  };

  return (
    <Box maxWidth={400} mx="auto" mt={5} p={3} boxShadow={3} borderRadius={2}>
      <Typography variant="h5" mb={2} textAlign="center">
        Update Profile
      </Typography>

      <Stack spacing={2}>
        {/* AVATAR PREVIEW */}
        <Box display="flex" justifyContent="center">
          <Avatar src={preview || ""} sx={{ width: 80, height: 80 }} />
        </Box>

        {/* FILE INPUT */}
        <Button variant="contained" component="label">
          Upload Profile Picture
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => handleFileChange(e.target.files?.[0])}
          />
        </Button>
        {errors.profilePic && (
          <Typography color="error" variant="body2">
            {errors.profilePic[0]}
          </Typography>
        )}

        {/* NAME */}
        <TextField
          label="Name"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          error={!!errors.name}
          helperText={errors.name?.[0]}
          fullWidth
        />

        {/* EMAIL */}
        <TextField
          label="Email"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          error={!!errors.email}
          helperText={errors.email?.[0]}
          fullWidth
        />

        {/* SUBMIT */}
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Save Profile
        </Button>
      </Stack>
    </Box>
  );
}
