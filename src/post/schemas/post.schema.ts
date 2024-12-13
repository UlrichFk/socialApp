
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


/*export enum Category {
    DIVERTISSEMENT = 'Divertissement',
    DIGITAL = 'Digital',
    SECURITE = 'Securite',
    SPORT = 'Sport',
    SOCIETE = 'Societe',
}*/

@Schema({timestamps: true})
export class Posts {

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    content: string;

    /*@Prop()
    author: string;

    @Prop({ required: true })
    category: Category;

    @Prop()
    tags: string;*/

    @Prop()
    imageUrl: string;

}

export const PostSchema = SchemaFactory.createForClass(Posts);
