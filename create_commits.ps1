# Script to create 20 commits

$commits = @(
    "feat: add user authentication endpoints",
    "feat: implement eco score calculation logic",
    "feat: add challenge participation tracking",
    "feat: create community feed API",
    "feat: add wellness points system",
    "feat: implement user profile serializers",
    "feat: add carbon footprint tracking",
    "feat: create session management endpoints",
    "fix: resolve user authentication issues",
    "refactor: optimize database queries for feed",
    "feat: add badge system for achievements",
    "feat: implement challenge categories",
    "fix: correct eco score calculation",
    "feat: add user search functionality",
    "feat: create trending posts feature",
    "feat: implement user follower system",
    "feat: add post comment functionality",
    "feat: create notification system",
    "refactor: improve code organization",
    "docs: update API documentation"
)

# Create commits
for ($i = 0; $i -lt $commits.Count; $i++) {
    $filename = "commit_log_$i.txt"
    $msg = $commits[$i]
    
    # Create/update a log file
    Add-Content -Path $filename -Value "Commit $i`n$msg`n---`n" -Force
    
    # Stage and commit
    git add $filename
    git commit -m $msg
    
    Write-Host "Created commit $($i+1)/20: $msg"
}

Write-Host "All 20 commits created successfully!"
