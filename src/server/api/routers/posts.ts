import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
    getAll: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.post.findMany();
    }),
    getSomebodys: publicProcedure
        .input(
            z.object({
                author: z.string(),
            }),
        )
        .query(({ ctx, input }) => {

            return ctx.prisma.post.findMany({
                where: {
                    authorID: input.author,
                },
            })
        }),
    createChirp: publicProcedure
        .input(
            z.object({
                content: z.string(),
                authorID: z.string(),
            }),
        )
        .mutation(({ ctx, input }) => {

            return ctx.prisma.post.create({
                data: {
                    authorID: input.authorID,
                    content: input.content
                },
            })
        }),
});
