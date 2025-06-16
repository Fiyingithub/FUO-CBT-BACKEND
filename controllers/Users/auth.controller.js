import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../../models/user.model.js";
import dotenv from "dotenv";
import { ROLES } from "../../constants/role.constant.js";

dotenv.config();

export const signup = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      gender,
      phoneNumber,
      password,
    } = req.body;
    const checkEmail = await User.findOne({ where: { email } });
    if (checkEmail) {
      return res.status(400).json({
        status: 400,
        message: "Email have been used",
        error: true,
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstname,
      lastname,
      email,
      gender,
      phoneNumber,
      password: hashPassword,
      role: ROLES.ADMIN,
    });

    const userDto = {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      gender: user.gender,
      phoneNumber: user.phoneNumber,
      role: user.role,
    };

    res.status(201).json({
      status: 201,
      message: "User Created Succesfully",
      error: false,
      user: userDto,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      status: 500,
      message: "An error occurred",
      error: true,
    });
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({
        status: 404,
        message: "User not found",
        error: true,
      });
    }

    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res.status(400).json({
        status: 400,
        message: "Password is not correct",
        error: true,
      });
    }

    const token = jwt.sign({ id: user.id, email: user.email, role: user.role}, process.env.JWT_SECRET, {
      expiresIn: "1hr",
    });

    const userDto = {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      gender: user.gender,
      phoneNumber: user.phoneNumber,
      role: user.role,
    };

    // res.cookie("token", token, {
    //     httpOnly: true, // Prevent JavaScript access (important for security)
    //     secure: true, // Only send over HTTPS (set to false in dev)
    //     sameSite: "strict", // Prevent CSRF
    //     maxAge: 60 * 60 * 1000, // 1 hour
    // });

    res.status(200).json({
      status: 200,
      message: "User Login Succesfully",
      error: false,
      user: userDto,
      token,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      status: 500,
      message: "An error occurred",
      error: true,
    });
  }
};

export const lecturerLogin = async (req, res)=>{
    try {
        const { staffId, password } = req.body

        const user = await User.findOne({ where: {staffId}})
        if(!user){
            return res.status(400).json({
                status: 400,
                message: "User not found",
                error: true,
            });
        }

        const comparePassword = await bcrypt.compare(password, user.password)
        if(!comparePassword){
            return res.status(400).json({
                status: 400,
                message: "password does not match",
                error: true,
            });
        }

        res.status(200).json({
            status: 200,
            message: "Lecturer Login Successfull",
            error: false
        })

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            status: 500,
            message: "An error occurred",
            error: true,
        });
    }
}

export const studentLogin = async (req, res)=>{
    try {
        const { matricNumber, password } = req.body

        const user = await User.findOne({ where: {matricNumber}})
        if(!user){
            return res.status(400).json({
                status: 400,
                message: "User not found",
                error: true,
            });
        }

        const comparePassword = await bcrypt.compare(password, user.password)
        if(!comparePassword){
            return res.status(400).json({
                status: 400,
                message: "password does not match",
                error: true,
            });
        }

        res.status(200).json({
            status: 200,
            message: "User Login Successfull",
            error: false
        })

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            status: 500,
            message: "An error occurred",
            error: true,
        });
    }
}