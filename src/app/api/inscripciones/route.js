import { NextResponse } from "next/server";
import {connectDB} from "@/utils/mongoose";
import Inscripcion from "@/models/inscripcionSchema";


export async function GET(){
    try {
        connectDB();
        const inscripciones = await Inscripcion.find();
        return NextResponse.json(inscripciones);
    } catch (error) {
        return NextResponse.error({
            status: 400,
            message: "Error fetching inscripciones"
        });
    }
}

export async function POST(request){
    try {
        const data = await request.json();
        const newInscripcion = new Inscripcion(data);
        const inscripcionSaved = await newInscripcion.save();
        console.log(inscripcionSaved);
        return NextResponse.json(inscripcionSaved);
    } catch (error) {
        return NextResponse.error({
            status: 400,
            message: "Error creating inscripcion"
        });
    }
}