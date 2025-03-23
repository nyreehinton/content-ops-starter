# Model Context Protocols (MCPs)

This directory contains the Model Context Protocols (MCPs) that define guidelines and standards for working with the content-ops-starter project.

## Available MCPs

1. **Content Operations Starter MCP** (`mcp-document.md`)

   - Provides foundational guidelines for content operations
   - Defines HTML-TSX pairing patterns
   - Establishes content workflow and automation standards
   - [View Document](./mcp-document.md)

2. **Replit Integration MCP** (`Model Context Protocol (MCP) for Replit Integration.md`)

   - Guidelines for integrating Replit applications
   - Component structure and styling standards
   - Build process compatibility requirements
   - [View Document](<./Model%20Context%20Protocol%20(MCP)%20for%20Replit%20Integration.md>)

3. **HTML-TSX Protocol MCP** (`HTML_TSX_PROTOCOL.md`)
   - Standardizes HTML-TSX paired web development
   - Defines file structure and component relationships
   - Provides content generation rules and synchronization protocols
   - [View Document](./HTML_TSX_PROTOCOL.md)

## Using the MCPs

The MCPs are managed through the `mcp.json` file in the `.cursor` directory. This file:

- Maintains relationships between different MCPs
- Provides quick access to document content
- Tracks document versions and updates

### How to Reference MCPs

When working with the codebase:

1. Always check the relevant MCPs before making changes
2. Follow the guidelines specified in both the content-ops-starter MCP and any specialized MCPs
3. Update the MCPs if you discover new patterns or requirements

### Adding New MCPs

To add a new MCP:

1. Create the MCP document in this directory
2. Add an entry to `mcp.json` with:
   - Unique identifier
   - Title and description
   - File path
   - Content reference
   - Related documents
3. Update the metadata in `mcp.json`

## Related Resources

- [Cursor Project Rules](../cursor_project_rules)
- [Implementation Plan](../implementation-plan.mdc)
