import express from "express"
import cors from "cors"
import ImageKit from "imagekit"
import mongoose from "mongoose";
import UserChats from "./models/userChats.js";
import Chat from "./models/chat.js";
import { requireAuth } from '@clerk/express'

const port = process.env.PORT || 3000;
const app = express();

app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    })
);

app.use(express.json());

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log(err);
    }
}

const imagekit = new ImageKit({
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY
});

app.get("/api/upload", (req, res) => {
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
});

// app.get("/api/test", requireAuth(), (req, res) => {
//     const userId = req.auth.userId;
//     console.log(userId);
//     res.send("Success!")
// });

app.post("/api/chats",
    requireAuth(),
    async (req, res) => {

        const { text } = req.body;
        const userId = req.auth.userId;

        try {
            // CREATE A NEW CHAT
            const newChat = new Chat({
                userId: userId,
                history: [{ role: "user", parts: [{ text }] }],
            });

            const savedChat = await newChat.save();

            // CHECK IF THE USERCHATS EXIST
            const userChats = await UserChats.find({ userId: userId });

            // IF NOT EXIST CREATE NEW THEN ADD TO ARR
            if (!userChats.length) {
                const newUserChats = new UserChats({
                    userId: userId,
                    chats: [
                        {
                            _id: savedChat._id,
                            title: text.substring(0, 40),
                        },
                    ],
                });

                await newUserChats.save();
                res.status(201).send(savedChat._id);
            } else {
                // IF EXISTS, PUSH THE CHAT TO THE EXISTING ARRAY
                await UserChats.updateOne(
                    { userId: userId },
                    {
                        $push: {
                            chats: {
                                _id: savedChat._id,
                                title: text.substring(0, 40),
                            },
                        },
                    }
                );

                res.status(201).send(newChat._id);
            }
        } catch (err) {
            console.log(err);
            res.status(500).send("Error fetching userchats!")
        }
    });

app.get("/api/userchats", requireAuth(), async (req, res) => {
    const userId = req.auth.userId;

    try {
        const userChats = await UserChats.find({ userId });

        res.status(200).send(userChats[0].chats);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error fetching userchats!")
    }
})


app.get("/api/chats/:id", requireAuth(), async (req, res) => {
    const userId = req.auth.userId;

    try {
        const chat = await Chat.findOne({ _id: req.params.id, userId });

        res.status(200).send(chat);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error fetching chat!")
    }
});

app.put("/api/chats/:id", requireAuth(), async (req, res)=>{
    const userId = req.auth.userId;

    const {question, answer, img} = req.body;
    const newItems = [
        ...(question ? [{role: "user", parts: [{ text: question }], ... (img && { img })}] : []),
        { role: "model", parts: [{ text: answer }] },
    ];

    try {
        const updatedChat = await Chat.updateOne({_id: req.params.id, userId}, {
            $push: {
                history: {
                    $each: newItems,
                }
            }
        });
        res.status(200).send(updatedChat);
    } catch (err) {
        console.log(err)
        res.status(500).send("Error adding conversation!")
    }
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(401).send("Unauthenticated!");
});

app.listen(port, () => {
    connect();
    console.log("Server running on 3000")
});