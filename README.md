## Getting Started

First create the file .env.local and add OPENAI_API_KEY in it, the value should be a valid key from openai 

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## App Description
this is a simple app that uses openai API that uses the chatGPT3.5 AI model to do some chat completions, 

the app is pretty straight forward, you will have a textarea where you can write a message and send it to the ai assistant and the AI will replay to you

when the user chats with the ai all the old messages are preserved, so with each new request the app is sending the entire chat to the AI model to precess it, for sure this has it is own downsides, since the app does not handle the maximum limit of messages edge case

## If I have more time I would:
1. connect the app to a database to same the user chats, also implement a simple auth flow
1. put a limit for how many message are going to be sent to the model to process them, maybe take the last N messages each time a user sends a new message
1. I would like to use something like react-query or useSWR to mange data fetching and caching and mutations and all of this jaz
1. a nice sidebar to show the user chats and allow him to navigate through them
1. more keyboard support like sending the message on `crtl/cmd + enter`
1. the UI doesn't look good, so I could spend sometime making it better
1. this is a very general AI chat, so I would like to spend time to understand what is the need and purpose of the ai-assistance more so I can develope more features to make it more specific for the use case