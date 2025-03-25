from agno.agent import Agent
from agno.models.openai import OpenAIChat
from agno.tools.duckduckgo import DuckDuckGoTools
from agno.team import Team

# Create a web search agent
web_agent = Agent(
    name="Web Agent",
    role="Search the web for information",
    model=OpenAIChat(id="gpt-4o"),
    tools=[DuckDuckGoTools()],
    instructions="Always include sources",
    show_tool_calls=True,
    markdown=True,
)

# Create a finance specialized agent
# Note: In a real scenario, you might want to add YFinanceTools, but we're keeping it simple for now
finance_agent = Agent(
    name="Finance Agent",
    role="Analyze financial information",
    model=OpenAIChat(id="gpt-4o"),
    instructions="Provide structured analysis of financial data",
    show_tool_calls=True,
    markdown=True,
)

# Create a team with these agents
agent_team = Agent(
    mode="coordinate",
    members=[web_agent, finance_agent],
    model=OpenAIChat(id="gpt-4o"),
    success_criteria="A comprehensive and well-structured answer with accurate information.",
    instructions=["Always include sources", "Provide clear analysis"],
    show_tool_calls=True,
    markdown=True,
)

# Example usage
if __name__ == "__main__":
    print("Agno Agent Example - Agent Team")
    print("-------------------------------")
    print("Type 'exit' to quit\n")
    
    while True:
        user_input = input("User: ")
        if user_input.lower() == 'exit':
            break
        
        agent_team.print_response(user_input, stream=True) 