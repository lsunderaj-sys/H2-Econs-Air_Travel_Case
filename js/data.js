const caseStudy = {
  title: "H2 Economics Case Study: The UK Air Travel Market",
  extracts: [
    { id: 1, title: "Extract 1", content: `Demand for air travel in the UK has grown by 130% over the past 20 years. This is against a background of an increase in GDP of 54% and a significant fall in air fares. Given the forecast real income growth of around 150% in the period to 2050 we project the demand for air travel could grow by over 200% from 230 million passengers per year in 2005 to 695 million passengers in 2050.\nHowever, the increase in demand for air travel will result in higher carbon emissions. There have been talks about measures to tackle this issue. Imposing a tax on the carbon emissions of aircraft and limiting the capacity of UK airports could reduce demand growth to 115% by 2050. In addition there is scope for a significant shift to high-speed rail travel on domestic journeys and short-haul trips to mainland Europe, which could reduce demand for air travel by up to 8% by 2050. This will, however, require significant investment in rail travel. There is also some scope for substitution of videoconferencing for business travel. This could lead to a reduction of up to 30% in business demand for air travel by 2050. Carbon emissions could also be reduced by an improvement in the efficiency of aircraft engines and in air traffic management. In addition alternative fuels will help to cut emissions.` },
    { id: 2, title: "Extract 2", content: `More taxes on air travel are needed in Britain is to meet its climate change obligations according to Government advisers. In a report published today, the Committee on Climate Change (CCC) has called for a drastic action to curb the predicted growth in air travel including higher taxes on air fares. Holidaymakers are already facing sharp increase in Air Passenger Duty which, by the end of next year, will mean a family of four flying to America will pay £240 in tax. ‘Air tickets are going to get a lot more expensive, but people will become a lot richer over the next 40 years. If you’re going to limit the growth in demand, you do need rising prices, ‘said the Committee’s chief executive. ‘It’s not that demand has to fall in order for us to meet the target, demand can increase but only in a limited way.”\nDespite calling for curbs on airport expansion, the Committee stopped short of calling for plans for Heathrow’s third runway to be abandoned.\nThe report was welcomed by environmental groups. One campaigner said, ‘this report is a reality check which should finally put an end to Government plans to allow a huge expansion in air travel. The Committee says that technology can significantly cut the impact that individual flights have on our climate – but if air travel grows to the dangerous level that industry is pushing for, these benefits will be completely outweighed.’\nHowever, the air travel industry insisted that it could meet the carbon reduction targets without restricting demand for flights. ‘We have already seen a 70% improvement in carbon emissions in the last 40 years. We believe limiting emissions is the answer rather than limiting people’s ability to travel. From 2012, carbon emissions from UK flights will be included in a European Union (EU) scheme, whereby any increase in emissions above the 2005 baseline will have to be matched by equivalent reductions elsewhere, paid for by the air travel industry,’ said the executive chairman of the Airport Operators Association.\nThe chief executive of a short-haul airline added: ‘The key to sustainable air travel is technology, not taxation, and the way to make sure it happens is by setting minimum standards for aircraft emissions.’` },
    { id: 3, title: "Extract 3", content: `The ability to travel combined with the fall in air fares has driven the surge in demand for flights, not just to the UK, but throughout Europe. But a recent report by the Civil Aviation Authority, produced in September, confirms that there has been an exceptional surge in migrant travel to and from Europe. It is this, rather than an increase in holiday or business travel, that has led to the increase in demand for flights since 1990. The question is whether this rise will continue and there is evidence that the rise is beginning to level off. If that is the case, one has to question whether there is any real justification in artificially forcing up air fares, which will not only make air travel the preserve of the rich, but also deny airlines, many of which are making losses at the moment, the money they need to invest in cleaner, more environmentally friendly aircraft in the future.` },
    { id: 4, title: "Extract 4", content: `In recent years, an increasingly globalized world economy has led to a rise in labour mobility and migration, particularly within Europe. At the same time, there has been a relaxation of regulatory restrictions on aviation markets and this has encouraged increases in flights.\nThere is a subset of leisure passengers who travel for the purpose of ‘Visiting Friends or Relatives’ (VFR). Between 2000 and 2007, whilst total passengers to and from the UK grew by one-third, those travelling for the purpose of VFR increased by over three-quarters, much more than the growth in business and holiday travel.\nLooking forward, the current worldwide economic downturn is likely to impact upon VFR traffic, both through falls in UK GDP and changes in migration patterns. For these people, travel for VFR purposes is an indication of the desire to build and maintain relationships. The analysis in this study has been carried out using data which cover a period of significant change in terms of the increase in the number of countries belonging to the EU, the migration flows this has enabled and the liberalization of the EU air travel market (giving rise to more affordable air travel). In light of these one-off developments, it may not be realistic to assume continued growth of the same magnitude.` }
  ],
  tableHTML: `<table class="data-table"><thead><tr><th></th><th>Price Elasticities of Demand</th><th>Income Elasticities of Demand</th></tr></thead><tbody><tr><td>Business flights to UK destinations</td><td>n/a</td><td>1.4</td></tr><tr><td>Leisure flights to UK destinations</td><td>-1.0</td><td>1.5</td></tr><tr><td>Business flights to non-UK destinations</td><td>n/a</td><td>0.6</td></tr><tr><td>Leisure flights to non-UK destinations</td><td>-0.2</td><td>0.7</td></tr></tbody></table><p class="table-note">n/a = not available | Source: UK Department for Trade, 2009</p>`,
  questions: [
    {
      id: "a_i", marks: 2,
      text: "(a)(i) With reference to the data in Table 1, explain the effect on the total revenue from leisure flights to UK destinations of a fall in price.",
      rubric: [
        { point: "PED = -1 (Unitary)", keywords: ["ped", "-1", "unitary", "proportionate"], hint: "Did you state that PED is -1.0 and what that means for quantity?" },
        { point: "TR Unchanged", keywords: ["total revenue", "unchanged", "same", "offset", "p x q"], hint: "Did you explain that the fall in price is offset by the rise in quantity, leaving TR unchanged?" }
      ],
      modelAnswer: "1. PED = -1 → unitary PED; fall in price leads to proportionate increase in quantity demanded [1m]\n2. TR = P × Q; Total revenue unchanged. [1m]"
    },
    {
      id: "a_ii", marks: 2,
      text: "(a)(ii) With reference to the data in Table 1, explain the effect on the total revenue from leisure flights to UK destinations of a fall in income.",
      rubric: [
        { point: "YED = 1.5 (Luxury)", keywords: ["yed", "1.5", "luxury", "more than proportionate"], hint: "Did you identify YED=1.5 as a luxury good and note the more than proportionate drop in demand?" },
        { point: "TR Falls", keywords: ["total revenue", "falls", "decrease", "large fall"], hint: "Did you explain that both price and quantity fall, causing TR to fall significantly?" }
      ],
      modelAnswer: "1. YED = 1.5 → luxury goods; fall in income leads to a more than proportionate decrease in demand [1m]\n2. Ceteris paribus, greater fall in demand brings about a large fall in price and quantity, so total revenue falls to a large extent. [1m]"
    },
    {
      id: "b_i", marks: 2,
      text: "(b)(i) Explain one possible reason why the demand for leisure flights to non-UK destinations is less price-elastic than that for UK destinations.",
      rubric: [
        { point: "Fewer Substitutes (Non-UK)", keywords: ["substitutes", "ferries", "trains", "cars", "longer time", "not close"], hint: "Did you mention that trains/cars are poor substitutes for long-haul international travel?" },
        { point: "Close Substitutes (UK)", keywords: ["uk", "domestic", "close substitutes", "comparison"], hint: "Did you contrast this with UK domestic travel where trains/cars ARE close substitutes?" }
      ],
      modelAnswer: "1. Fewer close substitutes for leisure flights to non-UK destinations; Ferries, trains and cars take a much longer time compared to flights for travel outside the UK and are not close substitutes [1m]\n2. In comparison, other modes of transport to travel within UK (e.g. trains, cars) are close substitutes for leisure flights within UK [1m]"
    },
    {
      id: "b_ii", marks: 2,
      text: "(b)(ii) Explain one possible reason why the income elasticity of demand for business flights to UK destinations is higher than that for non-UK destinations.",
      rubric: [
        { point: "Necessity / Familiarity", keywords: ["necessity", "familiar", "local market", "communicated easily"], hint: "Did you explain that UK business travel is less necessary because information can be communicated easily locally?" },
        { point: "Physical Presence (Non-UK)", keywords: ["physical presence", "foreign", "gather information", "familiarize"], hint: "Did you note that non-UK travel is more necessary for physical presence in foreign markets?" }
      ],
      modelAnswer: "1. Higher income elasticity implies lower degree of necessity [1m]\n2. Less need to make a flight to local UK destination for business because business information can be communicated more easily within the UK due to familiarity with the local market, whereas a business flight to non-UK destinations may be more necessary since businesses need to have physical presence in foreign countries to familiarize themselves with the foreign markets, and to gather information [1m]"
    },
    {
      id: "c", marks: 2,
      text: "(c) Explain the likely value of the cross-elasticity of demand between high-speed rail travel and air travel.",
      rubric: [
        { point: "Definition & Sign", keywords: ["ced", "cross elasticity", "responsiveness", "positive", "substitutes"], hint: "Did you define CED and state that it is positive because they are substitutes?" },
        { point: "Magnitude (Small)", keywords: ["small", "less than 1", "short-haul", "domestic", "not close"], hint: "Did you explain that the value is small because rail only substitutes air on short-haul/domestic trips?" }
      ],
      modelAnswer: "1. Definition of CED: degree of responsiveness of demand of Good A to a change in the price of Good B, ceteris paribus [1m]\n2. Extract 1 → 'scope for a significant shift to high-speed rail... reduce demand for air travel' → Substitutes; CED value is likely to be positive, but small since they are not close substitutes as long-haul trips are not likely substituted with rail travel [1m]"
    },
    {
      id: "d", marks: 2,
      text: "(d) Explain either one demand or one supply factor that has led to a rise in VFR travel.",
      rubric: [
        { point: "Factor Identification", keywords: ["migration", "labour mobility", "deregulation", "liberalisation", "restrictions"], hint: "Did you identify a specific factor from Extract 4 (e.g., migration or deregulation)?" },
        { point: "Economic Chain", keywords: ["dd", "ss", "shift", "shortage", "surplus", "price", "quantity"], hint: "Did you show the chain: Factor → Shift in DD/SS → Shortage/Surplus → Price Change → Rise in VFR travel?" }
      ],
      modelAnswer: "Demand Factor:\n1. Extract 4 'Rise in labour mobility and migration' → Rise in consumer willingness to travel abroad to visit friends/relatives working overseas in order to stay connected [1m]\n2. ↑DD → shortage → ↑price that increases Qs to meet increased demand → rise in VFR travel [1m]\n\nSupply Factor:\n1. Extract 4 'relaxation of regulatory restrictions...' → greater ability of producers to offer flight service as there are less restrictions to hinder their production [1m]\n2. ↑SS → surplus → ↓price that increases Qd to meet greater supply → rise in VFR travel [1m]"
    }
  ]
};
