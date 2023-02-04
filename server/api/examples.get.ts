/**
 * Fetch all `examples` from the database. Run `npx prisma generate` and `npx prisma db push` for this to work.
 *
 * If you are using `tRPC` you can access the prisma-client by adding it to the context:
 * ```ts
 * export async function createContext(event: H3Event) {
 *   return { prisma: event.context.prisma }
 * }
 *
 * export type Context = inferAsyncReturnType<typeof createContext>
 * ```
 */
export default defineEventHandler(event => event.context.prisma.post.findMany())
