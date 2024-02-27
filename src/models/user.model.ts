import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
    tableName: "user",
  })
  export default class User extends Model {
    @Column({
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "id"
    })
    id?: number;

    @Column({
      type: DataType.STRING(255),
      field: "email"
    })
    email?: string;

    @Column({
      type: DataType.STRING(255),
      field: "password"
    })
    password?: string;
    static password: string;
    static email: string;

  }

