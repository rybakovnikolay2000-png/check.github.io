param(
  [Parameter(Mandatory = $true)]
  [string]$Domain
)

$normalized = $Domain.Trim()
if (-not $normalized) {
  throw "Domain cannot be empty."
}

if ($normalized -notmatch '^https?://') {
  $normalized = "https://$normalized"
}

$normalized = $normalized.TrimEnd('/')
$placeholder = 'https://topbono-mexico.example'

$files = @(
  'index.html',
  'sitemap.xml',
  'robots.txt'
)

foreach ($file in $files) {
  $content = Get-Content $file -Raw -Encoding UTF8
  $updated = $content.Replace($placeholder, $normalized)
  Set-Content -Path $file -Value $updated -Encoding UTF8
}

Write-Host "Updated domain references to $normalized"
