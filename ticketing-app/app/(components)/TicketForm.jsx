"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { TextArea } from "@/components/ui/textarea";

const TicketForm = ({ ticket }) => {
  const EDITMODE = ticket._id === "new" ? false : true;

  const router = useRouter();
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (EDITMODE) {
      const response = await fetch(`/api/Tickets/${ticket._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),

        "Content-Type": "application/json",
      });
      if (!response.ok) {
        throw new Error("Failed to Update ticket");
      }
    } else {
      const response = await fetch("/api/Tickets", {
        method: "POST",
        body: JSON.stringify({ formData }),

        "Content-Type": "application/json",
      });
      if (!response.ok) {
        throw new Error("Failed to create ticket");
      }
    }

    
    router.push("/");
  };

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  };

  if (EDITMODE) {
    startingTicketData["title"] = ticket.title;
    startingTicketData["description"] = ticket.description;
    startingTicketData["priority"] = ticket.priority;
    startingTicketData["progress"] = ticket.progress;
    startingTicketData["status"] = ticket.status;
    startingTicketData["category"] = ticket.category;
  }

  const [formData, setFormData] = useState(startingTicketData);
  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="POST"
        onSubmit={handleSubmit}
      >
        <h3>{EDITMODE ? "Update Your Ticket" : "Create Your Ticket"}</h3>
        <label>Title</label>
        <input
          type="text"
          name="title"
          className="m-1 rounded  bg-card p-1"
          value={formData.title}
          onChange={handleChange}
        />
        <label>Description</label>
        <textarea
          name="description"
          className="m-1 rounded  bg-card p-1"
          value={formData.description}
          rows={5}
          onChange={handleChange}
          required={true}
        />
        <label>Category</label>
        <select
          value={formData.category}
          onChange={handleChange}
          name="category"
        >
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Network Problem">Network Problem</option>
        </select>
        <label>Priority</label>
        <div>
          <input
            type="radio"
            name="priority"
            value={1}
            onChange={handleChange}
            checked={formData.priority == 1}
          />
          <label>1</label>
          <input
            type="radio"
            name="priority"
            value={2}
            onChange={handleChange}
            checked={formData.priority == 2}
          />
          <label>2</label>
          <input
            type="radio"
            name="priority"
            value={3}
            onChange={handleChange}
            checked={formData.priority == 3}
          />
          <label>3</label>
          <input
            type="radio"
            name="priority"
            value={4}
            onChange={handleChange}
            checked={formData.priority == 4}
          />
          <label>4</label>
          <input
            type="radio"
            name="priority"
            value={5}
            onChange={handleChange}
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>
        <label htmlFor="">Progress</label>
        <input
          type="range"
          name="progress"
          value={formData.progress}
          onChange={handleChange}
          min={0}
          max={100}
        />
        <label>Status</label>
        <select value={formData.status} onChange={handleChange} name="status">
          <option value="not started">Not Started</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <input
          type="submit"
          className="btn"
          value={EDITMODE ? "Update Your Ticket" : "Create Your Ticket"}
        />
      </form>
    </div>
  );
};

export default TicketForm;
