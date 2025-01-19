import {connect, connection} from "mongoose";

const conn = {
    isConnected: false
}

export async function connectDB() {

    if(conn.isConnected) return;

    const db = await connect(process.env.MONGODB_URI)
    console.log(db.connection.name)
    conn.isConnected = db.connections[0].readyState

}

connection.on('connected', () => {
    console.log('Mongoose connected to db')
})

connection.on('error', (err) => {
    console.log('Mongoose connection error: ' + err)
})