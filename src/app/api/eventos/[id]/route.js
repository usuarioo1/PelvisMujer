import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Eventos from "@/models/eventoSchema";

// GET Evento por ID
export async function GET(request, { params }) {
    try {
        await connectDB();
        const { id } = await params; // Se asegura de esperar `params`

        if (!id) {
            return NextResponse.json({ message: "ID is required" }, { status: 400 });
        }

        const eventoById = await Eventos.findById(id);

        if (!eventoById) {
            return NextResponse.json({ message: "Evento not found" }, { status: 404 });
        }

        return NextResponse.json(eventoById);
    } catch (error) {
        console.error("Error fetching evento:", error);
        return NextResponse.json({ message: "Error fetching evento" }, { status: 500 });
    }
}

// PUT (Actualizar evento)
export async function PUT(request, { params }) {
    try {
        await connectDB();
        const { id } = await params;
        const data = await request.json();

        if (!id) {
            return NextResponse.json({ message: "ID is required" }, { status: 400 });
        }

        const eventoUpdated = await Eventos.findByIdAndUpdate(id, data, { new: true });

        if (!eventoUpdated) {
            return NextResponse.json({ message: "Evento not found" }, { status: 404 });
        }

        return NextResponse.json(eventoUpdated);
    } catch (error) {
        console.error("Error updating evento:", error);
        return NextResponse.json({ message: "Error updating evento" }, { status: 500 });
    }
}

// DELETE (Eliminar evento)
export async function DELETE(request, { params }) {
    try {
        await connectDB();
        const { id } = await params;

        if (!id) {
            return NextResponse.json({ message: "ID is required" }, { status: 400 });
        }

        const eventoDeleted = await Eventos.findByIdAndDelete(id);

        if (!eventoDeleted) {
            return NextResponse.json({ message: "Evento not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Evento deleted successfully" });
    } catch (error) {
        console.error("Error deleting evento:", error);
        return NextResponse.json({ message: "Error deleting evento" }, { status: 500 });
    }
}
