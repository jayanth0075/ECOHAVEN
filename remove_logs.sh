#!/bin/bash
# Remove log files from git tracking and commit

git rm --cached commit_log_*.txt 2>/dev/null
git rm --cached feature_log_*.txt 2>/dev/null

# If there are files to commit
if git status | grep -q "Changes to be committed"; then
    git add .gitignore
    git commit -m "chore: remove log files and update gitignore"
    git push ecohaven main
    echo "✅ Repository updated successfully!"
else
    echo "✅ No changes needed - log files already removed"
fi
