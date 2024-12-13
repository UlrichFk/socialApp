import { Injectable } from '@nestjs/common';
import { supabase } from './schemas/supabaseClient';
import { Express } from 'express';

@Injectable()
export class ImageUploadService {
  async uploadImage(file: Express.Multer.File): Promise<string | null> {
    try {
      const fileName = `${Date.now()}_${file.originalname}`;
      const { error } = await supabase.storage.from('images').upload(fileName, file.buffer);
      if (error) {
        throw new Error(error.message);
      }

      // Correctly get the public URL
      const { 
        data, 
        //error: urlError 
      } = supabase.storage.from('images').getPublicUrl(fileName);
      /*if (urlError) {
        throw new Error(urlError.message);
      }*/

      return data.publicUrl; // Correctly return the public URL
    } catch (error) {
      console.error('Upload error:', error);
      return null;
    }
  }
}


