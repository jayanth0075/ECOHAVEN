# Single-commit push script for ECOHAVEN repo
# This script creates a clean single commit and force-pushes to ECOHAVEN

Set-Location C:\Users\m9963\PycharmProjects\AI\EcoHaven

Write-Host "Creating single-commit snapshot and pushing to ECOHAVEN..."

# Create orphan branch (no history)
git checkout --orphan temp-single-commit

# Stage all current files
git add -A

# Create single commit
git commit -m "chore: repository cleanup - single commit snapshot"

# Rename branch to main
git branch -M main

# Ensure ecohaven remote exists
$remoteExists = git remote get-url ecohaven 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Adding ecohaven remote..."
    git remote add ecohaven https://github.com/jayanth0075/ECOHAVEN.git
} else {
    Write-Host "ecohaven remote already exists: $remoteExists"
}

# Force push to replace all history with single commit
Write-Host "Force pushing to ecohaven/main..."
git push ecohaven main --force

Write-Host "Done! Repository now has a single commit on GitHub."
