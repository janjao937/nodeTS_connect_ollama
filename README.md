# run ollama
docker-compose up -d
ollama pull llama3
ollama pull gemma3

# start on index.ts

## ollama CLI
ollama serve
ollama pull llama3
ollama pull [model name]
ollama list
ollama run llama3
ollama run [model name]