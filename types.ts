import React from 'react';

export interface Review {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  date: string;
  imageUrl?: string;
}

export interface VideoTestimonial {
  id: string;
  name: string;
  location: string;
  result: string;
  thumbnailUrl: string;
  videoUrl: string; // Used for embed or modal
  duration: string;
}

export interface CurriculumModule {
  id: number;
  title: string;
  lessonCount: number;
  duration: string;
  lessons: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}