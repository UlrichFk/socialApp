//import { Category } from "../schemas/post.schema";

export class UpdatePostDto {
    readonly title: string;
    readonly content: string;
    //readonly author: string;
    imageUrl: string;
}