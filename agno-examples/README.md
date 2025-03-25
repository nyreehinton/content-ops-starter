# Agno Agent Examples

This directory contains examples of Agno agents with different capabilities.

## Setup

1. Install the Agno library:

   ```bash
   pip install -U agno
   ```

2. For web search functionality, install the DuckDuckGo package:

   ```bash
   pip install duckduckgo-search
   ```

3. Set up your OpenAI API key:
   ```bash
   export OPENAI_API_KEY=your_api_key_here
   ```

## Examples

### Basic Agent (basic_agent.py)

A simple agent that uses OpenAI's model to answer questions.

```bash
python3 basic_agent.py
```

### Agent with Web Search (agent_with_tools.py)

An agent that can search the web using DuckDuckGo to find information.

```bash
python3 agent_with_tools.py
```

### Agent Team (agent_team_example.py)

A team of specialized agents that work together to solve complex queries.

```bash
python3 agent_team_example.py
```

## Notes

- These examples use the OpenAI GPT-4o model by default. You can modify the code to use other models.
- The Agno library requires an API key for the chosen model (e.g., OpenAI API key).
- For more information and advanced usage, refer to the [Agno documentation](https://docs.agno.com).
