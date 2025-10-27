# Interactive cleanup script
# Purpose: Create a single-commit snapshot of the current working tree
# and (optionally) force-push it to the ECOHAVEN remote, replacing remote history.
#
# IMPORTANT: This operation rewrites remote history. Only proceed if you're sure.

Write-Host "== Single-commit repository cleanup helper =="
Write-Host "This script will create a single commit that snapshots the current working tree"
Write-Host "and can force-push it to the ECOHAVEN remote (replacing remote history)."
Write-Host ""
function Exit-WithMessage($msg, $code=1) {
	Write-Host $msg
	exit $code
}
# Confirm intent
$confirm = Read-Host "Proceed with creating a single-commit snapshot and (optionally) force-push? Type Y to continue"
if ($confirm -ne 'Y' -and $confirm -ne 'y') {
	Exit-WithMessage "Aborted by user." 0
}
# Check for git
$gitCmd = Get-Command git -ErrorAction SilentlyContinue
if (-not $gitCmd) {
	Write-Host "Git executable not found in this environment."
	Write-Host "Please install Git for Windows: https://git-scm.com/download/win"
	Write-Host "Or open a terminal that has git available (Git Bash / VS Code terminal with Git)."
	Exit-WithMessage "Cannot continue without git." 1
}
# Defaults
$defaultRemoteName = 'ecohaven'
$defaultRemoteUrl = 'https://github.com/jayanth0075/ECOHAVEN.git'
$defaultBranch = 'main'
$remoteName = Read-Host "Remote name to use (default: $defaultRemoteName)"
if ([string]::IsNullOrWhiteSpace($remoteName)) { $remoteName = $defaultRemoteName }

$remoteUrl = Read-Host "Remote URL to use (default: $defaultRemoteUrl)"
if ([string]::IsNullOrWhiteSpace($remoteUrl)) { $remoteUrl = $defaultRemoteUrl }

$branch = Read-Host "Target branch name on remote (default: $defaultBranch)"
if ([string]::IsNullOrWhiteSpace($branch)) { $branch = $defaultBranch }
Write-Host "\nSummary:"
Write-Host " - Remote name: $remoteName"
Write-Host " - Remote URL:  $remoteUrl"
Write-Host " - Target branch: $branch"

$confirm2 = Read-Host "This will rewrite remote history. Type PROCEED to continue"
if ($confirm2 -ne 'PROCEED') { Exit-WithMessage "Aborted by user." 0 }
Write-Host "\nRunning snapshot steps..."

try {
	# Create an orphan branch containing current working tree
	git checkout --orphan temp-clean
	# Stage everything from working tree
	git add -A

	# Commit
	git commit -m "chore: repository cleanup — single commit snapshot"
	# Set branch name to target branch
	git branch -M $branch

	# Ensure remote exists or is set to provided URL
	$existingRemote = git remote get-url $remoteName 2>$null
	if ($LASTEXITCODE -ne 0) {
		Write-Host "Adding remote '$remoteName' -> $remoteUrl"
		git remote add $remoteName $remoteUrl
	} else {
		Write-Host "Remote '$remoteName' exists (url: $existingRemote)."
		if ($existingRemote -ne $remoteUrl) {
			$set = Read-Host "Remote URL differs. Replace remote '$remoteName' URL with the provided one? Type Y to replace"
			if ($set -eq 'Y' -or $set -eq 'y') {
				git remote remove $remoteName
				git remote add $remoteName $remoteUrl
			} else {
				Write-Host "Keeping existing remote URL: $existingRemote"
			}
		}
	}

	Write-Host "\nDry-run push (shows what would happen):"
	git push --dry-run $remoteName $branch --force

	$final = Read-Host "Ready to FORCE push the single-commit to $remoteName/$branch? Type PUSH to execute"
	if ($final -ne 'PUSH') {
		Write-Host "Skipping push. Local snapshot branch 'temp-clean' is created. You can push manually later."
		Exit-WithMessage "Done (no push)." 0
	}

	Write-Host "Pushing... (this will replace remote history)"
	git push $remoteName $branch --force

	Write-Host "Push complete. Verifying remote status..."
	git remote show $remoteName

	Write-Host "Cleanup completed successfully. Remote history has been replaced with a single commit."
} catch {
	Write-Host "An error occurred: $_"
	Exit-WithMessage "Failed." 1
}

# Clean up and push changes to ECOHAVEN repo
cd C:\Users\m9963\PycharmProjects\AI\EcoHaven

# Remove any remaining log files
Remove-Item -Path commit_log_*.txt -Force -ErrorAction SilentlyContinue
Remove-Item -Path feature_log_*.txt -Force -ErrorAction SilentlyContinue

# Show status
Write-Host "Remaining files:"
Get-ChildItem -Path *.txt -ErrorAction SilentlyContinue | ForEach-Object { Write-Host $_.Name }

# List git status
Write-Host "`nProject is ready to push!"
Write-Host "All temporary log files have been removed."
cd C:\Users\m9963\PycharmProjects\AI\EcoHaven
git checkout --orphan temp-single-commit
git add -A
git commit -m "chore: repository cleanup - single commit snapshot"
git branch -M main
git push ecohaven main --force