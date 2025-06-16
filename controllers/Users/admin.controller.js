import bcrypt from "bcrypt";
import User from "../../models/user.model.js";
import dotenv from "dotenv";
import { ROLES } from "../../constants/role.constant.js";

dotenv.config();


export const createLecturer = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      gender,
      phoneNumber,
      staffId,
      department,
      faculty
    } = req.body;

    const existingUser = await User.findOne({ where: { staffId } });
    if (existingUser) {
      return res.status(400).json({
        status: 400,
        message: "User already exist",
        error: true,
      });
    }

    const defaultPassword = `${firstname}Pass`;
    const hashPassword = await bcrypt.hash(defaultPassword, 10);

    const user = await User.create({
      firstname,
      lastname,
      email,
      phoneNumber,
      gender,
      staffId,
      department,
      faculty,
      role: ROLES.LECTURER,
      password: hashPassword,
    });

    const userDto = {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      gender: user.gender,
      phoneNumber: user.phoneNumber,
      role: user.role,
      staffId,
    };

    res.status(201).json({
      status: 201,
      message: "Lecturer added successfully",
      error: false,
      user: userDto,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      message: "An error occurred",
      error: true,
    });
  }
};


export const createStudent = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      gender,
      phoneNumber,
      matricNumber,
      department,
      faculty,
    } = req.body;

    const existingUser = await User.findOne({ where: { matricNumber } });
    if (existingUser) {
      return res.status(400).json({
        status: 400,
        message: "User already exist",
        error: true,
      });
    }

    const defaultPassword = `${firstname}Pass`;
    const hashPassword = await bcrypt.hash(defaultPassword, 10);

    const user = await User.create({
      firstname,
      lastname,
      email,
      phoneNumber,
      gender,
      matricNumber,
      department,
      faculty,
      role: ROLES.LECTURER,
      password: hashPassword,
    });

    const userDto = {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      gender: user.gender,
      phoneNumber: user.phoneNumber,
      role: user.role,
      staffId,
    };

    res.status(201).json({
      status: 201,
      message: "Student added successfully",
      error: false,
      user: userDto,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      message: "An error occurred",
      error: true,
    });
  }
};

