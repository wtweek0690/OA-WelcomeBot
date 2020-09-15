const config = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});



client.on('guildMemberAdd', member => {

    const reaction_yes = config.reaction_yes;
    const reaction_no = config.reaction_no;
    const special_react_emote = config.special_react_emote;

    const first = member.send("http://46.101.247.248/1.png");
    first.then(msg => {
        const second = member.send("http://46.101.247.248/02.gif");
        second.then(msg => {
            const third = member.send("http://46.101.247.248/3.png");
            third.then(msg => {
                const fourth = member.send("Welcome To Our OA Community! We'd like to show you around!")

                fourth.then(msg => {
                    member.send(`> To see the tutorial react with <:${reaction_yes.name}:${reaction_yes.id}> To skip simply react with <:${reaction_no.name}:${reaction_no.id}> ${config.first_emote}`).then(msg => {
                        msg.react(reaction_yes.id)
                        msg.react(reaction_no.id)
                        msg.awaitReactions((reaction, user) => user.id == member.user.id && (reaction.emoji.name == reaction_yes.name || reaction.emoji.name == reaction_no.name), {
                            max: 1,
                            time: 6.048e+8
                        }).then(collected => {
                            if (collected.first().emoji.name == reaction_yes.name) {

                                member.send("http://46.101.247.248/4.png").then(msg => {
                                    member.send([
                                        "*This is your home page, you will access everything you need to learn about our community here! I'll let you get settled, once you're ready to explore more of OA, click YES!*",
                                        "",
                                        "*If you'd like to end the tutorial here, click no!*"
                                    ]).then(msg1 => {
                                        msg1.react(reaction_yes.id)
                                        msg1.react(reaction_no.id)
                                        msg1.awaitReactions((reaction1, user1) => user1.id == member.user.id && (reaction1.emoji.name == reaction_yes.name || reaction1.emoji.name == reaction_no.name), {
                                            max: 1,
                                            time: 6.048e+8
                                        }).then(collected1 => {
                                            if (collected1.first().emoji.name == reaction_yes.name) {

                                                member.send("http://46.101.247.248/5.png").then(msg2 => {
                                                    member.send([
                                                        "*All the information you'll ever need will be here. Travel and explore these channels, once you're ready to explore more of our OA, then click YES*",
                                                        "",
                                                        "*If you'd like to end the tutorial here, click no!*"
                                                    ]).then(msg3 => {
                                                        msg3.react(reaction_yes.id)
                                                        msg3.react(reaction_no.id)

                                                        msg3.awaitReactions((reaction2, user2) => user2.id == member.user.id && (reaction2.emoji.name == reaction_yes.name || reaction2.emoji.name == reaction_no.name), {
                                                            max: 1,
                                                            time: 6.048e+8
                                                        }).then(collected2 => {
                                                            if (collected2.first().emoji.name == reaction_yes.name) {

                                                                member.send("http://46.101.247.248/6.png").then(msg4 => {
                                                                    member.send([
                                                                        `*To stand out within our OA, make sure to select the roles that apply you in the <#${config.roles_channelid}> channel! You may do this now, once you're ready to explore more of our OA, then click YES*`,
                                                                        "",
                                                                        "*If you'd like to end the tutorial here, click no!*"
                                                                    ]).then(msg5 => {
                                                                        msg5.react(reaction_yes.id)
                                                                        msg5.react(reaction_no.id)
                                                                        msg5.awaitReactions((reaction3, user3) => user3.id == member.user.id && (reaction3.emoji.name == reaction_yes.name || reaction3.emoji.name == reaction_no.name), {
                                                                            max: 1,
                                                                            time: 6.048e+8
                                                                        }).then(collected3 => {
                                                                            if (collected3.first().emoji.name == reaction_yes.name) {

                                                                                member.send("http://46.101.247.248/7.png").then(msg6 => {
                                                                                    member.send([
                                                                                        `*You've made it <@${member.user.id}> through the tutorial & we're so proud of you! Remember to invite all your friends and spread the news about our wonderful adventures!*`,
                                                                                    ]).then(msg7 => {
                                                                                        msg7.react(special_react_emote.id)
                                                                                        msg7.awaitReactions((reaction4, user3) => user3.id == member.user.id && reaction4.emoji.name == special_react_emote.name, {
                                                                                            max: 1,
                                                                                            time: 6.048e+8
                                                                                        }).then(reaction4 => {
                                                                                            if (reaction4.first().emoji.name == special_react_emote.name) {
                                                                                                member.roles.add(member.guild.roles.cache.find(role => role.id === "706033328096280586"))
                                                                                            }
                                                                                        })
                                                                                        member.send("http://46.101.247.248/8.png").then(msg8 => {
                                                                                            member.send([
                                                                                                `*Start Chatting Now <#${config.mainchat_channelid}>*`,
                                                                                            ])
                                                                                        })
                                                                                    })
                                                                                })

                                                                            } else
                                                                                member.send(`Thanks for being with us. Please head over to <#${config.mainchat_channelid}> to chat with your new friends.`);
                                                                        }).catch(() => {
                                                                            member.send('No reaction after 7 days, operation canceled');
                                                                        });
                                                                    })
                                                                })

                                                            } else
                                                                member.send(`Thanks for being with us. Please head over to <#${config.mainchat_channelid}> to chat with your new friends.`);

                                                        }).catch(() => {
                                                            member.send('No reaction after 7 days, operation canceled');
                                                        });
                                                    })
                                                })

                                            } else
                                                member.send(`Thanks for being with us. Please head over to <#${config.mainchat_channelid}> to chat with your new friends.`);
                                        }).catch(() => {
                                            member.send('No reaction within 7 days, operation canceled');
                                        });
                                    })
                                })

                            } else
                                member.send(`Thanks for being with us. Please head over to <#${config.mainchat_channelid}> to chat with your new friends.`);
                        }).catch(() => {
                            member.send('No reaction after 7 days, operation canceled');
                        });

                    })
                })
            })
        })
    })
});

client.login(config.token);