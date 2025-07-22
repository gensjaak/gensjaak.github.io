"use client";

import { Sent02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const subject = encodeURIComponent("Let's connect Jean-Jacques!");
    const body = encodeURIComponent(
      `Hi Jean-Jacques,

I'd love to work with you.

Name: ${name}
Email: ${email}
Message: ${message}`
    );

    const mailto = `mailto:gensjaak@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailto;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name" className="contact-form-label">
        <span>Name</span>
        <input
          type="text"
          id="name"
          className="contact-form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="email" className="contact-form-label">
        <span>Email</span>
        <input
          type="email"
          id="email"
          className="contact-form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="message" className="contact-form-label">
        <span>Message</span>
        <textarea
          id="message"
          className="contact-form-input"
          rows={7}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <button
        type="submit"
        className="contact-form-button"
      >
        Send message{" "}
        <HugeiconsIcon icon={Sent02Icon} size={22} strokeWidth={2} />
      </button>
    </form>
  );
}
