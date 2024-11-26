const { z } = require("zod");

const signupSchema = z.object({
    UserName: z.string({ required_error: "Name is required" }).trim().min(3, { message: "Name must be atleast 3 characters" }).max(250, { message: "Name must not be more than 250 characters" }),
    Email: z.string({ required_error: "Email is required" }).trim().email({message: "Invalid Email Address"}).min(3, { message: "Email must be atleast 3 characters" }).max(250, { message: "Email must not be more than 250 characters" }),
    Phone: z.string({ required_error: "Phone Number is required" }).trim().min(10, { message: "Phone Number must be atleast 10 characters" }).max(250, { message: "Phone Number must not be more than 250 characters" }),
    Password: z.string({ required_error: "Password is required" }).trim().min(5, { message: "Password must be atleast 5 characters" }).max(250, { message: "Password must not be more than 250 characters" }),
})


module.exports = signupSchema;