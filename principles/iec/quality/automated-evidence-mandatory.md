# IEC-QUALITY-AUTOMATED-EVIDENCE-MANDATORY: Automated Evidence is Mandatory at Agentic Speeds

**Layer**: 1
**Categories**: quality, testing, agent
**Applies-to**: code
**Summary**: Coding agents generate code faster than manual verification scales. Automated evidence is mandatory.

## Principle

AI generates code faster than you can verify manually. Automated evidence is the practical control that keeps agentic speed from outrunning review. When an agent can produce a thousand lines of code in minutes, human review cannot keep pace. Only automated tests, checks, and verifications scale to match the generation rate.

## Why it matters

Without automated evidence, the bottleneck shifts from code generation to verification. The agent produces code faster, but the review queue grows longer. The pressure to skip review increases. Quality degrades not because the agent is worse, but because human review cannot scale.

When the agent runs unattended, the problem sharpens. There is no reviewer in the moment at all, so automated evidence becomes the exit condition that decides whether the run is done. Without a machine-decidable pass signal, the loop has no defensible place to stop.

## Violations to detect

- Projects using agentic workflows without CI-enforced test suites
- Code review as the only verification mechanism
- Agent-generated PRs merged without automated checks passing
- Coverage metrics celebrated without inspection of what the tests verify
- Agent running unattended with no machine-decidable signal for when the change is complete

## Good practice

Every agent-generated change must be accompanied by automated evidence that the change is correct. Tests are the primary evidence mechanism, but linters, type checkers, and architecture checks also qualify. The question is not "did a human look at this?" but "would a wrong implementation be caught?"

## Sources

- intent-book, *"Tests as Evidence, Not Ritual" chapter*, quality section.
- intent-book, plan.md, Living Principles appendix.
- Dave Farley, *Modern Software Engineering*.
