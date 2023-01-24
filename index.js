const websocket = require("websocket");
const client = new websocket.client();

client.on("connect", (connection) => {
  connection.on("message", (message) => {
    if (!message || message.type !== "utf8") return;
    const data = JSON.parse(message.utf8Data);
    if (data === "You have successfully subscribed") {
      return;
    }

    // do logic under here
  });

  connection.sendUTF(
    JSON.stringify({
      action: "subscribe",
      apiKey: "7fc5114e-ec60-4cc9-a2ad-6737b666561d",
      subscriptionId: "c3826e36-6d41-46ac-ac27-ae3e95363f19",
    })
  );
});

client.connect("wss://kiki-stream.hellomoon.io");
