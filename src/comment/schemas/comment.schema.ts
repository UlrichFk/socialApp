
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({timestamps: true})
export class Comment {

    @Prop()
    postId: String;
    
    @Prop() 
    content: String;

}

export const commentSchema = SchemaFactory.createForClass(Comment);
