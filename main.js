async function onLoad() {}

function test1(msgInfo) {
  return {
    handler: "default",
    data: {
      content: "Successfully executed code in example plugin 1 - type A."
    }
  }
}

return { test1 }
