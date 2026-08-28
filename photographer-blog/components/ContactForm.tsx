"use client";
import { useState } from "react";
export default function ContactForm() {
    const[name, setName] =useState("");
    const [email, setEmail] = useState("");
    const[message, setMessage]  = useState("");
    const handleSubmit = (
        e:React.FormEvent<HTMLFormElement>)=>  {
            e.preventDefault();
        }
        return (
            <form onSubmit = {handleSubmit}
            className="space-y-6">

            </form>

        )

}