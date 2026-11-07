# Patch notes

## 2026-11-07 · Closed beta 37

- The Loading Dock console checks that both pilots are still in the room when used.
- The extra Titan is removed when the scripted BT pickup starts.

Offline checks passed. Two-player gameplay verification is pending.

## 2026-11-07 · Closed beta 36

- Fixed the Loading Dock console blocking the lift call after both pilots reached the control room.
- Earned Titan kits such as Scorch now carry over when the host restarts the game.

Offline checks passed. Two-player gameplay verification is pending.

## 2026-11-04 · Closed beta 32

Two-player playtests have reached the Loading Dock in **Into the Abyss: approach**,
after progressing through training, BT-7274 and Blood and Rust. There have been
longer playable stretches, alongside crashes and story softlocks that still need
work. The full campaign remains a testing goal.

The launcher now offers Host and Join in one program on both Windows and Linux.
It prepares the existing game installation automatically. Startup work has covered
Linux compatibility, normal EA authentication, party-loading status and waiting
for both players before releasing a mission. FPS settings support up to 240, and
mouse-setting persistence has received fixes.

Campaign work since the last update includes shared dialogue and reply arbitration,
respawn and section-restart recovery, story-gate fixes, and sharing an unoccupied
allied Titan. A normal battery can repair an allied Titan; story battery objectives
retain their own progression rules. Session and scene markers help match player
reports to logs. Optional enemy health scaling continues to use the player count.

### Latest changes awaiting paired playtesting

- **Titan losses:** continue after one player Titan is lost; request one section
  restart after both distinct player Titans are confirmed destroyed in combat.
  No replacement Titans are created. Scripted BT removals are excluded.
- **HUD:** rebind the local HUD after a stable spawn or pilot/Titan transition,
  while respecting scene and dialogue ownership.
- **Earned loadouts:** retain pickup unlocks such as Scorch across section reloads
  and map changes in the same running host session. A permanent campaign save is
  still outside this change.
- **Loading Dock:** wait for both pilots at the control room and cargo lift, and
  delay the level transition until the lift reaches the bottom with both aboard.
- **Ammo balance:** pilot gun-ammunition pickups and bullet packs give half their
  actual reserve-ammo gain, rounding odd gains up. Reloads, loaded magazines,
  training, grenades and Titan loadouts keep their existing behavior.

The current build passed 48 Windows offline tests with one platform-specific skip,
and 52 Linux offline tests. Package integrity and the source-preparation pipeline
were also checked. Native script compilation and these latest gameplay changes
still need the next manual session.

The project remains in closed testing. Public builds, invitations and test-server
access are not available through this repository.

## 2026-10-30

The public website and project pages now share the same direction: **The campaign.
With friends.** The site includes real development captures and a dedicated look
at enemy health scaling.

Health scaling is linear by player count, with two players giving eligible enemies
twice their normal health. Enemy Titans and damageable story enemies are included;
training targets, allies and protected scene actors retain their original health.
Scaling is optional, and joins/leaves do not heal or rescale existing enemies.
Larger party sizes remain a verification target.


The project now has native English launchers for Windows and Linux. The closed
build detects the installed Steam/EA game and installs the matching co-op files
there, without making another full game copy.

Targeted playtests have covered training, early Crashsite combat and shared
dialogue choices. Scene/HUD synchronization, enemy health scaling and several
early story-gate fixes are in place. Broader campaign testing is still ahead.

Installation, launcher and network-transport checks have been automated. These
checks do not establish that two players can finish the story over the Internet;
that needs the upcoming human playthrough.

This public repository is a preview only. There are no public builds or test
invitations here.
