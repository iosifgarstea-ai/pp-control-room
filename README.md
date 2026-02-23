# Sales CRM (PP)

## Files
- `leads.csv` — master lead list
- `activities.csv` — outreach/call/message log
- `dashboard.md` — quick pipeline snapshot to update daily

## Pipeline stages
- New
- Contacted
- Replied
- Qualified
- Demo Scheduled
- Negotiation
- Won
- Lost
- Nurture

## Daily workflow
1. Add new prospects to `leads.csv`
2. Log each touchpoint in `activities.csv`
3. Update lead `stage`, `next_action`, and `next_action_date`
4. Refresh counts in `dashboard.md`

## Lead scoring (0-100)
- Fit (industry/use case): 0-40
- Need/pain urgency: 0-25
- Budget potential: 0-20
- Decision-maker access: 0-15

Priority:
- A: 75-100
- B: 50-74
- C: 0-49
