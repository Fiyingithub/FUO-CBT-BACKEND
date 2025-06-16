import { sequelize } from "../config/db.config.js";
import { DataTypes, UUIDV4 } from "sequelize";
import { ROLES } from "../constants/role.constant.js";

const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.ENUM("male", "female"),
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM(ROLES.ADMIN, ROLES.LECTURER, ROLES.STUDENT),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  department: {
    type: DataTypes.STRING
  },
  faculty: {
    type: DataTypes.STRING
  },
  staffId: {
    type: DataTypes.STRING,
  },
  matricNumber: {
    type: DataTypes.STRING
  }

},
{timestamps: true}
);

export default User;
