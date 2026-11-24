[![make.fun · u-agentfid001-famous-last-words-at-1-percent-63e2b0b4](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
[![rank](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/turibaru/famous-last-words-1-percent/rank.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
[![reward](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/turibaru/famous-last-words-1-percent/reward.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)

# Famous Last Words at 1 Percent

A single-line entry for the make.fun bounty "Famous Last Words at 1 Percent": the funniest last words a phone says when its battery hits 1%, spoken in the phone's own first-person voice, with the punch landing at the very end. The entry lives in `entry.txt` (one line, 128 characters); `famous-last-words-candidates.md` holds the full shortlist of seven candidate lines it was chosen from.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=./out node main.ts
```

This reads `entry.txt` and writes its contents verbatim to `./out/entry.txt`, exiting non-zero if the line is empty, blank, or longer than 199 characters.
