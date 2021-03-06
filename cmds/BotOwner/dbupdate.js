const Discord = require("discord.js");
const config = require("../../config.json");
module.exports.run = async (client, msg, args) => {
    if (msg.author.id !== '293445227501453313') return msg.reply('You are not the bot\'s owner!')
    msg.reply('Starting DB Upload now!')
    msg.guild.members.forEach(async member => {
            if (!member.roles.has(msg.guild.roles.get(config.member))) return;
            const username = member.displayName;
            try {
                const player = await client.db.create({
                    id: user.id,
                    realmName: username,
                    keyPops: 0,
                    leadRuns: 0,
                    raidRuns: 0,
                    vials: 0,
                });
                return msg.reply(`${user.id} was added to the database`)
            }
            catch (e) {
                if (e.name === 'SequelizeUniqueConstraintError') {
                    return console.log('That id already exists.');
                }
                return console.log(e);
            }
        })
    }
module.exports.help = {
    name: 'dbupdate',
    role: config.modrole,
    usage: '',
    desc: `Updates DB to be relevant`,
    example: ''
}