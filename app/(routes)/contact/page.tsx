"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { ContactForm } from "@/components/contact/contact-form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { socialLinks } from "@/data/social";

export default function ContactPage() {
  // Get icon component for social links
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <Github className="h-5 w-5" />;
      case "linkedin":
        return <Linkedin className="h-5 w-5" />;
      case "mail":
        return <Mail className="h-5 w-5" />;
      case "phone":
        return <Phone className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-12 md:py-20 lg:py-24">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <SectionHeader
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? I&apos;d love to hear from you!"
        />

        <div className="grid gap-6 md:gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="order-2 lg:order-1"
          >
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl">Send me a message</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Fill out the form below and I&apos;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <Card className="h-full">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl">Connect with me</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  You can also reach out to me directly through these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center rounded-md border p-3 sm:p-4 transition-colors hover:bg-muted"
                  >
                    <div className="mr-3 sm:mr-4 rounded-full bg-primary/10 p-2">
                      <div className="h-4 w-4 sm:h-5 sm:w-5">
                        {getIconComponent(social.icon)}
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium text-sm sm:text-base">{social.name}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground truncate">
                        {social.url.replace(/(mailto:|tel:|https:\/\/)/g, "")}
                      </p>
                    </div>
                  </motion.a>
                ))}

                <div className="mt-auto pt-4 sm:pt-6">
                  <h3 className="font-medium mb-2 text-sm sm:text-base">Current Location</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Jaipur, Rajasthan, India
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}