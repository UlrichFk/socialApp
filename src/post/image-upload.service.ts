import * as admin from 'firebase-admin';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ImageUploadService {
  async uploadImage(file: Express.Multer.File): Promise<string> {
    const bucket = admin.storage().bucket();
    const fileUpload = bucket.file(Date.now().toString() + '_' + file.originalname);

    await fileUpload.save(file.buffer, {
      metadata: { contentType: file.mimetype },
      public: true,
    });

    return fileUpload.publicUrl();
  }
}
