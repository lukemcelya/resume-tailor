from fastapi import FastAPI

app = FastAPI(title="ResumeTailor API")

@app.get("/")
def root():
    return {"message": "ResumeTailor API is running!"}

@app.get("/health")
def health():
    return {"status": "healthy"}