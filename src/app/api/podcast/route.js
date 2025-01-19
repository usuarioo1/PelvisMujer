import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Spotify from "@/models/spotifySchema";


export async function GET() {
    connectDB()
    const spotifyList = await Spotify.find()
    return NextResponse.json(spotifyList)
}

export async function POST(request) {
    try {
        const data = await request.json();

        const newSpotify = new Spotify(data)
        const podcastSaved = await newSpotify.save()
        console.log(podcastSaved)
        return NextResponse.json(podcastSaved)
    } catch (error) {
        return NextResponse.error({
            status: 400,
            message: "Error creating podcast"
        })
    }
}