#!/usr/bin/env python3

import inspect
from agno.playground import Playground
from agno.agent import Agent
from agno.models.openai import OpenAIChat

def print_class_methods(cls):
    """Print the methods of a class."""
    print(f"\nMethods for {cls.__name__}:")
    
    methods = inspect.getmembers(cls, predicate=inspect.isfunction)
    for name, method in methods:
        if not name.startswith('_'):  # Skip private methods
            sig = inspect.signature(method)
            print(f"  - {name}{sig}")

def create_test_agent():
    """Create a simple test agent."""
    return Agent(
        name="Test Agent",
        model=OpenAIChat(id="gpt-4o"),
        description="A simple test agent",
        instructions=["Help test the playground API"]
    )

if __name__ == "__main__":
    print("Agno Playground API Inspector")
    print("=============================")
    
    try:
        print_class_methods(Playground)
        
        # Create a playground instance
        test_agent = create_test_agent()
        playground = Playground(test_agent)
        
        # Print instance methods
        print("\nPlayground instance methods:")
        for method_name in dir(playground):
            if not method_name.startswith('_'):
                method = getattr(playground, method_name)
                if callable(method):
                    try:
                        sig = inspect.signature(method)
                        print(f"  - {method_name}{sig}")
                    except (ValueError, TypeError):
                        print(f"  - {method_name}()")
    except Exception as e:
        print(f"Error inspecting Playground: {e}") 