import { NextResponse } from "next/server";
import {connectDB} from "@/utils/mongoose";
import Inscripcion from "@/models/inscripcionSchema";

export async function GET(request, context){
    try {
        connectDB();
        const params = await context.params;
        const inscripcionById = await Inscripcion.findById(params.id);

        if (!inscripcionById) {
            return NextResponse.error({
                status: 404,
                message: "Inscripcion not found"
            })

        }

        return NextResponse.json(inscripcionById)
    } catch (error) {
        return NextResponse.error({
            status: 400,
            message: "Error fetching inscripcion"
        })
    }
}