"use client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";

const TicketForm = () => {
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
    createdAt: new Date().toISOString(),
  };
  const [formData, setFormData] = useState(startingTicketData);
  return (
    <div className="flex justify-center">
      <form action="">
        <h3>Create your Ticket</h3>
        <Input
          label="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required={true}
        />
      </form>
    </div>
  );
};

export default TicketForm;
