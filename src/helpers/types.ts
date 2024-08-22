<<<<<<< HEAD
export interface IUser {
  id?: number;
  name: string;
  surname: string;
  login: string;
  password: string;
  picture?: string;
  cover?: string;
  followers?: IUser[];
  following?: IUser[];
  isPrivate?: number;
}
export interface IAccount extends IUser {
  posts: IPost[]
  connection: { following: boolean, followsMe: boolean, requested: boolean }
}

export interface IResponse {
  status: string;
  message?: string;
  user?: IUser;
  payload?: unknown;
}

export type PartialUser = Partial<IUser>;

export interface IContext {
  account: IUser;
  setAccount: (obj: IUser) => void;
}

export interface IPost {
  id: number;
  title: string;
  picture: string;
  likes: IUser[];
  isLiked: boolean
  comments:IComment[]
}


export type PartialPost = Partial<IPost>;
export interface IComment{
 id?:number
 userId?:number
 text:string
 content?:string
 user?:IUser
}

export interface IChange {
  old?: string;
  newpwd?: string;
  password?: string;
  login?: string;
}

export interface IRequest{
  id:number
  user:IUser
}
=======
export interface IUser{
    id?:number
    name:string
    surname:string
    login:string
    password:string
    picture?:string
    cover?:string
    followers?:IUser[]
    following?:IUser[]
    isPrivate?:string
}

export interface IResponse{
    status:string
    message?:string
    user?:IUser
    payload:unknown
}

export type PartialUser = Partial<IUser>

export interface IPost{
    id:number
    title:string
    picture:string
    likes:IUser[]
}

export interface IContext{
    account:IUser
    setAccount:(obj:IUser)=>void
   }

 
>>>>>>> 5e7dac83b9a65d709ba21ee515199ed0e4fd3d11
