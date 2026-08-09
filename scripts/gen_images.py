import asyncio
import os
import base64
from dotenv import load_dotenv

load_dotenv("/app/backend/.env")

from emergentintegrations.llm.chat import LlmChat, UserMessage, ImageContent


async def main():
    key = os.getenv("EMERGENT_LLM_KEY")

    chat = LlmChat(
        api_key=key,
        session_id="venue-car-1",
        system_message="You are an illustrator.",
    )
    chat.with_model("gemini", "gemini-3.1-flash-image-preview").with_params(
        modalities=["image", "text"]
    )
    msg = UserMessage(
        text="Storybook watercolor illustration of a cute little vintage car, side view, cream white car with a marigold and jasmine flower garland draped over the roof, subtle antique gold accents, plain solid ivory background hex FAF5EC, warm elegant South Indian wedding invitation art style, no text, no people, lots of empty margin around the car"
    )
    text, images = await chat.send_message_multimodal_response(msg)
    if images:
        with open("/tmp/car-raw.png", "wb") as f:
            f.write(base64.b64decode(images[0]["data"]))
        print("car saved")
    else:
        print("car FAILED:", text[:100])

    chat2 = LlmChat(
        api_key=key,
        session_id="ganesha-refine-1",
        system_message="You are an illustrator.",
    )
    chat2.with_model("gemini", "gemini-3.1-flash-image-preview").with_params(
        modalities=["image", "text"]
    )
    with open("/app/frontend/public/images/ganesha.webp", "rb") as f:
        ref = base64.b64encode(f.read()).decode()
    msg2 = UserMessage(
        text="Redraw this exact Lord Ganesha ornament as very fine, elegant, thin cream-gold line art on a pure solid black background. Keep the same composition, pose and shape, but make the lines clean, crisp and refined. Ceremonial high-resolution illustration, no text",
        file_contents=[ImageContent(ref)],
    )
    text2, images2 = await chat2.send_message_multimodal_response(msg2)
    if images2:
        with open("/tmp/ganesha-new-raw.png", "wb") as f:
            f.write(base64.b64decode(images2[0]["data"]))
        print("ganesha saved")
    else:
        print("ganesha FAILED:", text2[:100])


asyncio.run(main())
