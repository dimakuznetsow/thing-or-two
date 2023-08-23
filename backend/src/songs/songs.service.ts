import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Songs } from './songs.model';
import * as fs from 'fs';
import * as csv from 'csv-parser';

@Injectable()
export class SongsService {
  constructor(private prisma: PrismaService) {}

  // Retrieve a list of songs from the database
  async getSongs(): Promise<Songs[]> {
    return this.prisma.songs.findMany();
  }

  async createSong(data: Songs): Promise<Songs> {
    try {
      console.log('Created songs: ', data);
      return await this.prisma.songs.create({ data });
    } catch (error) {
      console.log('Error creating song: ', error);
      throw error;
    }
  }

  // Upload songs from a CSV file and store them in the database
  async uploadSongsFromCSV() {
    const results = [];

    // Read the CSV file, parse the data, and process it
    fs.createReadStream('./src/songs/songs.csv')
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', async () => {
        for (const result of results) {
          const { 'Song Name': name, Band: band, Year: year } = result;
          const nameToLowerCase = name.toLowerCase();
          const bandToLowerCase = band.toLowerCase();
          const yearNum = parseInt(year);
          const song = {
            name: nameToLowerCase,
            band: bandToLowerCase,
            year: yearNum,
          };
          await this.createSong(song);
        }
      });
  }
}
