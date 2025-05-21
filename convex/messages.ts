import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getMessages = query({
  args: {},
  handler: async (ctx) => {
    const messages = await ctx.db.query("messages").order("asc").take(40);
    return messages;
  },
});

export const sendMessage = mutation({
  args: { content: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();
    if (user === null) {
      throw new Error("Unauthorized");
    }

    await ctx.db.insert("messages", {
      content: args.content,
      senderId: user.subject,
    });
  },
});
