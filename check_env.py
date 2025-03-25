#!/usr/bin/env python3

import os
import sys
import subprocess
import importlib.util

def green(text):
    return f"\033[92m{text}\033[0m"

def red(text):
    return f"\033[91m{text}\033[0m"

def check_package(package_name):
    try:
        spec = importlib.util.find_spec(package_name)
        if spec is None:
            return False
        return True
    except ModuleNotFoundError:
        return False

def main():
    print("Checking Agno environment setup...\n")
    
    # Check Python version
    python_version = sys.version.split()[0]
    print(f"Python version: {python_version}")
    major, minor = map(int, python_version.split('.')[:2])
    if major < 3 or (major == 3 and minor < 7):
        print(red("❌ Python 3.7 or higher is required."))
    else:
        print(green("✅ Python version is compatible."))
    
    # Check for OpenAI API key
    openai_key = os.environ.get('OPENAI_API_KEY')
    if not openai_key:
        print(red("❌ OPENAI_API_KEY environment variable is not set."))
    else:
        masked_key = openai_key[:5] + "..." + openai_key[-2:] if len(openai_key) > 7 else "..."
        print(green(f"✅ OPENAI_API_KEY is set ({masked_key})."))
    
    # Check for Agno installation
    if check_package("agno"):
        print(green("✅ Agno library is installed."))
        
        # Try to get the version using pip
        try:
            result = subprocess.run(
                [sys.executable, "-m", "pip", "show", "agno"],
                capture_output=True,
                text=True
            )
            for line in result.stdout.split("\n"):
                if line.startswith("Version:"):
                    version = line.split(":", 1)[1].strip()
                    print(f"   Agno version: {version}")
                    break
        except:
            pass
    else:
        print(red("❌ Agno library is not installed. Run: pip install -U agno"))
    
    # Check for DuckDuckGo search
    if check_package("duckduckgo_search"):
        print(green("✅ DuckDuckGo search package is installed."))
    else:
        print(red("❌ DuckDuckGo search package is not installed. Run: pip install duckduckgo-search"))
    
    print("\nEnvironment check complete.")

if __name__ == "__main__":
    main() 