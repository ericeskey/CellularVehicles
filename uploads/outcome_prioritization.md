# ODI Outcome Prioritization Prompt

Analyze the Outcome Registry, supporting atoms, and transcript evidence.

Estimate each outcome on:

1. Desire

   * How strongly do participants appear to want improvement?

2. Importance

   * How important is the outcome to successful job execution?

3. Satisfaction

   * How well does the current situation appear to satisfy the outcome?

4. Ability

   * How capable are participants of achieving the outcome today?

5. Job Contribution Weight

   * How strongly does the outcome contribute to successful completion of the overall job?

Score:

1 = Low
2 = Moderate
3 = High

For each outcome provide:

* score
* rationale
* supporting evidence

Then estimate:

Opportunity Score

Using:

Importance + max(Importance - Satisfaction, 0)

Also estimate:

Ability Gap

Using:

Importance - Ability

Rank outcomes by:

* Opportunity
* Ability Gap
* Job Contribution Weight

Output:

* Ranked Outcomes
* Highest Opportunity Outcomes
* Highest Ability Gap Outcomes
* Highest Job Contribution Outcomes

Important:

This is not a substitute for quantitative ODI research.

Treat all rankings as evidence-based hypotheses.