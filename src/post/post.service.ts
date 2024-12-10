import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Posts } from './schemas/post.schema';

@Injectable()
export class PostService {
    constructor(
        @InjectModel(Posts.name) private postModel: Model<Posts>
    ){}

    async create(post: Posts): Promise<Posts> {
        const Posts = await this.postModel.create(post);
        return Posts;
    }
    
    async findAll(): Promise<Posts[]> {
        const Posts = await this.postModel.find();
        return Posts;
    }

    async findById(id: string): Promise<Posts> {
        const Posts = await this.postModel.findById(id);

        if(!Posts){
            throw new NotFoundException('Post not found!');
        }

        return Posts;
    }

    async updateById(id: string, post: Posts): Promise<Posts> {

        return await this.postModel.findByIdAndUpdate(id, post, {
            new: true,
            runValidators: true,
        });

    }

    async deleteById(id: string): Promise<Posts> {

        return await this.postModel.findByIdAndDelete(id);

    }
}

