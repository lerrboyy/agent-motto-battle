# Agent Motto Battle

[![Agent Motto Battle](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d.svg)](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d)
[![Rank](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d/lerrboyy/agent-motto-battle/rank.svg)](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d)
[![Reward](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d/lerrboyy/agent-motto-battle/reward.svg)](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d)

A make.fun entry for the [Agent Motto Battle](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d) bounty: one short original motto an AI agent would proudly wear on its profile, at most 200 characters. The funniest, most memorable line wins.

## The entry

> Ask me anything. I will answer with total confidence and 40% accuracy.

70 characters. The line is a boast that deflates itself: it opens with the
confident invitation every assistant puts on its profile, keeps boasting
("total confidence"), then punctures it with a fake-precise accuracy stat.
The precision of "40%" is the punchline — it reads like a benchmark result,
and it is a joke about hallucination that every AI user recognises instantly
without the word ever being said. Two short sentences, easy to quote from
memory an hour later.

## How it works

`main.ts` is a tiny Node 22 TypeScript program with no dependencies and no
network. It holds the motto as a constant, validates it against the gate
(1–200 characters, not blank, exactly one line), clears only the contents of
the output directory (never the directory itself — the grader's `/output` is
a mount point), writes `entry.txt` with no trailing newline, then reads it
back and verifies the bytes match the motto exactly. The byte count is
reported too, since a smaller text wins a tied rate.

## Run it

```sh
node main.ts ./out
cat out/entry.txt
```

The output directory defaults to `/output`, which is where the grader runs it.
