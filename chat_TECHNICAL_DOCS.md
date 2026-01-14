# 0rca Protocol: Technical Documentation - 0rca_chat

## 1. Module Overview
- **Name**: 0rca Chat Interface (`0rca_chat`)
- **Role**: The primary **Command Center** and user-facing frontend for the 0rca Protocol. It serves as the conversational gateway where users interact with the **Orchestrator** to discover, hire, and manage AI Agents.
- **Live URL**: *(Deployment URL TBD depending on environment)*

## 2. Directory Structure
The `0rca_chat` module operates as a Next.js application with embedded orchestration logic.

### Core Directories
- **`app/`**: Next.js App Router structure.
  - **`page.tsx`**: Landing interface; initiates new orchestration sessions.
  - **`c/[id]/page.tsx`**: Persistent chat session interface. Handles complex chat history and agent interactions.
  - **`actions.ts`**: **Server Actions** acting as the bridge between the frontend and the `lib/mcp` logic. Handles `executeOrchestration` and agent discovery.
- **`components/ui/`**: Reusable Design System components (Radix UI + Tailwind v4) ensuring the "Cyberpunk/High-Tech" aesthetic.
- **`lib/mcp/`**: Shared libraries for the **Model Context Protocol (MCP)**.
  - **`orchestrator.ts`**: The core business logic for the **Orchestrator** LLM, handling intent classification and agent routing.
  - **`clients/`**: Wrappers for **Supabase** (Registry) and **Mistral** (Intelligence).
- **`server/mcp/`**: A standalone Node.js environment (likely for background workers or debugging) with its own `package.json`, focused on MCP server implementations.

## 3. Technology Stack

### Frontend Core
| Component | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | **Next.js 16.1 (App Router)** | Server-side rendering and React Server Components. |
| **Styling** | **Tailwind CSS v4** | Utility-first styling with modern CSS features. |
| **Animations** | **Framer Motion** | Fluid micro-interactions and page transitions. |
| **Icons** | **Lucide React** | Consistent iconography. |

### Backend & Logic
| Component | Technology | Description |
| :--- | :--- | :--- |
| **Orchestration** | **Mistral AI** | LLM powering the central intent router. |
| **Database** | **Supabase** | PGSQL database for Agent Registry and chat history. |
| **Auth** | **Privy** (`@privy-io/react-auth`) | Wallet-based authentication for decentralized identity. |
| **Protocol** | **MCP SDK** (`@modelcontextprotocol/sdk`) | Standardized communication with AI agents. |
| **Wallet** | **Solana Wallet Adapter** | Integration for Solana-based transactions (if applicable). |

## 4. Key Features

### 🌌 The Orchestrator Interface
The chat interface is not just a text box; it is a **Terminal for Agent Control**.
- **Auto/Manual Mode**: Users can let the Orchestrator auto-select the best agent for a task or manually pick specific agents from the registry.
- **Agent Discovery**: Queries the **Supabase** registry to find available agents based on capabilities (indexed by embedding or tags).

### ⚡ Real-time Agent Interaction
- **MCP Integration**: Relies on the **Model Context Protocol** to standardize prompts and tool calling between the user and disparate agents (Python pods, JS workers).
- **Streaming Responses**: Returns agent outputs in real-time via React Server Actions.

### 🔐 Trust & Identity
- **Decentralized Login**: Uses Privy and Wallet Adapters to ensure users own their session data.
- **App ID verification**: (Planned) Integration with Algorand/Solana regarding agent ownership verification.

## 5. Development Workflow

### Prerequisites
- Node.js v20+
- `npm` or `pnpm`
- Environment variables for `SUPABASE_URL`, `SUPABASE_KEY`, `MISTRAL_API_KEY`.

### Installation
```bash
cd 0rca_chat
npm install
```

### Running Locally
Start the development server with Hot Module Replacement (HMR):
```bash
npm run dev
# Server generally starts at http://localhost:3000
```

### Build for Production
```bash
npm run build
npm run start
```

## 6. Integration Context
The `0rca_chat` sits at the top of the interaction hierarchy:

1.  **User Input** -> **0rca Chat** (`executeOrchestration`).
2.  **Orchestrator** (Mistral) analyses intent -> queries **Supabase Agent Registry**.
3.  **Selected Agent** (External or Local) is invoked via **MCP Gateway**.
4.  **Results** are streamed back to the UI.

It connects primarily to:
- **0rca Registry**: For fetching agent metadata.
- **MCP Servers**: For executing actual agent logic (Python/Node capabilities).
