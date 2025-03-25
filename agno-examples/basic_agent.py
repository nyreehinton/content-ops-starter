from agno.agent import Agent
from agno.models.openai import OpenAIChat

# Create a basic agent with an OpenAI model
agent = Agent(
    model=OpenAIChat(id="gpt-4o"),
    description="You are a helpful assistant that answers questions clearly and accurately.",
    markdown=True
)

# Example usage
if __name__ == "__main__":
    print("Agno Agent Example - Basic Agent")
    print("--------------------------------")
    print("Type 'exit' to quit\n")
    
    while True:
        user_input = input("User: ")
        if user_input.lower() == 'exit':
            break
        
        response = agent.generate_response(user_input)
        print(f"\nAgent: {response.content}\n") 