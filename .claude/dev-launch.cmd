@echo off
set "PATH=C:\Program Files\nodejs;%PATH%"
cd /d "%~dp0\.."
node "C:\Users\qalte\AppData\Roaming\npm\node_modules\pnpm\bin\pnpm.cjs" dev
