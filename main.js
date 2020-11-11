async function onLoad() {}

function test1(msgInfo) {
  /* 
  msgInfo: {
    content: "/test1-a",
    args: [
      "/test1-a"
    ],
    senderID: "Facebook@!@User@!@1000xxxxxxxxxxx",
    threadID: "Facebook@!@Group@!@4xxxxxxxxxxxxxxx",
    serverID: "Facebook@!@Group@!@4xxxxxxxxxxxxxxx",
    messageID: "Facebook@!@Message@!@mid.xxxxxxx",
    configLevel: "thread", // thread or server depending on the interface
    attachments: [], // not supported as of now.
    userLanguage: "vi_VN",
    threadLanguage: "en_US",
    rawData: (instanceof Message)
  }
  */
  return {
    handler: "default",
    data: {
      content: "Successfully executed code in example plugin 1 - type A."
    }
  }
}

return { test1 }
