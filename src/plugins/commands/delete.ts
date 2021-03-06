/*
* delete command:  deletes specific messages by the provided ID.  (very redundant command, but who gives a shit.)
*/

import Discord from 'discord.js';

module.exports = {
    run: async (client: Discord.Client, message: Discord.Message, args: string[]) => {
        args = args.join(' ').split(',');
        if (!message.member?.permissions.has(['MANAGE_MESSAGES']) || !message.member?.permissions.has(['ADMINISTRATOR'])) return;
        for (const arg of args) {
            try {
                const msg = await (client.channels.cache.get(`${message.channel.id}`) as any).messages.fetch(`${arg}`);
                msg.delete();
            } catch (e) {
                message.reply(`Message ID ${arg} seems to not exist(make sure it's 18 characters that *are* numbers), Or I am lacking permissions to delete messages`);
            }
        }
    },
    aliases: ['del'],
    description: 'Deletes specific messages (requires giving the message ID)',
    type: 'mod',
    usage: 'delete <msgID>, <msgID>, ...'
}
