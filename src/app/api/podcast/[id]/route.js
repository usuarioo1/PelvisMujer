import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Spotify from "@/models/spotifySchema";

export async function GET(request, context) {
    try {
        connectDB();
    const params = await context.params;
    const podcastById = await Spotify.findById(params.id);

    if (!podcastById) {
        return NextResponse.error({
            status: 404,
            message: "Podcast not found"
        })

    }

    return NextResponse.json(podcastById)
    } catch (error) {
        return NextResponse.error({
            status: 400,
            message: "Error fetching podcast"
        })
    }
}

export async function PUT(request, context) {

    try {
        connectDB();
        const params = await context.params;
        const data = await request.json()

        const podcastUpdated = await Spotify.findByIdAndUpdate(params.id, data, { new: true })

        return NextResponse.json(podcastUpdated)
    } catch (error) {
        return NextResponse.error({
            status: 400,
            message: "Error updating podcast"
        })

    }
}


export async function DELETE(request, context) {
    try {
        connectDB();
        const params = await context.params;
        const podcastDeleted = await Spotify.findByIdAndDelete(params.id)

        return NextResponse.json(podcastDeleted)
    } catch (error) {
        return NextResponse.error({
            status: 400,
            message: "Error deleting podcast"
        })
    }
}