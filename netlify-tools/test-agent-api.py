#!/usr/bin/env python3

import inspect
from agno.agent import Agent
from agno.models.openai import OpenAIChat

def print_class_methods(cls):
    """Print the methods of a class."""
    print(f"\nMethods for {cls.__name__}:")
    
    methods = inspect.getmembers(cls, predicate=inspect.isfunction)
    for name, method in methods:
        if not name.startswith('_'):  # Skip private methods
            try:
                sig = inspect.signature(method)
                print(f"  - {name}{sig}")
            except (ValueError, TypeError):
                print(f"  - {name}()")

def create_test_agent():
    """Create a simple test agent."""
    return Agent(
        name="Test Agent",
        model=OpenAIChat(id="gpt-4o"),
        description="A simple test agent",
        instructions=["Help test the agent API"]
    )

if __name__ == "__main__":
    print("Agno Agent API Inspector")
    print("=======================")
    
    try:
        print_class_methods(Agent)
        
        # Create an agent instance
        test_agent = create_test_agent()
        
        # Print instance methods
        print("\nAgent instance methods:")
        for method_name in dir(test_agent):
            if not method_name.startswith('_'):
                method = getattr(test_agent, method_name)
                if callable(method):
                    try:
                        sig = inspect.signature(method)
                        print(f"  - {method_name}{sig}")
                    except (ValueError, TypeError):
                        print(f"  - {method_name}()")
    except Exception as e:
        print(f"Error inspecting Agent: {e}") 