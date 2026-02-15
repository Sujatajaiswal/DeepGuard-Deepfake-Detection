# main.py
from fastapi import FastAPI

# Create the FastAPI app
app = FastAPI(title="Basic FastAPI Example", version="1.0")

# Root route
@app.get("/")
def read_root():
    return {"message": "Welcome to my FastAPI backend!"}

# Example API route
@app.get("/hello/{name}")
def say_hello(name: str):
    return {"message": f"Hello, {name}! 👋"}

# Example POST route
@app.post("/add")
def add_numbers(a: int, b: int):
    return {"sum": a + b}
