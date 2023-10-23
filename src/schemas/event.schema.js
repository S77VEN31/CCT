import { z } from 'zod';

export const eventSchema = z.object({
    title: z.string().min(3).max(255),
    description: z.string().min(3).max(255),
    startTime: z.date(),
    endTime: z.date(),
    location: z.string().min(3).max(255),
    capacity: z.number().int().positive(),
    requiredCollaborators: z.number().int().positive(),
    categoryName: z.string().min(3).max(255),
}).strict()