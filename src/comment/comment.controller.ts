import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment } from './schemas/comment.schema';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';


@Controller('comment')
export class CommentController {
    constructor(private commentService: CommentService){}

    @Post()
    async createComment(
        @Body()
        comment: CreateCommentDto,
    ): Promise<Comment> {
        return this.commentService.create(comment);
    }

    @Get()
    async getAllComments(): Promise<Comment[]> {
        return this.commentService.findAll();
    }

    @Get(':id')
    async getCommentById(
        @Param('id')
        id: string
    ): Promise<Comment> {
        return this.commentService.findById(id);
    }

    @Put(':id')
    async updateComment(
        @Param('id')
        id: string,
        @Body()
        comment: UpdateCommentDto,
    ): Promise<Comment> {
        return this.commentService.updateById(id, comment);
    }

    @Delete(':id')
    async deleteComment(
        @Param('id')
        id: string
    ): Promise<Comment> {
        return this.commentService.deleteById(id);
    }
    
}
