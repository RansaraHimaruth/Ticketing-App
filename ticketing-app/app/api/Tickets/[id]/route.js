import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function DELETE(req, {params}) {
    try {
       const {id} = params;
       await Ticket.findByIdAndDelete(id);
       
       return NextResponse.json("Ticket deleted", 200);
    } catch (error) {
        return NextResponse.json("Error deleting ticket", 500);
    }
}