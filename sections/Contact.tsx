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
      <div id={Section.Contact} className="lg:w-1/2">
        {getSectionHeading(Section.Contact)}
        <p className="text-lg leading-loose">
          Thank you for your message.
          <br />
          I&apos;ll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <div id={Section.Contact} className="lg:w-1/2">
      {getSectionHeading(Section.Contact)}
      <form onSubmit={onSubmit} className="grid gap-8">
        
        <Input
          type="text"
          label="Your Name"
          className="md:w-3/4"
          hasError={!!errors.name}
          placeholder="Name"
          description={errors.name?.message?.toString() || "The one where you tell me your name"}
          {...register("name", {
            required: { value: true, message: "This is a required field" },
            minLength: { value: 2, message: "Your name must be at least 2 characters long" },
          })}
        />

        <Input
          type="email"
          label="Your Email"
          className="md:w-3/4"
          hasError={!!errors.email}
          placeholder="email@gmail.com"
          description={errors.email?.message?.toString() || "The one where you tell me how I can contact you back"}
          {...register("email", {
            required: { value: true, message: "This is a required field" },
            pattern: { value: /^\S+@\S+\.\S+$/, message: "Please enter a valid email address" },
          })}
        />

        <Input
          type="tel"
          label="Your Contact Number"
          className="md:w-3/4"
          hasError={!!errors.contact}
          placeholder="9876543210"
          description={errors.contact?.message?.toString() || "The one where you tell me your phone number"}
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
          description={errors.message?.message?.toString() || "The one where you tell me what I can do to help you"}
          {...register("message", {
            required: { value: true, message: "This is a required field" },
            minLength: { value: 10, message: "Your message must be at least 10 characters long" },
          })}
        />

        <Button onClick={onSubmit} icon={FaPaperPlane} className="mt-8">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default Contact;
