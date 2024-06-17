
export interface IUser{
    id: number,
    name: string,
    email: String,
    imageUrl: String
}
  
export interface IUsers { 
    users: IUser[];
}
  