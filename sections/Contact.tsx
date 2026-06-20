import Button from "components/Button";
import Input from "components/Input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPaperPlane } from "react-icons/fa";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSubmitted, setSubmitted] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    const response = await fetch("https://formspree.io/f/mwpvnopr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setSubmitted(true);
    }
  });

  if (isSubmitted) {
    return (
      <div
        id={Section.Contact}
        className="rounded-xl border border-border bg-surface/65 p-5 shadow-ring backdrop-blur lg:p-6"
      >
        {getSectionHeading(Section.Contact)}
        <div className="max-w-xl">
          <h3 className="text-xl font-semibold text-foreground">Message sent successfully.</h3>

          <p className="mt-3 text-muted leading-7">
            Thank you for reaching out. I&apos;ll review your message and get back to you as soon as possible.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      id={Section.Contact}
      className="rounded-xl border border-border bg-surface/65 p-5 shadow-ring backdrop-blur  lg:p-6"
    >
      {getSectionHeading(Section.Contact)}
      <p className="mb-6 text-muted leading-7">Have a project, opportunity, or question? Feel free to reach out.</p>

      <form onSubmit={onSubmit} className="grid gap-8">
        <Input
          type="text"
          label="Your Name"
          className="w-full"
          hasError={!!errors.name}
          placeholder="Name"
          description={errors.name?.message?.toString() || ""}
          {...register("name", {
            required: { value: true, message: "This is a required field" },
            minLength: { value: 2, message: "Your name must be at least 2 characters long" },
          })}
        />

        <Input
          type="email"
          label="Your Email"
          className="w-full"
          hasError={!!errors.email}
          placeholder="email@gmail.com"
          description={errors.email?.message?.toString() || ""}
          {...register("email", {
            required: { value: true, message: "This is a required field" },
            pattern: { value: /^\S+@\S+\.\S+$/, message: "Please enter a valid email address" },
          })}
        />

        <Input
          type="tel"
          label="Your Contact Number"
          className="w-full"
          hasError={!!errors.contact}
          placeholder="+91 XXXXX XXXXX"
          description={errors.contact?.message?.toString() || ""}
          {...register("contact", {
            required: { value: true, message: "This is a required field" },
            pattern: { value: /^[6-9]\d{9}$/, message: "Please enter a valid 10-digit contact number" },
          })}
        />

        <Input
          type="textarea"
          label="Your Message"
          hasError={!!errors.message}
          placeholder="Type your message here"
          description={errors.message?.message?.toString() || ""}
          {...register("message", {
            required: { value: true, message: "This is a required field" },
            minLength: { value: 10, message: "Your message must be at least 10 characters long" },
          })}
        />

        <Button onClick={onSubmit} icon={FaPaperPlane} className="mt-2">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default Contact;
