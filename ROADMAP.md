# Roadmap

The campaign. With friends.

Updated November 4, 2026 · closed beta 32.

The next milestone is a complete two-player campaign playthrough with useful bug
notes. There is no public release date.

## Playtest progress

| Campaign area | Current evidence |
| --- | --- |
| The Pilot's Gauntlet | Two-player playtests; progression and training fixes have been through several iterations. |
| BT-7274 | Players have progressed through the mission after repeated cutscene, dialogue and crash fixes. |
| Blood and Rust | Two-player combat and progression tested; door, respawn and dialogue issues have driven further fixes. |
| Into the Abyss: approach | Players reached the Loading Dock. Console, lift and Titan-restart changes need another paired pass. |
| The remaining campaign | Broader playtesting is still ahead. |

This records where players have reached. Individual scenes, checkpoints and failure
cases still need repeat testing, including in the earlier missions.

## In the closed builds

- Native Windows and Linux launchers with Host and Join in the same program.
- Automatic Northstar/co-op preparation in the existing Steam/EA installation.
- A loading barrier that waits for both players before releasing the mission.
- Shared dialogue UI, with the first valid reply choosing the story player.
- Optional enemy health scaling by player count, including eligible enemy Titans.
- Sharing an unoccupied allied Titan and repairing it with a normal battery.
- Session, scene and bug markers to make playtest reports easier to investigate.

Implementation is ongoing; these systems remain part of closed testing.

## Next paired playtest

- Confirm one section restart after both player Titans are destroyed in combat,
  while allowing play to continue after the first loss. Scripted BT removals need
  a separate check.
- Verify both HUDs after restarting directly in Titans.
- Pick up Scorch, restart the section, then change maps and check that both players
  retain the earned loadout within the running host session.
- Approach the Loading Dock control room separately, reunite, use the console and
  ride the cargo lift together through the map transition.
- Check the new half-ammunition pickup balance for both pilots.
- Repeat earlier death/respawn, shared-dialogue and natural map-travel checks.

## After that

- Continue into later missions and work through remaining story softlocks.
- Test disconnects, reconnects and recovery across more checkpoints.
- Check first-time installation on more Windows/Linux systems.
- Review balance across difficulties and verify larger party sizes. Current
  playtests focus on two players.

## Before a public test

- Complete a broader campaign pass and document the remaining limitations.
- Decide which networking and relay arrangements can be supported publicly.
- Prepare distributable builds and clear installation/recovery instructions.

Closed-test builds, invitations and infrastructure remain private. This repository
does not provide a playable download or access to a test server.
