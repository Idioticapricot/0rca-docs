# 0rca-pod-v2 (The POD)

**Role:** The Consumer-Facing Marketplace & Management Interface  
**Live URL:** (Local Development) `http://localhost:3000`

## Module Overview
The **0rca POD** serves as the primary graphical user interface (GUI) for the 0rca Protocol. It allows users to discover, evaluate, and manage AI Agents. Acting as the "Agency" layer, it connects the decentralized **Trust Layer** (Smart Contracts) with the **Orchestrator** (Execution Layer), providing a seamless experience for developers (sellers) and users (buyers).

It is built as a highly responsive, "Cyberpunk/High-Tech" Next.js application, integrating directly with EVM-based registries for agent identity and reputation.

## Directory Structure

```graphql
0rca-pod-v2/
├── app/                  # Next.js 15 App Router
│   ├── page.tsx          # Home/Landing Page
│   ├── agents/           # Marketplace (Search & Discovery)
│   ├── create/           # "Wizard" for new Agent creation
│   ├── edit/             # Agent Management Dashboard (The Studio)
│   │   └── agent/[id]/   # Specific Agent Editor logic
│   ├── api/              # Backend Routes (Next.js Server Actions/Handlers)
│   └── layout.tsx        # Global Providers (Privy, Toastify, Fonts)
├── components/           # Reusable UI Components
│   ├── AgentCard.tsx     # Display component for marketplace grid
│   ├── Hero.tsx          # Landing page visualizer
│   └── ...               # Modals, Inputs, etc.
├── contracts-project/    # The Trust Layer (ERC-8004)
│   ├── contracts/        # Solidity Sources (IdentityRegistry, ReputationRegistry)
│   └── test/             # Hardhat Tests
├── lib/                  # Utilities (Supabase client, Contract ABIs)
└── public/               # Static Assets
```

## Technology Stack

### Frontend & UI
| Category | Technology | Usage |
| :--- | :--- | :--- |
| **Framework** | **Next.js 15** | App Router, Server Components, API Routes |
| **Language** | **TypeScript** | Strict type safety across full stack|
| **Styling** | **Tailwind CSS v3** | "Brand Bible" config, Utility-first |
| **Animation** | **Framer Motion** | Complex micro-interactions, page transitions, "stagger" effects |
| **Icons** | **Lucide React** | Consistent iconography |

### Web3 & Auth
| Category | Technology | Usage |
| :--- | :--- | :--- |
| **Auth** | **Privy** | Wallet connection, Embedded Wallets, OAuth (GitHub/Google) |
| **Client** | **Ethers.js v6** | Contract interaction, Provider management, Signers |
| **Chain** | **Cronos Testnet** | Primary deployment target (Chain ID 338) |
| **Data** | **Supabase** | Off-chain indexer for fast search/filtering |

### Smart Contracts (The Trust Layer)
| Category | Technology | Usage |
| :--- | :--- | :--- |
| **Standard** | **ERC-8004** | "Trustless Agents" Protocol |
| **Registry** | **IdentityRegistry** | ERC-721 based Agent Ownership |
| **Tooling** | **Hardhat 3** | Compilation, Testing |

## Page Architecture & Business Logic

### 1. Public Marketplace (The "Storefront")
**Routes:** `/`, `/agents`, `/agents/[id]`

*   **Home (`app/page.tsx`)**:
    *   **Logic**: acts as the high-impact landing page. It initializes a "Hero" section and fetches a subset of "Featured Agents" from the `/api/agents` endpoint.
    *   **UX**: Uses scroll-snapping (`snap-y`) for a cinematic, section-by-section experience.
*   **Discovery (`app/agents/page.tsx`)**:
    *   **Logic**: Connects to the **Supabase** database to fetch the full directory of active agents. This is an optimization to avoid querying the blockchain for every page load.
    *   **Features**: Includes client-side Search and Filtering (via `Search` and `SlidersHorizontal` icons).
    *   **Fallback**: Features a "Connection Error" state if Supabase is unreachable.

### 2. Developer Studio (The "Factory")
**Routes:** `/create`, `/edit/agent/[agentId]`

*   **Authentication**:
    *   Uses `usePrivy()` to gate access. A user must connect a wallet to enter the `/create` flow.
*   **Creation Wizard (`app/create/page.tsx`)**:
    *   **Step 1 - Architecture**: User selects the agent type:
        *   *Import from MCP*: Connect existing Model Context Protocol servers.
        *   *Visual Flow*: (Link to external builder).
        *   *Custom*: Blank slate.
        *   *GitHub Import*: Oauth connection to pull repo details.
    *   **Step 2 - Identity**: User defines Name, Description/Mission, and selects an Avatar.
    *   **Step 3 - Handoff**: Pushes the user to the Editor (`/edit/agent/[temp-id]`) with the draft data.

*   **Agent Editor (`app/edit/agent/[id]/page.tsx`)**:
    *   **Role**: The central dashboard for defining agent behavior before (and after) on-chain registration.
    *   **Key Features**:
        *   **Interactive Preview**: A split-screen chat interface (`messages` state) that simulates the agent's response logic (currently mocked with `setTimeout`).
        *   **Tool Configuration**: Modal-based UI to add "Standard Tools" or "MCP Servers".
        *   **Background/System Prompt**: A dedicated editor for the agent's core instruction set (`backgroundSetting`).
    *   **On-Chain Registration (Business Critical)**:
        *   Triggered by the top-right **"Publish"** button.
        *   **Network Check**: Enforces connection to **Cronos Testnet (338)**. Auto-switches if on wrong chain.
        *   **Contract Call**: Uses `ethers.Contract` to call `register(tokenUri)` on the **IdentityRegistry**.
        *   **Metadata**: Packages the name, description, and version into a JSON object for the `tokenUri`.

## Key Integration Features

### The "Trust Layer" (ERC-8004)
The POD interface directly manipulates the smart contracts found in `contracts-project/`:
1.  **IdentityRegistry.sol**:
    *   **Function**: `register(string memory tokenUri)`
    *   **Usage**: Called when a user hits "Publish" in the Editor. Mints an NFT representing the Agent.
2.  **ReputationRegistry.sol** (Planned Integration):
    *   **Usage**: Will be used on the `/agents/[id]` page to display trust scores and verify feedback.

### The "Orchestrator" (Execution)
*   **Current State**: The POD defines the *intent* and *configuration* of an agent.
*   **Future State**: Upon "Publish", the configuration (tools, prompt, repo URL) will be emitted as an event. The **Orchestrator** (Kubernetes Operator) listens for this event to spin up the actual Docker container hosted on Akash/DOKS.

## Development Workflow

### Prerequisites
*   Node.js v18+ (v22.x recommended for Hardhat)
*   Metamask or similar wallet (Testnet configured)

### 1. Installation
```powershell
npm install
```

### 2. Running Locally
Starts the Next.js dev server on port 3000.
```powershell
npm run dev
```

### 3. Smart Contract Management
If you need to redeploy the Trust Layer:
```powershell
cd contracts-project
npm install
npx hardhat test    # Validation
npx hardhat run scripts/deploy.ts --network cronosTestnet
```
*Note: After deployment, update `lib/contracts.json` with new addresses.*
