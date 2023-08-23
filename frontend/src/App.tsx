import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';

interface Song {
  id: number;
  name: string;
  band: string;
  year: number;
}

function App(): JSX.Element {
  const [data, setData] = useState<Song[] | null>(null);

  useEffect(() => {
    const getSongs = async () => {
      try {
        const response = await axios.get<Song[]>('https://thing-or-two-v71t.onrender.com/songs');
        setData(response.data);
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    getSongs();
  }, []);

  const sortedData: Song[] = useMemo(() => {
    if (data) {
      return [...data].sort((a, b) => a.band.localeCompare(b.band));
    }
    return [];
  }, [data]);

  return (
    <div className="grid grid-cols-1 grid-rows-[100vh] items-center justify-items-center">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Band</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {sortedData &&
              sortedData.map((song) => (
                <tr key={song.id}>
                  <td>{song.name}</td>
                  <td>{song.band}</td>
                  <td>{song.year}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
