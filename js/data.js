const caseStudy = {
  title: "H2 Economics Case Study: The UK Air Travel Market",
  extracts: [
    { id: 1, title: "Extract 1", content: `Demand for air travel in the UK has grown by 130% over the past 20 years. This is against a background of an increase in GDP of 54% and a significant fall in air fares. Given the forecast real income growth of around 150% in the period to 2050 we project the demand for air travel could grow by over 200% from 230 million passengers per year in 2005 to 695 million passengers in 2050.
However, the increase in demand for air travel will result in higher carbon emissions. There have been talks about measures to tackle this issue. Imposing a tax on the carbon emissions of aircraft and limiting the capacity of UK airports could reduce demand growth to 115% by 2050. In addition there is scope for a significant shift to high-speed rail travel on domestic journeys and short-haul trips to mainland Europe, which could reduce demand for air travel by up to 8% by 2050. This will, however, require significant investment in rail travel. There is also some scope for substitution of videoconferencing for business travel. This could lead to a reduction of up to 30% in business demand for air travel by 2050. Carbon emissions could also be reduced by an improvement in the efficiency of aircraft engines and in air traffic management. In addition alternative fuels will help to cut emissions.` },
    { id: 2, title: "Extract 2", content: `More taxes on air travel are needed in Britain is to meet its climate change obligations according to Government advisers. In a report published today, the Committee on Climate Change (CCC) has called for a drastic action to curb the predicted growth in air travel including higher taxes on air fares. Holidaymakers are already facing sharp increase in Air Passenger Duty which, by the end of next year, will mean a family of four flying to America will pay £240 in tax. ‘Air tickets are going to get a lot more expensive, but people will become a lot richer over the next 40 years. If you’re going to limit the growth in demand, you do need rising prices, ‘said the Committee’s chief executive. ‘It’s not that demand has to fall in order for us to meet the target, demand can increase but only in a limited way.”
Despite calling for curbs on airport expansion, the Committee stopped short of calling for plans for Heathrow’s third runway to be abandoned.
The report was welcomed by environmental groups. One campaigner said, ‘this report is a reality check which should finally put an end to Government plans to allow a huge expansion in air travel. The Committee says that technology can significantly cut the impact that individual flights have on our climate – but if air travel grows to the dangerous level that industry is pushing for, these benefits will be completely outweighed.’
However, the air travel industry insisted that it could meet the carbon reduction targets without restricting demand for flights. ‘We have already seen a 70% improvement in carbon emissions in the last 40 years. We believe limiting emissions is the answer rather than limiting people’s ability to travel. From 2012, carbon emissions from UK flights will be included in a European Union (EU) scheme, whereby any increase in emissions above the 2005 baseline will have to be matched by equivalent reductions elsewhere, paid for by the air travel industry,’ said the executive chairman of the Airport Operators Association.
The chief executive of a short-haul airline added: ‘The key to sustainable air travel is technology, not taxation, and the way to make sure it happens is by setting minimum standards for aircraft emissions.’` },
    { id: 3, title: "Extract 3", content: `The ability to travel combined with the fall in air fares has driven the surge in demand for flights, not just to the UK, but throughout Europe. But a recent report by the Civil Aviation Authority, produced in September, confirms that there has been an exceptional surge in migrant travel to and from Europe. It is this, rather than an increase in holiday or business travel, that has led to the increase in demand for flights since 1990. The question is whether this rise will continue and there is evidence that the rise is beginning to level off. If that is the case, one has to question whether there is any real justification in artificially forcing up air fares, which will not only make air travel the preserve of the rich, but also deny airlines, many of which are making losses at the moment, the money they need to invest in cleaner, more environmentally friendly aircraft in the future.` },
    { id: 4, title: "Extract 4", content: `In recent years, an increasingly globalized world economy has led to a rise in labour mobility and migration, particularly within Europe. At the same time, there has been a relaxation of regulatory restrictions on aviation markets and this has encouraged increases in flights.
There is a subset of leisure passengers who travel for the purpose of ‘Visiting Friends or Relatives’ (VFR). Between 2000 and 2007, whilst total passengers to and from the UK grew by one-third, those travelling for the purpose of VFR increased by over three-quarters, much more than the growth in business and holiday travel.
Looking forward, the current worldwide economic downturn is likely to impact upon VFR traffic, both through falls in UK GDP and changes in migration patterns. For these people, travel for VFR purposes is an indication of the desire to build and maintain relationships. The analysis in this study has been carried out using data which cover a period of significant change in terms of the increase in the number of countries belonging to the EU, the migration flows this has enabled and the liberalization of the EU air travel market (giving rise to more affordable air travel). In light of these one-off developments, it may not be realistic to assume continued growth of the same magnitude.` }
  ],
  tableHTML: `
    <table class="data-table">
      <thead><tr><th></th><th>Price Elasticities of Demand</th><th>Income Elasticities of Demand</th></tr></thead>
      <tbody>
        <tr><td>Business flights to UK destinations</td><td>n/a</td><td>1.4</td></tr>
        <tr><td>Leisure flights to UK destinations</td><td>-1.0</td><td>1.5</td></tr>
        <tr><td>Business flights to non-UK destinations</td><td>n/a</td><td>0.6</td></tr>
        <tr><td>Leisure flights to non-UK destinations</td><td>-0.2</td><td>0.7</td></tr>
      </tbody>
    </table>
    <p class="table-note">n/a = not available | Source: UK Department for Trade, 2009</p>
  `,
  questions: [
    {
      id: "a_i", marks: 2,
      text: "(a)(i) With reference to the data in Table 1, explain the effect on the total revenue from leisure flights to UK destinations of a fall in price.",
      socratic: [
        "What does a PED of -1.0 actually tell you about how quantity responds to price?",
        "If price falls and quantity rises by the exact same proportion, what happens when you multiply them together (P × Q)?",
        "How would you clearly state the final impact on total revenue in one sentence?"
      ],
      checklist: ["States PED = -1.0 indicates unitary elasticity", "Explains proportionate Q↑ offsets P↓", "Concludes TR remains unchanged"],
      keyConcepts: ["ped", "-1", "unitary", "proportionate", "total revenue", "unchanged", "p x q"]
    },
    {
      id: "a_ii", marks: 2,
      text: "(a)(ii) With reference to the data in Table 1, explain the effect on the total revenue from leisure flights to UK destinations of a fall in income.",
      socratic: [
        "Is YED = 1.5 greater or less than 1? What type of good does this imply?",
        "When income falls, how does demand for a luxury good respond?",
        "If both price and quantity fall, what’s the combined effect on total revenue?"
      ],
      checklist: ["Identifies YED = 1.5 → luxury/normal good", "Explains more than proportionate fall in demand", "Concludes TR falls significantly"],
      keyConcepts: ["yed", "1.5", "luxury", "normal good", "more than proportionate", "demand falls", "revenue falls"]
    },
    {
      id: "b_i", marks: 2,
      text: "(b)(i) Explain one possible reason why the demand for leisure flights to non-UK destinations is less price-elastic than that for UK destinations.",
      socratic: [
        "Think about the determinants of price elasticity. How does the availability of substitutes differ between flying overseas vs flying domestically?",
        "Why might trains/cars be poor substitutes for long-haul trips but good ones for short-haul?",
        "How would you contrast the two scenarios to show why PED differs?"
      ],
      checklist: ["Notes fewer close substitutes for non-UK travel", "Mentions time/cost of alternative transport", "Contrasts with UK domestic substitutes"],
      keyConcepts: ["fewer substitutes", "close substitutes", "ferries", "trains", "cars", "longer time", "alternative transport", "domestic", "international"]
    },
    {
      id: "b_ii", marks: 2,
      text: "(b)(ii) Explain one possible reason why the income elasticity of demand for business flights to UK destinations is higher than that for non-UK destinations.",
      socratic: [
        "Higher YED usually means a good is less of a necessity. Why might a business *need* to fly overseas more than domestically?",
        "How does familiarity with local markets affect the necessity of physical travel?",
        "What role does information gathering play in this difference?"
      ],
      checklist: ["Explains lower necessity for UK business travel", "Notes physical presence/info gathering needed abroad", "Links to YED difference"],
      keyConcepts: ["necessity", "discretionary", "market familiarisation", "physical presence", "information", "communication", "foreign"]
    },
    {
      id: "c", marks: 2,
      text: "(c) Explain the likely value of the cross-elasticity of demand between high-speed rail travel and air travel.",
      socratic: [
        "How do you define cross-elasticity in economic terms?",
        "Are rail and air substitutes or complements? What does that mean for the sign of CED?",
        "Can rail replace air for *all* journeys? How does this limitation affect the magnitude of the elasticity?"
      ],
      checklist: ["Defines CED correctly", "States positive value (substitutes)", "Explains small magnitude (<1) due to short-haul limitation"],
      keyConcepts: ["ced", "cross elasticity", "responsiveness", "substitutes", "positive", "small", "short-haul", "domestic"]
    },
    {
      id: "d", marks: 2,
      text: "(d) Explain either one demand or one supply factor that has led to a rise in VFR travel.",
      socratic: [
        "Pick ONE factor. What specific phrase in Extract 4 points to it?",
        "How does this factor shift the demand or supply curve?",
        "What market mechanism (shortage/surplus) follows, and how does it ultimately increase VFR travel?"
      ],
      checklist: ["References extract correctly", "Shows DD↑ or SS↑ with correct economic reasoning", "Explains full chain: shift → shortage/surplus → price change → Q change"],
      keyConcepts: ["demand", "supply", "migration", "labour mobility", "deregulation", "liberalisation", "willingness", "ability", "restrictions", "shortage", "surplus"]
    }
  ]
};
