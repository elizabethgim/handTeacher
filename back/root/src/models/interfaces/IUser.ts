export default interface IUser {
  _id: string;
  username: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  errorMessage?;
  userId?: string;
}
