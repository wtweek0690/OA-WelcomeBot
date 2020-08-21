const config = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
    member.send("https://i.imgur.com/adYZUJs.jpg");
    member.send("Welcome To Our OA Community! We'd like to show you around!")
    member.send(`> Agree to see tutorial, disagree to skip! ${config.first_emote}`).then(msg => {
        msg.react(config.reaction_yes)
        msg.react(config.reaction_no)
        msg.awaitReactions((reaction, user) => user.id == member.user.id && (reaction.emoji.name == config.reaction_yes || reaction.emoji.name == config.reaction_no),
        { max: 1, time: 6.048e+8 }).then(collected => {
                if (collected.first().emoji.name == config.reaction_yes) {
                    
                    member.send("https://i.imgur.com/DzUxHJG.jpg").then(msg => {
                        member.send([
                            "*This is your home page, you will access everything you need to learn about our community here! I'll let you get settled, once you're ready to explore more of OA, click YES!*",
                            "",
                            "*If you'd like to end the tutorial here, click no!*"
                        ]).then(msg1 => {
                            msg1.react(config.reaction_yes)
                            msg1.react(config.reaction_no)
                            msg1.awaitReactions((reaction1, user1) => user1.id == member.user.id && (reaction1.emoji.name == config.reaction_yes || reaction1.emoji.name == config.reaction_no),
                            { max: 1, time: 6.048e+8 }).then(collected1 => {
                                    if (collected1.first().emoji.name == config.reaction_yes) {
                                        
                                        member.send("https://i.imgur.com/fSO0MU8.jpg").then(msg2 => {
                                            member.send([
                                                "*All the information you'll ever need will be here. Travel and explore these channels, once you're ready to explore more of our OA, then click YES*",
                                                "",
                                                "*If you'd like to end the tutorial here, click no!*"
                                            ]).then(msg3 => {
                                                msg3.react(config.reaction_yes)
                                                msg3.react(config.reaction_no)

                                                msg3.awaitReactions((reaction2, user2) => user2.id == member.user.id && (reaction2.emoji.name == config.reaction_yes || reaction2.emoji.name == config.reaction_no),
                                                { max: 1, time: 6.048e+8 }).then(collected2 => {
                                                        if (collected2.first().emoji.name == config.reaction_yes) {
                                                            
                                                            member.send("https://i.imgur.com/ojhHiBa.jpg").then(msg4 => {
                                                                member.send([
                                                                    `*To stand out within our OA, make sure to select the roles that apply you in the <#${config.roles_channelid}> channel! You may do this now, once you're ready to explore more of our OA, then click YES*`,
                                                                    "",
                                                                    "*If you'd like to end the tutorial here, click no!*"
                                                                ]).then(msg5 => {
                                                                    msg5.react(config.reaction_yes)
                                                                    msg5.react(config.reaction_no)
                                                                    msg5.awaitReactions((reaction3, user3) => user3.id == member.user.id && (reaction3.emoji.name == config.reaction_yes || reaction3.emoji.name == config.reaction_no),
                                                                    { max: 1, time: 6.048e+8 }).then(collected3 => {
                                                                            if (collected3.first().emoji.name == config.reaction_yes) {
                                                                                
                                                                                member.send("https://i.imgur.com/gJ4gcTV.jpg").then(msg6 => {
                                                                                    member.send([
                                                                                        `*You've made it <@${member.user.id}> through the tutorial & we're so proud of you! Remember to invite all your friends and spread the news about our wonderful adventures!!! React for your special role!*`,
                                                                                    ]).then(msg7 => {
                                                                                        msg7.react(config.special_react_emote)
                                                                                        member.send("https://i.imgur.com/UD1tj91.jpg").then(msg8 => {
                                                                                            member.send([
                                                                                                `*Start Chatting Now <#${config.mainchat_channelid}>*`,
                                                                                            ])
                                                                                        })
                                                                                    })
                                                                                })
                
                                                                            }
                                                                            else
                                                                                member.send(`Thanks for being with us. Please head over to <#${config.mainchat_channelid}> to chat with your new friends.`);
                                                                    }).catch(() => {
                                                                        member.send('No reaction after 7 days, operation canceled');
                                                                    });
                                                                })
                                                            })

                                                        }
                                                        else
                                                            member.send(`Thanks for being with us. Please head over to <#${config.mainchat_channelid}> to chat with your new friends.`);

                                                }).catch(() => {
                                                    member.send('No reaction after 7 days, operation canceled');
                                                });
                                            })
                                        })

                                    }
                                    else
                                        member.send(`Thanks for being with us. Please head over to <#${config.mainchat_channelid}> to chat with your new friends.`);
                            }).catch(() => {
                                member.send('No reaction within 7 days, operation canceled');
                            });
                        })
                    })

                }
                else
                    member.send(`Thanks for being with us. Please head over to <#${config.mainchat_channelid}> to chat with your new friends.`);
        }).catch(() => {
            member.send('No reaction after 7 days, operation canceled');
        });

    }) 
});

client.login(config.token);