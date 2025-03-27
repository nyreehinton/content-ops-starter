#!/usr/bin/env python3

import inspect
from agno.tools.file import FileTools
from agno.tools.shell import ShellTools

def print_class_init_params(cls):
    """Print the parameters of a class's __init__ method."""
    print(f"\nParameters for {cls.__name__}.__init__:")
    
    sig = inspect.signature(cls.__init__)
    for name, param in sig.parameters.items():
        if name != 'self':
            default = param.default if param.default is not inspect.Parameter.empty else "No default"
            print(f"  - {name}: {default}")

if __name__ == "__main__":
    print("Agno Tools Parameter Inspector")
    print("==============================")
    
    try:
        print_class_init_params(FileTools)
    except Exception as e:
        print(f"Error inspecting FileTools: {e}")
        
    try:
        print_class_init_params(ShellTools)
    except Exception as e:
        print(f"Error inspecting ShellTools: {e}") 