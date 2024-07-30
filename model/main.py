from transformers import pipeline

messages = [
    {"role": "user", "content": "Кто ты?"},
]
pipe = pipeline("text-generation", model="AnatoliiPotapov/T-lite-0.1")

def data(text):
    for row in text:
        yield row

for out in pipe(data(messages)):
    print(out)
