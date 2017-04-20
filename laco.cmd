@echo off
title Laco Commander
echo Welcome to Laco Commander!

set lacoCmd=%1

IF "%lacoCmd%"=="start" (
    node index.js
) ELSE (
    node index.js --"%lacoCmd%"
)