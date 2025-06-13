@echo off
setlocal enabledelayedexpansion

echo Converting Windows path to WSL path...
set "WIN_PATH=%CD%"
set "WIN_PATH=!WIN_PATH:\=/!"
set "WIN_PATH=!WIN_PATH:C:=/mnt/c!"

echo Starting Claude Code in WSL...
echo Project path: %WIN_PATH%
echo.
echo If this is your first time, you'll need to authenticate with your Anthropic API key.
echo If you see any errors, run:
echo   wsl -d Ubuntu -e bash -c "node /usr/lib/node_modules/@anthropic-ai/claude-code/cli.js auth"
echo.

echo Starting Claude Code...
wsl -d Ubuntu -e bash -c "cd '%WIN_PATH%' && node /usr/lib/node_modules/@anthropic-ai/claude-code/cli.js"

if %ERRORLEVEL% neq 0 (
    echo.
    echo Error: Failed to start Claude Code.
    echo 1. Make sure you have an Anthropic API key and have run the auth command above.
    echo 2. Ensure WSL is properly installed and Ubuntu is set up.
    echo 3. Check that Node.js is installed in WSL.
)