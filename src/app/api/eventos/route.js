import { NextResponse } from "next/server";
import {connectDB} from "@/utils/mongoose"
import Evento from "@/models/eventoSchema"

export async function GET(){
    try {
        connectDB();
        const eventos = await Evento.find();
        return NextResponse.json(eventos);
    } catch (error) {
        return NextResponse.error({
            status: 400,
            message: "Error fetching eventos"
        });
    }
}

export async function POST(request){
    try {
        const data = await request.json();
        const newEvento = new Evento(data);
        const eventoSaved = await newEvento.save();
        console.log(eventoSaved);
        return NextResponse.json(eventoSaved);
    } catch (error) {
        return NextResponse.error({
            status: 400,
            message: "Error creating evento"
        });
    }
}