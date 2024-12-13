import { Module, Post } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PostSchema } from './schemas/post.schema';
import { ImageUploadService } from './image-upload.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Posts', schema: PostSchema }]),
    ],
    controllers: [PostController],
    providers: [
        PostService, 
        ImageUploadService
    ],
    exports: [
        PostService, 
        ImageUploadService
    ],
})
export class PostModule {}
