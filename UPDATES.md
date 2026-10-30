# Development notes

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
