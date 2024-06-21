import { Table, Column, Model, DataType } from "sequelize-typescript";
import { toDefaultValue } from "sequelize/types/utils";

@Table({
  tableName: "users",
  modelName: "user",
  timestamps: true,
})
class User extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @Column({
    type: DataType.STRING,
  })
  declare username: string;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
  })
  declare password: string;

  @Column({
    type: DataType.ENUM("customer", "admin"),
    defaultValue: "customer",
    allowNull: false,
    validate: {
      isIn: [["customer", "admin"]],
    },
  })
  declare role: string;
}

export default User;
