from transformers import pipeline

from fastapi import FastAPI

from pydantic import BaseModel

class gen(BaseModel):
    role: str
    content: str

messages = [
    {"role": "user", "content": "Кто ты?"},
]
pipe = pipeline("text-generation", model="AnatoliiPotapov/T-lite-0.1")

def data(text):
    for row in text:
        yield row

for out in pipe(data(messages)):
    print(out)


app = FastAPI()

@app.post("/")
def gen(Gen: gen):
    return pipe([{"role": gen.role, "content": gen.content},])