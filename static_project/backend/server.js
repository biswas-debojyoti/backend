import express from "express"
import cors from  'cors';
const app = express()
const port  =process.env.PORT || 3000;
app.use(cors())
app.get('/',(req,res)=> {
res.send("this is home page")
})
app.get ('/api/jokes',(req,res) => {
    const jokes = [
        {
          "id": 1,
          "title": "Why don't skeletons fight?",
          "content": "Because they don't have the guts!"
        },
        {
          "id": 2,
          "title": "What do you call fake spaghetti?",
          "content": "An impasta!"
        },
        {
          "id": 3,
          "title": "Why did the scarecrow win an award?",
          "content": "Because he was outstanding in his field!"
        },
        {
          "id": 4,
          "title": "Why did the math book look sad?",
          "content": "Because it had too many problems!"
        },
        {
          "id": 5,
          "title": "How does the ocean say hi?",
          "content": "It waves!"
        },
        {
          "id": 6,
          "title": "Why don’t eggs tell jokes?",
          "content": "Because they might crack up!"
        },
        {
          "id": 7,
          "title": "Why couldn't the bicycle stand up by itself?",
          "content": "Because it was two-tired!"
        },
        {
          "id": 8,
          "title": "What do you call cheese that isn't yours?",
          "content": "Nacho cheese!"
        },
        {
          "id": 9,
          "title": "Why do cows wear bells?",
          "content": "Because their horns don’t work!"
        },
        {
          "id": 10,
          "title": "What did one plate say to the other plate?",
          "content": "Lunch is on me!"
        },
        {
          "id": 11,
          "title": "Why did the golfer bring two pairs of pants?",
          "content": "In case he got a hole in one!"
        },
        {
          "id": 12,
          "title": "Why can't your nose be 12 inches long?",
          "content": "Because then it would be a foot!"
        },
        {
          "id": 13,
          "title": "What do you call a bear with no teeth?",
          "content": "A gummy bear!"
        },
        {
          "id": 14,
          "title": "Why do we never see elephants hiding in trees?",
          "content": "Because they’re really good at it!"
        },
        {
          "id": 15,
          "title": "Why do ducks have feathers?",
          "content": "To cover their butt quacks!"
        },
        {
          "id": 16,
          "title": "Why did the tomato turn red?",
          "content": "Because it saw the salad dressing!"
        },
        {
          "id": 17,
          "title": "What did the janitor say when he jumped out of the closet?",
          "content": "Supplies!"
        },
        {
          "id": 18,
          "title": "What do you call a sleeping bull?",
          "content": "A bulldozer!"
        },
        {
          "id": 19,
          "title": "Why don't fish play basketball?",
          "content": "Because they’re afraid of the net!"
        },
        {
          "id": 20,
          "title": "Why did the cookie go to the doctor?",
          "content": "Because it felt crummy!"
        }
      ];
      
    res.send (jokes)
})
app.listen(port,() => {
    console.log(`server is serving at ${port}`)
})
 


