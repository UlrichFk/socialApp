import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment } from './schemas/comment.schema';

@Injectable()
export class CommentService {
    constructor(
        @InjectModel(Comment.name) private commentModel: Model<Comment>
    ){}

    async create(comment: Comment): Promise<Comment> {
        const Comment = await this.commentModel.create(comment);
        return Comment;
    }
    
    async findAll(): Promise<Comment[]> {
        const Comment = await this.commentModel.find();
        return Comment;
    }

    async findById(id: string): Promise<Comment> {
        const Comment = await this.commentModel.findById(id);

        if(!Comment){
            throw new NotFoundException('Comment not found!');
        }

        return Comment;
    }

    async updateById(id: string, comment: Comment): Promise<Comment> {

        return await this.commentModel.findByIdAndUpdate(id, comment, {
            new: true,
            runValidators: true,
        });

    }

    async deleteById(id: string): Promise<Comment> {

        return await this.commentModel.findByIdAndDelete(id);

    }
}
