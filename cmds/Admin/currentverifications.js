const Discord = require("discord.js");
const config = require("../../config.json");
const cverify = require('../../currentverifications.json')
module.exports.run = async (client, msg, args) => {
    let amount = cverify.list.length;
    let people = [];
    let users;
    for (var i = 0; i < amount; i++) {
        people.push('<@' + cverify.list[i] + '>')
    }
    if (amount === 0) {
        users = none;
    }else {
        for (var i = 0; i < people.length; i++) {
            if (i === 0) {
                users = people[i]
            } else {
                users = users + '\n ' +  people[i];
            }
        }
    }
    msg.channel.send({
        embed: {
            description: 'Stats of the verification process',
            fields: [{
                name: "Number of People Verifying right now.",
                value: amount
              },
              {
                name: "Users",
                value: users
              }
            ],
        }
    })
}
module.exports.help = {
    name: 'cverify',
    role: config.modrole,
    usage: '',
    desc: `Lists the current people verifying`,
    example: ''
}