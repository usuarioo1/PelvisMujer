import { NextResponse } from "next/server";
import {connectDB} from "@/utils/mongoose";
import Testimonio from "@/models/testimonioSchema";

export async function GET(){
    try {
        connectDB();
        const testimonios = await Testimonio.find();
        return NextResponse.json(testimonios);
    } catch (error) {
        return NextResponse.error({
            status: 400,
            message: "Error fetching testimonios"
        });
    }
};

export async function POST(request){
    try {
        const data = await request.json();
        const newTestimonio = new Testimonio(data);
        const testimonioSaved = await newTestimonio.save();
        console.log(testimonioSaved);
        return NextResponse.json(testimonioSaved);
    } catch (error) {
        return NextResponse.error({
            status: 400,
            message: "Error creating testimonio"
        });
    }
}