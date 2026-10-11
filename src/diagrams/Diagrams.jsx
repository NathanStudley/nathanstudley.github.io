import { Diagram, Edge, GroupBox, Node } from "./primitives";

export function AgentWorkflowDiagram() {
  return (
    <Diagram
      width={1000}
      height={430}
      title="Multi-agent engineering workflow: a manager session fans work out to implementer agents in isolated worktrees, then verifies before a PR"
      caption="How I ship with Claude Code: one manager session scopes and verifies; implementer agents each own one deliverable in their own git worktree; nothing reaches a PR until the diff and test output are checked."
    >
      <Node x={20} y={170} w={120} title="Task" sub="ticket · ask · bug" />
      <Node x={180} y={160} w={170} h={76} title="Manager session" sub="Opus · scopes, reviews" tone="accent" />
      <GroupBox x={400} y={10} w={220} h={375} label="isolated worktrees" />
      <Node x={420} y={40} w={180} title="Implementer A" sub="one deliverable" />
      <Node x={420} y={170} w={180} title="Implementer B" sub="one deliverable" />
      <Node x={420} y={300} w={180} title="Implementer C" sub="mechanical · cheaper model" />
      <Node x={660} y={160} w={150} h={76} title="Verify gate" sub="diffs + suites, not prose" tone="warm" />
      <Node x={850} y={160} w={130} h={76} title="Pull request" sub="human review" tone="good" />

      <Edge d="M140,198 L176,198" />
      <Edge d="M350,188 C385,188 385,68 416,68" tone="accent" />
      <Edge d="M350,198 L416,198" tone="accent" />
      <Edge d="M350,208 C385,208 385,328 416,328" tone="accent" />
      <Edge d="M600,68 C632,68 632,186 656,186" />
      <Edge d="M600,198 L656,198" />
      <Edge d="M600,328 C632,328 632,210 656,210" />
      <Edge d="M810,198 L846,198" tone="accent" />
      <Edge d="M735,236 L735,405 L265,405 L265,240" tone="warm" label="rework" lx={500} ly={398} />
    </Diagram>
  );
}

export function DriftDetectionDiagram() {
  return (
    <Diagram
      width={1000}
      height={300}
      title="Nightly schema drift detection: a tracked baseline and a live snapshot are diffed per object type, then aggregated into an alert"
      caption="Nightly drift detection for a production Oracle WMS: anything changed outside the pipeline shows up in the morning, before it breaks a deploy or a rollback."
    >
      <Node x={20} y={122} w={130} title="Nightly cron" sub="+ manual dispatch" />
      <GroupBox x={180} y={20} w={440} h={260} label="per object type × 9" />
      <Node x={200} y={60} w={170} title="Tracked baseline" sub="S3 · execution truth" tone="accent" />
      <Node x={200} y={190} w={170} title="Live PROD snapshot" sub="Liquibase" />
      <Node x={430} y={122} w={170} title="Offline diff" sub="filter to tracked objects" />
      <Node x={660} y={122} w={140} title="Aggregate" sub="HTML summary" />
      <Node x={850} y={50} w={130} title="Drift alert" sub="email + triage doc" tone="warm" />
      <Node x={850} y={200} w={130} title="All clear" sub="no noise" tone="good" />

      <Edge d="M150,140 C165,140 165,88 196,88" />
      <Edge d="M150,160 C165,160 165,218 196,218" />
      <Edge d="M370,88 C400,88 400,140 426,140" tone="accent" />
      <Edge d="M370,218 C400,218 400,160 426,160" />
      <Edge d="M600,150 L656,150" />
      <Edge d="M800,140 C825,140 825,78 846,78" tone="warm" label="drift" lx={826} ly={104} />
      <Edge d="M800,160 C825,160 825,228 846,228" label="clean" lx={826} ly={208} />
    </Diagram>
  );
}

export function JevLabDiagram() {
  return (
    <Diagram
      width={1000}
      height={330}
      title="LLM trading lab: the same strategy runs with and without LLM judgments, through identical deterministic risk rules, evaluated on dev and holdout periods"
      caption="Every AI strategy has a no-AI twin. The LLM only answers typed questions; code owns risk and sizing; results are judged on a holdout the strategy never saw."
    >
      <Node x={20} y={137} w={140} title="Daily market data" sub="ETFs · mega-caps" />
      <Node x={200} y={137} w={160} title="Technical features" sub="computed in code" />
      <Node x={410} y={40} w={180} title="Jev judgments" sub="5 typed questions / ticker-day" tone="accent" />
      <Node x={410} y={234} w={180} title="No-AI twin" sub="same rules, no LLM" />
      <Node x={640} y={137} w={150} title="Risk & sizing" sub="deterministic code" />
      <Node x={830} y={137} w={150} title="Dev vs. holdout" sub="2017–22 / 2023+" tone="warm" />

      <Edge d="M160,165 L196,165" />
      <Edge d="M360,155 C385,155 385,68 406,68" tone="accent" />
      <Edge d="M360,175 C385,175 385,262 406,262" />
      <Edge d="M590,68 C615,68 615,155 636,155" tone="accent" />
      <Edge d="M590,262 C615,262 615,175 636,175" />
      <Edge d="M790,165 L826,165" />
    </Diagram>
  );
}

export function IntegrationDiagram() {
  return (
    <Diagram
      width={1000}
      height={330}
      title="Event-driven integration architecture: partner calls enter through API Gateway and Lambda, flow through SQS with deduplication and retries into the warehouse system, with a dead-letter queue feeding alerts"
      caption="Partner integrations built to fail loudly instead of silently: idempotent queueing, bounded retries, and a dead-letter path that pages a human."
    >
      <Node x={20} y={137} w={160} title="Partners & carriers" sub="marketplaces · clients" />
      <Node x={220} y={137} w={160} title="API Gateway + λ" sub="validated, typed" />
      <Node x={420} y={137} w={160} title="SQS" sub="dedup IDs · retries" tone="accent" />
      <Node x={620} y={137} w={160} title="Worker λ" sub="TypeScript" />
      <Node x={820} y={137} w={160} title="Oracle WMS" sub="orders · inventory" tone="accent" />
      <Node x={420} y={252} w={160} title="Dead-letter queue" sub="exhausted retries" tone="warm" />
      <Node x={620} y={252} w={160} title="Datadog alert" sub="someone gets paged" tone="warm" />

      <Edge d="M180,165 L216,165" />
      <Edge d="M380,165 L416,165" />
      <Edge d="M580,165 L616,165" tone="accent" />
      <Edge d="M780,165 L816,165" />
      <Edge d="M500,193 L500,248" tone="warm" />
      <Edge d="M580,280 L616,280" tone="warm" />
      <Edge d="M900,137 L900,50 L100,50 L100,133" label="labels (ZPL) · tracking · status" lx={500} ly={42} />
    </Diagram>
  );
}
