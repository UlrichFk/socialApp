import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseInterceptors} from '@nestjs/common';
import { PostService } from './post.service';
import { Posts } from './schemas/post.schema';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ImageUploadService } from './image-upload.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('post')
export class PostController {
    constructor(
        private postService: PostService,
        private imageUploadService: ImageUploadService
    ){}

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async createPost(
      @Body() post: CreatePostDto, 
      @UploadedFile() file: Express.Multer.File) {
      if (file) {
        const imageUrl = await this.imageUploadService.uploadImage(file);
        if (imageUrl) {
          post.imageUrl = imageUrl;
        }
      }
      return this.postService.create(post);
    }

    @Get()
    async getAllPosts(): Promise<Posts[]> {
        return this.postService.findAll();
    }

    @Get(':id')
    async getPostById(
        @Param('id')
        id: string
    ): Promise<Posts> {
        return this.postService.findById(id);
    }

    @Put(':id')
    @UseInterceptors(FileInterceptor('file'))
    async updatePost(
      @Param('id') id: string, 
      @Body() post: UpdatePostDto, 
      @UploadedFile() file: Express.Multer.File) {
      if (file) {
        const imageUrl = await this.imageUploadService.uploadImage(file);
        if (imageUrl) {
          post.imageUrl = imageUrl;
        }
      }
      return this.postService.updateById(id, post);
    }

    @Delete(':id')
    async deletePost(
        @Param('id')
        id: string
    ): Promise<Posts> {
        return this.postService.deleteById(id);
    }
    
}
