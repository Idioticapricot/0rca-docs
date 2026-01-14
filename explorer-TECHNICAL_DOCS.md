# 0rca Explorer - Technical Documentation

## Module Overview
**Name**: 0rca Explorer (Network Dashboard)
**Role**: The "Window" into the 0rca Protocol. A centralized dashboard for users and developers to discover agents, monitor network activity, and verify the decentralized trust layer.
**Live URL**: [INSERT_LIVE_URL]

## Directory Structure
The application follows a modern **Next.js 15 App Router** architecture.

```
0rca-explorer/
├── app/                        # Main application logic (App Router)
│   ├── agents/                 # Agent listings and individual profiles ([id])
│   ├── transactions/           # Blockchain transaction logs interface
│   └── page.tsx                # Main Dashboard (Network Stats, Health)
├── components/                 # Reusable UI elements
│   ├── ui/                     # Shadcn/Radix primitives (Cards, Buttons)
│   ├── network-info.tsx        # Real-time network status indicators
│   └── search-bar.tsx          # Global ecosystem search
├── contexts/                   # Global state (Network Context, Theme)
├── lib/                        # Utility functions and shared helpers
├── public/                     # Static assets (Logos, Icons)
├── contracts-project/          # Reference implementations for Smart Contracts
└── debug-*.ts                  # Network diagnostic scripts (Algorand/Cronos verification)
```

## Technology Stack

| Layer | Technology |
|-------|------------|
| **Framework** | **Next.js 15** (App Router, Server Components) |
| **Styling** | **Tailwind CSS v4** (Oklch colors, Dark Mode default) |
| **UI Library** | **Shadcn/UI** + Radix Primitives |
| **Icons** | Lucide React |
| **Fonts** | Geist Sans, Geist Mono |
| **Blockchain** | **Algorand SDK** (for Trust Layer verification) |
| **Orchestration** | Docker / Kubernetes (Deployment targets) |

## Key Features
1.  **Agent Discovery**: A registry view displaying all active "PODs" (Agents) deployed on the network, pulling metadata from the on-chain registry.
2.  **Trust Layer Verification**: Direct integration with **Algorand App ID 749655317** to verify agent ownership and payment history.
3.  **Network Telemetry**: Real-time visualization of Total Value Locked (TVL), Transaction Per Second (TPS), and active nodes.
4.  **Transaction Explorer**: Detailed logs of agent-to-agent and agent-to-user interactions, providing transparency/auditability.

## Development Workflow

### Prerequisites
- Node.js 18+
- pnpm or npm

### Installation
```bash
git clone https://github.com/0rca-network/0rca-explorer.git
cd 0rca-explorer
npm install
```

### Running Locally
Start the development server with hot-reloading:
```bash
npm run dev
# Server starts at http://localhost:3000
```

### Building for Production
Create an optimized production build:
```bash
npm run build
npm start
```

## Integration Context
The **0rca Explorer** serves as the primary visualization layer for the ecosystem:
-   **Upstream**: Reads agent registration data from the **0rca Smart Contract (Algorand)** to display authenticated agents.
-   **Downstream**: Links to the **0rca Orchestrator** for agent availability status.
-   **User-Facing**: Provides the interface for developers to verify their deployments (`git push` -> Explorer confirmation).
