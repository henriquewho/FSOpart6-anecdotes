import axios from 'axios'

const baseUrl = "http://localhost:3001/anecdotes"

const getAll = async () => {
    const resp = await axios.get(baseUrl)
    return resp.data
}

const toExport = {
    getAll
}
export default toExport