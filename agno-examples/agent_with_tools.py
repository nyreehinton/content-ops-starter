from agno.agent import Agent
from agno.models.openai import OpenAIChat
from agno.tools.duckduckgo import DuckDuckGoTools

# Create an agent with DuckDuckGo search capability
agent = Agent(
    model=OpenAIChat(id="gpt-4o"),
    description="You are a helpful research assistant that can search the web for information.",
    tools=[DuckDuckGoTools()],
    show_tool_calls=True,
    markdown=True
)

# Example usage
if __name__ == "__main__":
    print("Agno Agent Example - Agent with Web Search")
    print("-----------------------------------------")
    print("Type 'exit' to quit\n")
    
    while True:
        user_input = input("User: ")
        if user_input.lower() == 'exit':
            break
        
        agent.print_response(user_input, stream=True) 