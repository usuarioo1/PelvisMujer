import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Spotify from "@/models/spotifySchema";

// GET Podcast por ID
export async function GET(request, { params }) {
    try {
        await connectDB();
        const { id } = await params; // Extrae el ID de los parámetros

        if (!id) {
            return NextResponse.json({ message: "ID is required" }, { status: 400 });
        }

        const podcastById = await Spotify.findById(id);

        if (!podcastById) {
            return NextResponse.json({ message: "Podcast not found" }, { status: 404 });
        }

        return NextResponse.json(podcastById);
    } catch (error) {
        console.error("Error fetching podcast:", error);
        return NextResponse.json({ message: "Error fetching podcast" }, { status: 500 });
    }
}

// PUT (Actualizar podcast)
export async function PUT(request, { params }) {
    try {
        await connectDB();
        const { id } = params;
        const data = await request.json();

        if (!id) {
            return NextResponse.json({ message: "ID is required" }, { status: 400 });
        }

        const podcastUpdated = await Spotify.findByIdAndUpdate(id, data, { new: true });

        if (!podcastUpdated) {
            return NextResponse.json({ message: "Podcast not found" }, { status: 404 });
        }

        return NextResponse.json(podcastUpdated);
    } catch (error) {
        console.error("Error updating podcast:", error);
        return NextResponse.json({ message: "Error updating podcast" }, { status: 500 });
    }
}

// DELETE (Eliminar podcast)
export async function DELETE(request, { params }) {
    try {
        await connectDB();
        const { id } = params;

        if (!id) {
            return NextResponse.json({ message: "ID is required" }, { status: 400 });
        }

        const podcastDeleted = await Spotify.findByIdAndDelete(id);

        if (!podcastDeleted) {
            return NextResponse.json({ message: "Podcast not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Podcast deleted successfully" });
    } catch (error) {
        console.error("Error deleting podcast:", error);
        return NextResponse.json({ message: "Error deleting podcast" }, { status: 500 });
    }
}