import { NextResponse } from "next/server";
import {connectDB} from "@/utils/mongoose";
import Inscripcion from "@/models/inscripcionSchema";

export async function GET(request, {params}) {
    try {
        await connectDB();
        const {id} = await params;

        if (!id) {
            return NextResponse.json({message: "ID is required"}, {status: 400});
        }

        const inscripcionById = await Inscripcion.findById(id);

        if (!inscripcionById) {
            return NextResponse.json({message: "Inscripcion not found"}, {status: 404});
        }

        return NextResponse.json(inscripcionById);
    } catch (error) {
        console.error("Error fetching inscripcion:", error);
        return NextResponse.json({message: "Error fetching inscripcion"}, {status: 500});
    }
}

export async function PUT(request, {params}) {
    try {
        await connectDB();
        const {id} = await params;
        const data = await request.json();

        if (!id) {
            return NextResponse.json({message: "ID is required"}, {status: 400});
        }

        const inscripcionUpdated = await Inscripcion.findByIdAndUpdate(id, data, {new: true});

        if (!inscripcionUpdated) {
            return NextResponse.json({message: "Inscripcion not found"}, {status: 404});
        }

        return NextResponse.json(inscripcionUpdated);
    } catch (error) {
        console.error("Error updating inscripcion:", error);
        return NextResponse.json({message: "Error updating inscripcion"}, {status: 500});
    }
}
export async function DELETE(request, {params}) {
    try {
        await connectDB();
        const {id} = await params;

        if (!id) {
            return NextResponse.json({message: "ID is required"}, {status: 400});
        }
        const inscripcionDeleted = await Inscripcion.findByIdAndDelete(id);

        if (!inscripcionDeleted) {
            return NextResponse.json({message: "Inscripcion not found"}, {status: 404});
        }

        return NextResponse.json(inscripcionDeleted);
    } catch (error) {
        console.error("Error deleting inscripcion:", error);
        return NextResponse.json({message: "Error deleting inscripcion"}, {status: 500});
    }
}