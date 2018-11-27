import { IProducts } from "./products.model";

export interface ICarts{
    id?: Number;
    totalPrice?: Number;
    userCreate?: Number;
    createDate?: Date;
    idstatistics: Number;
    Product?: IProducts[];

}