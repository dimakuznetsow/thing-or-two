import axios from 'axios'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    const getSongs = async () => {
      try {
        const { data } = await axios.get('http://localhost:9000/songs')
        console.log(data)
      } catch (error) {
        console.log("Error: ", error)
      }
    }
    getSongs()
  }, [])






  return (
    <div className="grid grid-cols-1 grid-rows-[100vh] items-center justify-items-center">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Band</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default App
