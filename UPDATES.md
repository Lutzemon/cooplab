# Development notes

## 2026-10-30

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
