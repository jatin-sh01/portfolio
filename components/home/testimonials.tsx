"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  position: string;
  image?: string;
  relation: string;
  date: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: "Puran",
    name: "Puran Kalapala",
    position: "Strategic professional with strong business acumen",
    relation: "Mentor",
    date: "Dec 10, 2024",
    quote: "Jatin has consistently demonstrated a strong work ethic, technical proficiency, and exceptional leadership skills throughout his tenure. As a student council member, Jatin played a pivotal role in organizing and executing various student events."
  }, 
  
  {
    id: "Vibash",
    name: "Vibash Joshi",
    position: "Scj Entertainment",
    relation: "Manager",
    date: "July 27, 2024",
    quote: "I am pleased to recommend Jatin for his exceptional technical and leadership skills. As a Technical Executive, he oversaw technical operations using advanced methodologies to achieve project milestones and foster innovation."
  }
];

export function Testimonials() {
  return (
    <section className="py-12 md:py-20 lg:py-24 relative overflow-hidden">      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
            Recommendations
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl/relaxed mt-4 sm:mt-6">
            What mentors and colleagues say about my work
          </p>
        </motion.div>
        
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-4 sm:p-6">
                  <Quote className="h-8 w-8 sm:h-10 sm:w-10 text-primary/20 mb-4" />
                  
                  <p className="italic text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-3 sm:gap-4">
                    <Avatar className="h-10 w-10 sm:h-12 sm:w-12 border-2 border-primary/20 flex-shrink-0">
                      <AvatarFallback className="bg-primary/10 text-primary text-sm sm:text-base">
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-sm sm:text-base">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{testimonial.position}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.relation} • {testimonial.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}