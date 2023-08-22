import { Body, Controller, Get, Post } from '@nestjs/common';
import { Songs } from './songs.model';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Get()
  async getSongs(): Promise<Songs[]> {
    return this.songsService.getSongs();
  }

  @Post()
  async createSong(@Body() postData: Songs): Promise<Songs> {
    return this.songsService.createSong(postData);
  }

  @Post('upload-csv')
  async uploadSongsFromCSV(): Promise<string> {
    try {
      await this.songsService.uploadSongsFromCSV();
      return 'CSV upload successful';
    } catch (error) {
      return 'CSV upload failed';
    }
  }
}
