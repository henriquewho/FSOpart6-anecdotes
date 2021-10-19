import axios from 'axios'

const baseUrl = "http://localhost:3001/anecdotes"

const getAll = async () => {
    const resp = await axios.get(baseUrl)
    return resp.data
}

const create = async content => {
    const newObject = {content, votes:0}
    const resp = await axios.post(baseUrl, newObject)
    return resp.data
}

const vote = async (id, currentVotes) => {
    const newVotes = {votes: currentVotes+1}
    const resp = await axios.patch(`${baseUrl}/${id}`, newVotes)
    return resp.data; 
}

const toExport = {
    getAll, create, vote
}
export default toExport