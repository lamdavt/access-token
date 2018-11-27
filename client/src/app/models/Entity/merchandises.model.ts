import { IProducts } from "./products.model";

export interface IMerchandises{
    id?: Number;
    idcompany?: Number;
    titel?:String
    discount?: Number;
    userMerchandise?: Number;
    Product?: IProducts[];
}
