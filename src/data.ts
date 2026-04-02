export const categories = [
  "All",
  "Dispute Resolution & Litigation",
  "Tax & VAT Management",
  "Corporate Structuring & Licensing",
  "Finance & Accounting",
  "HR & Payroll Management",
  "Training & Academy"
];

export const categoryImages = {
  "Dispute Resolution & Litigation": [
    "1589829085413-56de8ae18c73", "1505664194779-8beaceb93744", "1528747045269-390fe33c19f2", 
    "1589391886645-051940f421f1", "1563986768609-322da13575f3", "1450101499162-43fcb1a11471", 
    "1603796846097-03a510105531", "1589828135870-8bbdbd26a27e", "1479142506502-19b3a3b7fb88", 
    "1521587760476-6c12a4b040da", "1589828236746-9351052d9a3b", "1423592707959-91893c5cbb66", 
    "1505663912202-ac22d4cb3707", "1555861496-0666c8981751", "1575505586569-646b2ca898fc"
  ],
  "Tax & VAT Management": [
    "1554224155-8d04cb21cd6c", "1460925895917-afdab827c52f", "1554224154-26032ffc0d07", 
    "1611974789855-9c2a0a7236a3", "1556742049-0cfed4f6a45b", "1578574577315-3f10ce0c1502", 
    "1620063259837-772986422cfb", "1483389132540-1e5c26ce992e", "1507925922837-326f12ab0009", 
    "1559526324-4b87b5e36e44", "1565514020179-026b52b84758", "1604594849809-fd39dc730303"
  ],
  "Corporate Structuring & Licensing": [
    "1664575602276-acd073f104c1", "1486406146926-c627a92ad1ab", "1507679799987-c73779587ccf", 
    "1444653614773-995cb1ef9efa", "1436450412740-6b188f2e4754", "1600880292203-757bb62b4baf", 
    "1497366216548-37526070297c", "1475503023192-23c285e05da3", "1600880292089-90a7e086ee1c", 
    "1504384308090-c894fdcc538d", "1497215528101-856f4ea42174", "1507537297725-24a1c029d3ca"
  ],
  "Finance & Accounting": [
    "1590283603385-17ffb3a7f29f", "1503422421313-91ee7387cc31", "1454165804606-c3d57bc86b40", 
    "1517048676732-dce9eb0d6768", "1554224155-8d04cb21cd6c", "1460925895917-afdab827c52f", 
    "1611974789855-9c2a0a7236a3", "1601597111158-2fceff292cdc", "1553729459-efe14ef6055d", 
    "1450101499162-43fcb1a11471", "1526304640581-d334cdbbf45e"
  ],
  "HR & Payroll Management": [
    "1521791136064-7986c2920216", "1556155092-490a1ba16284", "1453728018264-4414a92c3061", 
    "1521737604893-d14cc237f11d", "1542744173-8e7e53415bb0", "1573496359142-b8d87734a5a2", 
    "1556761175-5973dc0f32e7", "1475332222863-7182280d0d82", "1507206130118-b8d87734a5a2", 
    "1527689368864-3a521cbac268", "1553877522-43ce6dcbcaf1", "1552664730-d307ca884978"
  ],
  "Training & Academy": [
    "1516321497487-e288fb19713f", "1531482615713-2afd69097998", "1524178232363-1e420a71960d", 
    "1509062522246-3755977927d7", "1552664730-d307ca884978", "1588196749597-9e52e46ad3ed", 
    "1503694978374-8a2fa6873bce", "1513258496099-481a8040cb8e", "1475503023192-23c285e05da3", 
    "1551836022-4c4c79cb40bf", "1523240795612-9a054b0db644"
  ]
};

export const blogDataRaw = [
  // PART I: Dispute Resolution & Litigation 
  {
    id: 1,
    title: "Civil Litigation Assistance",
    category: "Dispute Resolution & Litigation",
    intro: "Civil litigation in Bangladesh operates under the procedural framework of the Code of Civil Procedure, 1908 (CPC). Navigating this landscape requires strategic foresight, as the system provides the structural mechanics for initiating, adjudicating, and executing civil claims spanning breach of contract, specific performance, and tortious liabilities. Given the heavy backlog in Bangladeshi courts, a meticulously prepared initial filing is critical to avoid years of procedural delays.",
    guidelines: "The CPC, alongside the Evidence Act of 1872 and the Limitation Act of 1908, dictates the lifecycle of a civil suit. The process inherently relies on establishing a valid 'cause of action' to determine both territorial (where the dispute occurred) and pecuniary (monetary value) jurisdiction. Under Order 7 Rule 11 of the CPC, a plaint can be outright rejected if it fails to disclose a clear cause of action or is barred by any law.",
    deadlines: "Deadlines are strictly governed by the Limitation Act, 1908, which categorizes timeframes based on the nature of the suit. For instance, Article 113 prescribes a three-year limit for specific performance of a contract, while Article 142 allows twelve years for recovery of immovable property. Missing these statutory deadlines results in the permanent barring of the legal remedy.",
    rates: "Court fees are calculated under the Court Fees Act, 1870. They primarily operate on an ad valorem (proportional to value) basis, typically calculated at 2% of the claim amount. However, to prevent exorbitant costs for high-value disputes, this fee is statutorily capped at BDT 40,000 for specific types of civil suits. Certain declaratory suits only require a fixed nominal fee of BDT 300.",
    documents: "A robust civil suit requires the submission of a Plaint (the formal statement of claim), a Vokalatnama (the legally binding power of attorney for the advocate), a comprehensive list of relied-upon documents (Firisti), and the original evidentiary documents or certified copies. A pre-action legal notice and its delivery receipt are often required as foundational evidence.",
    process: [
      "Case Preparation: The advocate drafts a detailed Plaint under Order 7 of the CPC, attaching all documentary evidence.",
      "Institution of Suit: The Plaint is formally presented to the court of appropriate jurisdiction (e.g., Assistant Judge, Joint District Judge) alongside the requisite court fees.",
      "Issuance of Summons: The court issues a summons to the defendant under Order 5, mandating their appearance within 30 working days.",
      "Written Statement: The defendant submits a Written Statement contesting the claims, often accompanied by a counter-claim if applicable.",
      "Mandatory ADR: Under Section 89A of the CPC, the court mandates an Alternative Dispute Resolution phase, freezing trial proceedings to attempt mediation.",
      "Framing of Issues: If ADR fails, the court identifies the core legal and factual disputes (Order 14) to be decided.",
      "Trial Phase: Parties engage in Discovery, Peremptory Hearing (PH), witness cross-examination, and final legal arguments.",
      "Judgment & Decree: The court pronounces a final judgment, which is subsequently formalized into an executable decree."
    ],
    penalties: "Failure of a defendant to appear or file a written statement results in an ex-parte decree against them. Conversely, a plaintiff’s failure to pursue the matter leads to the suit's dismissal for default. Willful delay tactics, presenting forged documents, or filing frivolous suits may invite compensatory costs against the offending party under Section 35A of the CPC, and potential perjury charges."
  },
  {
    id: 2,
    title: "Specific Performance of Contract",
    category: "Dispute Resolution & Litigation",
    intro: "When a party breaches a contract, financial compensation is not always adequate. A suit for Specific Performance compels the breaching party to execute their exact obligations as originally agreed, particularly vital in real estate transactions and unique commercial agreements.",
    guidelines: "Governed by the Specific Relief Act, 1877 (Sections 12-30). The court exercises discretionary power; specific performance is generally granted when the act agreed to be done is such that pecuniary compensation for its non-performance would not afford adequate relief.",
    deadlines: "Under Article 113 of the Limitation Act, 1908, a suit must be filed within 3 years from the date fixed for the performance, or, if no such date is fixed, when the plaintiff has notice that performance is refused.",
    rates: "Filing this suit requires ad valorem court fees based on the total value of the contract being enforced, capped at a maximum of BDT 40,000 under the Court Fees Act.",
    documents: "The original signed contract/agreement (Baina Nama), evidence of partial payment or earnest money, bank statements showing readiness to pay the balance, and legal notices demanding performance.",
    process: [
      "Notice: Serve a legal notice demanding the specific performance of the contract within a stipulated timeframe.",
      "Filing Plaint: Draft and file the civil suit demonstrating the plaintiff's continuous readiness and willingness to perform their part.",
      "Trial: Present evidence proving the execution of the contract and the defendant's unjustified refusal.",
      "Decree: The court orders the defendant to execute the obligations (e.g., executing a sale deed).",
      "Court Execution: If the defendant disobeys, the court can execute the deed on behalf of the defendant through execution proceedings."
    ],
    penalties: "If the court finds the plaintiff was not genuinely ready to perform their part (lacked funds), the suit will be dismissed with compensatory costs. Falsifying contract documents carries severe criminal perjury penalties."
  },
  {
    id: 3,
    title: "Injunction & Declaratory Suit",
    category: "Dispute Resolution & Litigation",
    intro: "Injunctions and Declaratory Suits are powerful preemptive tools. They are used to establish legal rights before they are violated or to immediately stop a party from causing irreparable harm to property or commercial interests during ongoing litigation.",
    guidelines: "Declaratory decrees are issued under Section 42 of the Specific Relief Act, 1877. Temporary injunctions (stay orders) are governed by Order 39, Rules 1 and 2 of the Code of Civil Procedure (CPC), preventing the alteration or sale of disputed property.",
    deadlines: "A suit for declaration of a right without seeking consequential relief must generally be filed within 3 years under Article 119/120 of the Limitation Act. Injunction applications are filed immediately when an imminent threat is perceived.",
    rates: "A pure declaratory suit requires a fixed nominal court fee of BDT 300. However, if consequential relief (like recovery of possession) is added, ad valorem fees (up to BDT 40,000) apply.",
    documents: "Prima facie evidence of the right being claimed (deeds, licenses, contracts), photographic evidence of imminent harm, and an urgent affidavit swearing the facts of the emergency.",
    process: [
      "Filing: File the main suit along with an urgent application for an ad-interim (temporary) injunction.",
      "Urgent Hearing: The court hears the injunction petition, often issuing a temporary stay order to maintain the status quo.",
      "Show Cause: The opposing party is issued a notice to show cause why the injunction shouldn't be made permanent.",
      "Evidence & Trial: The court examines the validity of the legal right being claimed.",
      "Final Judgment: The court issues a final decree declaring the rights and granting a permanent injunction."
    ],
    penalties: "Violating a court-ordered injunction is Contempt of Court under Order 39 Rule 2(3) of the CPC. The violator's property may be attached, and they can be sent to civil prison for up to 6 months."
  },
  {
    id: 4,
    title: "Land & Property Disputes",
    category: "Dispute Resolution & Litigation",
    intro: "Land disputes represent a massive proportion of civil litigation in Bangladesh due to historical fragmentation, rapid urbanization, unrecorded inheritances, and complex overlapping land laws. Resolving these disputes requires tracing titles from the British era to modern-day surveys.",
    guidelines: "Title disputes and possessory rights are resolved via the Specific Relief Act, 1877. Partition of joint family properties is governed by the Partition Act, 1893. The State Acquisition and Tenancy Act, 1950 governs statutory tenancy and land records.",
    deadlines: "Suits for recovery of possession based on title must generally be filed within 12 years of dispossession. A summary suit for recovery without proving title (Section 9, Specific Relief Act) must be filed within 6 months.",
    rates: "Ad valorem court fees (capped at BDT 40,000) apply for suits involving the recovery of possession or partition. Pure declaration suits attract a fixed fee of BDT 300.",
    documents: "Original purchase deed (Saf Kabala), inheritance documents (Warishan), historical and recent land records (CS, SA, RS, BS Khatians), up-to-date land tax (Khajna) receipts, and mutation documents (DCR).",
    process: [
      "Title Vetting: Cross-referencing deeds with government Khatian records to identify discrepancies.",
      "Filing the Suit: A plaint is filed for declaration of title, partition, or cancellation of a fraudulent deed.",
      "Injunction: Applying for a temporary stay to stop the land from being sold during the trial.",
      "Commissioning: Appointing an Advocate Commissioner to physically measure the land.",
      "Final Decree: The court declares rightful ownership and orders the registry to update records."
    ],
    penalties: "Presenting forged deeds in land disputes triggers criminal proceedings for forgery under the Penal Code. Failing to legally partition property prevents lawful commercial development or transfer of the asset."
  },
  {
    id: 5,
    title: "Writ Petition & Constitutional Remedies",
    category: "Dispute Resolution & Litigation",
    intro: "A Writ Petition is the ultimate legal mechanism for citizens and corporations to challenge the state. It is filed exclusively in the High Court Division to quash arbitrary government orders, compel public duties, or release unlawfully detained individuals.",
    guidelines: "Writ jurisdiction is derived entirely from Article 102 of the Constitution of Bangladesh. Writs include Certiorari (quashing), Mandamus (compelling), Prohibition (stopping), Habeas Corpus (producing a body), and Quo Warranto (challenging authority).",
    deadlines: "While the Constitution sets no rigid numerical deadline, the High Court strictly enforces the 'Doctrine of Laches'. Petitions must be filed 'without unreasonable delay' (usually within 3-6 months) after the government action occurs.",
    rates: "Involves Supreme Court filing fees and non-judicial stamp duties. No ad-valorem property fees are charged, ensuring constitutional remedies are theoretically accessible regardless of the monetary value of the dispute.",
    documents: "A specially drafted Writ Petition, sworn affidavits, certified copies of the impugned government gazettes or orders, and proof of a prior 'Demand for Justice' notice sent to the government.",
    process: [
      "Demand for Justice: Serve a formal legal notice to the relevant ministry demanding rectification.",
      "Motion Hearing: Present the petition to a High Court Bench. If satisfied, the court issues a 'Rule Nisi' asking the state to justify its actions.",
      "Stay Order: The court may grant an interim stay suspending the government order.",
      "Final Hearing: After the government files an Affidavit-in-Opposition, arguments are heard.",
      "Judgment: The Rule is either made Absolute (petitioner wins) or Discharged."
    ],
    penalties: "If a government official disobeys a High Court writ directive, they face severe Contempt of Court proceedings, leading to potential imprisonment and dismissal from government service."
  },
  {
    id: 6,
    title: "Fundamental Right Protection",
    category: "Dispute Resolution & Litigation",
    intro: "The Constitution of Bangladesh guarantees specific, unalienable rights to all citizens, including equality before the law, freedom of speech, assembly, and protection of property. When these are violated by state actors, specialized litigation is required.",
    guidelines: "Fundamental Rights are codified in Part III (Articles 26 to 47) of the Constitution. Article 44 specifically empowers citizens to move the High Court Division under Article 102(1) for the strict enforcement of these rights.",
    deadlines: "Actions must be initiated promptly after the violation occurs to avoid dismissal due to laches. Delaying enforcement implies acquiescence to the violation.",
    rates: "Standard High Court procedural and filing fees apply. The focus is on constitutional interpretation rather than commercial recovery, avoiding heavy ad valorem costs.",
    documents: "Detailed affidavits, documented evidence of the rights violation (e.g., unlawful seizure notices, discriminatory policy documents), and pertinent Supreme Court precedent cases.",
    process: [
      "Assessment: Legal counsel determines if the violating party qualifies as a 'State' or 'Statutory Public Authority'.",
      "Petition Drafting: Frame the grievance precisely around the specific Constitutional Article violated.",
      "Filing & Rule Nisi: The High Court issues a rule upon the government to explain the constitutional validity of their action.",
      "Adjudication: The court interprets the law and may strike down unconstitutional statutes or executive orders entirely."
    ],
    penalties: "Any law or executive order found to be inconsistent with Fundamental Rights is declared void ab initio (invalid from the outset) by the Supreme Court, forcing immediate government policy reversal."
  },
  {
    id: 7,
    title: "Government & Administrative Disputes",
    category: "Dispute Resolution & Litigation",
    intro: "Disputes involving public servants, government employment contracts, pensions, and disciplinary actions are handled outside standard civil courts to ensure specialized and expedited resolution for state machinery.",
    guidelines: "Governed primarily by the Administrative Tribunals Act, 1980. The Administrative Tribunal has exclusive jurisdiction over terms and conditions of service for persons in the service of the Republic.",
    deadlines: "A public servant must file an application to the Tribunal within 6 months from the date of the final administrative order regarding their grievance (e.g., dismissal, denial of promotion).",
    rates: "Filing fees in the Administrative Tribunal are nominal, designed to be accessible for government employees seeking redress against higher authorities.",
    documents: "The official government appointment letter, impugned dismissal or disciplinary orders, departmental inquiry reports, and relevant Service Rules or Gazettes.",
    process: [
      "Departmental Appeal: The employee must first exhaust all internal departmental appeal mechanisms.",
      "Tribunal Filing: File the case before the Administrative Tribunal.",
      "State Defense: The government files a written reply justifying the administrative action.",
      "Hearing & Order: The Tribunal assesses if due process (natural justice) was followed during the disciplinary action.",
      "Appellate Tribunal: Appeals against the decision go to the Administrative Appellate Tribunal."
    ],
    penalties: "If the Tribunal finds the government action arbitrary, it can order immediate reinstatement with full back pay and seniority. Frivolous cases by employees can result in official reprimands."
  },
  {
    id: 8,
    title: "Family & Personal Disputes",
    category: "Dispute Resolution & Litigation",
    intro: "Family disputes involve a sensitive intersection of statutory frameworks and personal religious laws. For the Muslim majority, matters are regulated to protect women and children during divorce, maintenance disputes, and polygamy issues.",
    guidelines: "The Family Courts Ordinance, 1985, gives family courts exclusive jurisdiction over dissolution of marriage, restitution of conjugal rights, dower (mahr), maintenance, and child custody. The Muslim Family Laws Ordinance (MFLO), 1961, regulates Talaq and restricts polygamy.",
    deadlines: "Suits for 'prompt' dower must be filed within 3 years of refusal. Claims for past maintenance are subject to limitation based on contract. A divorce (Talaq) becomes legally effective 90 days after notice is served to the local Mayor/Chairman.",
    rates: "To ensure access to justice, the statutory court fee for instituting any family suit (regardless of the dower amount claimed) is fixed at a nominal BDT 300.",
    documents: "Kabin-nama (marriage contract), national IDs, birth certificates of children, notices sent to the Arbitration Council, and evidence of the husband's financial capacity.",
    process: [
      "Initiation: Suit is initiated via a plaint in the Family Court.",
      "Pre-Trial Mediation: The judge must hold an in-camera hearing to attempt reconciliation.",
      "Evidence & Trial: If mediation fails, the court records witness testimonies and assesses maintenance capacity.",
      "Post-Trial Mediation: A second attempt at compromise is mandated before judgment.",
      "Decree: Court issues binding decree for dower, maintenance, or custody."
    ],
    penalties: "Willful failure by a husband to pay court-ordered maintenance or dower can result in immediate asset attachment or civil imprisonment. Bypassing the Arbitration Council for divorce or second marriage is a criminal offense."
  },
  {
    id: 9,
    title: "Court Petition Drafting",
    category: "Dispute Resolution & Litigation",
    intro: "The outcome of a lawsuit is frequently decided by the quality of its initial drafting. Plaints, Written Statements, and Interlocutory Applications must strictly adhere to procedural rules; a poorly drafted petition can lead to immediate dismissal.",
    guidelines: "Drafting is rigidly governed by Order 6 (Pleadings Generally), Order 7 (Plaint), and Order 8 (Written Statement) of the CPC. Pleadings must state material facts concisely, but not the evidence by which they are to be proved.",
    deadlines: "Written Statements (defense) must generally be filed within 30 working days from the date of the first appearance, extendable at the court's discretion under strict conditions.",
    rates: "Drafting fees are not statutorily fixed; they are negotiated professional fees based on the complexity of the facts, the legal research required, and the seniority of the drafting counsel.",
    documents: "Requires complete access to the client’s raw evidentiary documents, chronological timelines of events, and previous legal notices exchanged between the parties.",
    process: [
      "Fact-Finding: The advocate extracts a chronological narrative from the client.",
      "Legal Subsumption: Facts are mapped against statutory elements (e.g., mapping a breach to specific Contract Act sections).",
      "Drafting: The formal document is drafted, ensuring jurisdiction, valuation, and cause of action are explicitly stated.",
      "Verification: The client signs a mandatory affidavit verifying the factual accuracy of the drafted petition."
    ],
    penalties: "Under Order 6 Rule 16, the court may order any pleading to be struck out if it is unnecessary, scandalous, frivolous, or vexatious, severely penalizing the presenting party."
  },
  {
    id: 10,
    title: "Evidence & Document Management",
    category: "Dispute Resolution & Litigation",
    intro: "A legal claim is only as strong as the evidence supporting it. The strategic collation, sequencing, and presentation of documentary and oral evidence dictate the trajectory of cross-examinations and final judgments.",
    guidelines: "Strictly governed by the Evidence Act, 1872. It categorizes evidence into primary (original documents) and secondary (certified copies) and dictates the strict sequence of Examination-in-Chief, Cross-Examination, and Re-Examination.",
    deadlines: "Documentary evidence must generally be submitted to the court at the time of filing the plaint (by the plaintiff) or the written statement (by the defendant) through a formal 'Firisti' (list of documents).",
    rates: "Involves procedural costs for obtaining certified copies from government registries, notary fees, and transcription costs for voluminous corporate ledgers.",
    documents: "Original commercial contracts, banking ledgers, email correspondences (subject to digital evidence rules under the ICT Act), and sworn witness affidavits.",
    process: [
      "Discovery: Parties formally request the opposing side to produce specific hidden documents.",
      "Admission/Denial: Parties review submitted documents and formally admit or deny their authenticity.",
      "Marking Exhibits: During trial, valid documents are formally marked as 'Exhibits' by the judge.",
      "Cross-Examination: Opposing counsel aggressively questions witnesses to dismantle the credibility of the submitted evidence."
    ],
    penalties: "Concealing material documents or submitting fabricated evidence constitutes perjury and forgery, triggering parallel criminal proceedings and leading to adverse inferences (presumptions against the concealing party) by the judge."
  },
  {
    id: 11,
    title: "Cause List & Case Tracking",
    category: "Dispute Resolution & Litigation",
    intro: "In a heavily backlogged judicial system, missing a single hearing date can result in a case being thrown out entirely. Systematic tracking of the daily Cause List is an administrative necessity for litigation survival.",
    guidelines: "The Cause List is the official daily schedule of a specific court, dictating which cases will be heard and for what purpose (e.g., framing issues, hearing witnesses, judgment). Regulated by internal court administration rules.",
    deadlines: "Tracking is a daily, real-time obligation. If a case is called and the plaintiff's advocate is absent, the suit may be dismissed for default on that exact day.",
    rates: "Case tracking is a standard administrative service provided within the retained counsel's broader litigation fee structure.",
    documents: "Requires the specific Case Number, Year, Court Name, and the names of the corresponding parties to utilize online Supreme Court trackers or physical District Court boards.",
    process: [
      "Daily Review: Court clerks or junior advocates review the published cause lists every evening for the next day's schedule.",
      "Digital Tracking: Utilizing the Supreme Court or District Court online portals to track case status updates.",
      "Client Update: Informing the client if their physical presence is required for testimony.",
      "Appearance: Counsel appears before the judge at the designated serial number to advance the case."
    ],
    penalties: "If a plaintiff fails to appear, the case is 'Dismissed for Default' (Order 9 Rule 8 CPC). If a defendant fails to appear, the court may proceed 'Ex-Parte', issuing a binding judgment against them without hearing their defense."
  },
  {
    id: 12,
    title: "Judgment & Decree Execution",
    category: "Dispute Resolution & Litigation",
    intro: "Winning a lawsuit does not automatically put money in your bank or return your land. If the losing party refuses to comply voluntarily, you must initiate separate Execution (Jari) proceedings to force compliance through state power.",
    guidelines: "Execution proceedings are highly technical and governed entirely by Order 21 of the CPC, which provides the mechanics for attaching property, garnishing bank accounts, and civil arrest.",
    deadlines: "Under the Limitation Act, a decree-holder has exactly 12 years from the date of the decree to execute it. If no steps are taken within this window, the decree becomes a dead letter and unenforceable.",
    rates: "Execution requires additional court fees, poundage fees (a percentage paid to the court if property is auctioned), and police assistance fees if forced eviction is necessary.",
    documents: "The certified copy of the final Judgment, the formal Decree, and a detailed Execution Petition listing the specific assets of the judgment-debtor to be seized.",
    process: [
      "Filing: The decree-holder files the Execution Petition in the court that passed the decree.",
      "Notice: The court issues a notice to the debtor demanding compliance.",
      "Attachment: If unpaid, the court orders the physical attachment (seizure) of the debtor’s property or bank accounts.",
      "Auction: Attached properties are publicly auctioned by the court to realize the decreed amount.",
      "Delivery: The court utilizes police force to physically evict trespassers and deliver land possession."
    ],
    penalties: "Judgment-debtors who deliberately hide assets or violently resist court bailiffs during execution face severe sanctions, including being sent to civil prison for up to 6 months until the debt is paid."
  },
  {
    id: 13,
    title: "Arbitration Support",
    category: "Dispute Resolution & Litigation",
    intro: "Arbitration provides a confidential, specialized, and significantly faster avenue for resolving high-value corporate, construction, and international trade disputes outside the heavily backlogged traditional court system.",
    guidelines: "Stringently regulated by the Arbitration Act, 2001, modeled on the UNCITRAL Model Law. It allows for both domestic and international commercial arbitration, emphasizing party autonomy.",
    deadlines: "Statutory deadlines exist for challenging an award: an application to set aside an arbitral award must be filed in the District Court (or High Court for international) within 60 days from receiving the award.",
    rates: "Involves paying the arbitrators and the institution. Institutions like BIAC impose Registration Fees, plus scaled administrative and arbitrator fees based on the total claim amount.",
    documents: "A valid, written Arbitration Agreement or a specific arbitration clause embedded within the main commercial contract. Enforcement requires the original arbitral award.",
    process: [
      "Invocation: Serve a formal Notice of Arbitration to the opposing party.",
      "Tribunal Constitution: Arbitrators are appointed by mutual consent or by the chosen institution.",
      "Pleadings & Hearings: Statement of Claim/Defense are filed, followed by private evidentiary hearings.",
      "The Award: The tribunal issues a final, binding Arbitral Award.",
      "Enforcement: The award is executed through the civil courts exactly like a court decree."
    ],
    penalties: "An arbitral award is final. Refusing to comply voluntarily leads to execution proceedings where assets can be attached. Delaying execution accrues statutory interest."
  },
  {
    id: 14,
    title: "Mediation Services",
    category: "Dispute Resolution & Litigation",
    intro: "Mediation is a non-adversarial process where a neutral third party helps disputing factions reach a mutually acceptable compromise. It saves immense litigation costs, preserves commercial relationships, and is deeply embedded in Bangladeshi civil procedure.",
    guidelines: "Governed heavily by Section 89A of the CPC, which makes mediation a mandatory phase in almost all civil suits before a trial can commence. Family disputes also mandate mediation under the Family Courts Ordinance.",
    deadlines: "Under Section 89A, once the court refers a matter to mediation, the mediator must conclude the process and submit a report to the court within a strict 60 to 90-day window.",
    rates: "Mediator fees are either agreed upon by the parties privately or fixed by the court if a court-appointed mediator is utilized. Successful mediation results in a refund of the original civil court fees.",
    documents: "A concise summary of the dispute, settlement proposals, and upon success, a mutually signed Compromise Agreement (Solenama).",
    process: [
      "Referral: The judge pauses the civil trial and orders the parties to attempt mediation.",
      "Appointment: A neutral mediator (often a senior advocate or retired judge) is appointed.",
      "Joint & Private Sessions: The mediator holds confidential discussions to identify underlying interests.",
      "Settlement: If an agreement is reached, it is drafted into a 'Solenama'.",
      "Court Decree: The judge passes a final, binding decree based exactly on the terms of the Solenama."
    ],
    penalties: "There are no penalties for failing to reach a mediation settlement; the case simply returns to standard trial. However, a decree passed on a successful mediation (Solenama) cannot be appealed."
  },
  {
    id: 15,
    title: "Settlement Negotiation",
    category: "Dispute Resolution & Litigation",
    intro: "Before initiating hostile litigation, strategic settlement negotiations can resolve commercial disputes quietly. This is highly utilized in corporate debt recovery, breach of contract, and employment severance disputes.",
    guidelines: "Governed by the general principles of the Contract Act, 1872. Negotiations are generally conducted 'Without Prejudice', meaning offers made during this phase cannot be used as admissions of liability in future court trials.",
    deadlines: "Negotiations must be carefully timed so they do not accidentally cause the statutory limitation period for filing a lawsuit to expire while waiting for a settlement.",
    rates: "Lawyers typically charge an hourly advisory fee or a fixed strategic retainer for managing complex corporate negotiations, sometimes including a success fee percentage.",
    documents: "Demand letters, 'Without Prejudice' correspondence, draft settlement deeds, and Non-Disclosure Agreements (NDAs) to ensure the terms of the settlement remain confidential.",
    process: [
      "Leverage Assessment: Legal counsel evaluates the strength of the client's case and financial exposure.",
      "Demand Notice: A formal, aggressive legal notice is sent to force the opposing party to the table.",
      "Bilateral Meetings: Counsel represents the client in direct negotiations, aiming for a favorable compromise.",
      "Drafting the Deed: Once agreed, a watertight Settlement Deed and General Release of Claims is drafted and executed."
    ],
    penalties: "Breaching a finalized Settlement Deed constitutes a fresh breach of contract, allowing the aggrieved party to sue immediately on the finalized settlement amount without re-litigating the original dispute."
  },
  {
    id: 16,
    title: "Dispute Resolution Advisory",
    category: "Dispute Resolution & Litigation",
    intro: "Pre-litigation advisory is the process of mapping out the legal battlefield before a single shot is fired. It involves assessing the financial viability of suing versus the risk of losing, ensuring corporate clients don't throw good money after bad.",
    guidelines: "Advisory services rely on an encyclopedic knowledge of statutory laws, Supreme Court precedents, and a pragmatic understanding of the actual timeline and costs of the Bangladeshi judicial system.",
    deadlines: "Advisory must be sought immediately when a commercial relationship sours, ensuring critical evidence is preserved and statutory limitation periods are identified and tracked.",
    rates: "Billed as professional consultation fees, which depend entirely on the complexity of the commercial matrix and the volume of documents requiring review.",
    documents: "Internal company emails, executed contracts, invoices, delivery receipts, and previous communications with the opposing party.",
    process: [
      "Fact Gathering: Comprehensive review of the entire transaction history.",
      "Merit Analysis: Legal counsel identifies the core 'cause of action' and assesses its strength.",
      "Cost-Benefit Matrix: Comparing the expected litigation costs and multi-year delays against the potential recovery amount.",
      "Strategic Roadmap: Providing a written blueprint recommending aggressive litigation, strategic arbitration, or immediate settlement."
    ],
    penalties: "Failing to seek advisory before acting can lead a company to accidentally waive its legal rights, destroy its own evidence, or file fundamentally flawed lawsuits that are dismissed with heavy costs."
  },
  {
    id: 17,
    title: "Appeal Preparation",
    category: "Dispute Resolution & Litigation",
    intro: "When a lower court delivers an erroneous judgment based on flawed logic or misinterpretation of evidence, the aggrieved party has the statutory right to challenge that decision in a higher appellate forum.",
    guidelines: "Civil appeals are governed by Order 41 of the CPC. Criminal appeals are governed by the Code of Criminal Procedure (CrPC). An appeal is considered a continuation of the original suit, but generally only re-examines the existing record, not new evidence.",
    deadlines: "Strictly governed by the Limitation Act. An appeal to a District Judge must generally be filed within 30 days of the lower court's decree. An appeal to the High Court Division must be filed within 90 days.",
    rates: "Filing an appeal requires paying ad valorem court fees again, based on the value of the subject matter being disputed in the appeal, capped at BDT 40,000.",
    documents: "Certified copies of the lower court's Judgment and Decree, and a meticulously drafted 'Memorandum of Appeal' explicitly stating the specific grounds where the lower judge erred.",
    process: [
      "Judgment Review: Senior counsel dissects the lower court judgment to find errors in law or fact.",
      "Drafting Grounds: Drafting the Memorandum of Appeal focusing strictly on judicial errors.",
      "Filing & Admission: Filing the appeal and arguing for its formal admission before the appellate judge.",
      "Stay Application: Simultaneously applying for a stay order to stop the winning party from executing the lower court decree.",
      "Final Arguments: Extensive legal arguments based on paper books (case records)."
    ],
    penalties: "Missing the 30 or 90-day limitation period permanently bars the right to appeal, rendering the lower court's erroneous judgment final, binding, and immediately executable."
  },
  {
    id: 18,
    title: "Revision & Review Petition",
    category: "Dispute Resolution & Litigation",
    intro: "When no direct right of appeal exists, or when an appellate court itself has committed a gross jurisdictional error, Revision and Review petitions serve as the final, highly technical safety valves in the judicial system.",
    guidelines: "Revision is governed by Section 115 of the CPC, allowing a higher court to correct a lower court that exercised jurisdiction it didn't have. Review is governed by Section 114, allowing the *same* judge to correct an obvious mistake on the face of the record.",
    deadlines: "A Review petition must be filed within 30 days of the decree or order. A Civil Revision to the High Court Division generally must be filed within 90 days.",
    rates: "Revision and Review petitions generally attract fixed, nominal court fees rather than heavy ad valorem fees, as they deal with procedural or jurisdictional errors rather than substantive property valuations.",
    documents: "Certified copies of the impugned order, and a drafting explicitly highlighting the 'error apparent on the face of the record' or the specific jurisdictional overreach.",
    process: [
      "Error Identification: Counsel identifies a procedural illegality, not just a disagreement with the facts.",
      "Drafting: The petition is framed heavily around Supreme Court precedents defining jurisdictional errors.",
      "Motion Hearing: In Revision, moving the High Court bench to issue a Rule upon the opposite party.",
      "Adjudication: The higher court limits its focus strictly to the procedural or jurisdictional flaw."
    ],
    penalties: "These petitions have a very low success rate if used merely as a delay tactic. Filing a frivolous Revision to drag out a settled case often results in the High Court dismissing the petition with exemplary financial costs."
  },
  {
    id: 19,
    title: "High Court Litigation Support",
    category: "Dispute Resolution & Litigation",
    intro: "Practicing before the High Court Division and Appellate Division of the Supreme Court requires highly specialized procedural knowledge. It involves complex writ petitions, company matters, admiralty suits, and final appellate advocacy.",
    guidelines: "Governed by the Constitution of Bangladesh and the specific Supreme Court Rules. Only advocates specifically enrolled and permitted by the Bar Council may practice in the High Court Division.",
    deadlines: "Varies wildly based on the jurisdiction. Civil Revisions (90 days), Writ Petitions (promptly), and Leave to Appeal to the Appellate Division (30 days from the High Court judgment).",
    rates: "High Court litigation involves substantial professional fees due to the required seniority of counsel, alongside standard fixed Supreme Court filing fees and paper-book preparation costs.",
    documents: "Extensive 'Paper Books' containing the entire history of the case from the lowest courts, sworn affidavits, certified judgments, and Vokalatnamas specifically authorized for Supreme Court practitioners.",
    process: [
      "Briefing Senior Counsel: Lower court advocates brief enrolled High Court practitioners on the case history.",
      "Drafting & Swearing: Complex petitions are drafted and sworn before the Commissioner of Affidavits.",
      "Motion Moving: Counsel 'moves' the motion before the designated dual-judge High Court Bench to secure an initial Rule or Stay.",
      "Paper Book Preparation: If admitted, official printed records of the case are prepared for final hearing."
    ],
    penalties: "Misrepresenting facts or attempting to mislead a High Court Bench results in severe Contempt of Court proceedings, massive fines, and potential suspension of the advocate’s license."
  },
  {
    id: 20,
    title: "Legal Opinion & Strategy",
    category: "Dispute Resolution & Litigation",
    intro: "The formulation of corporate litigation strategies and the provision of formal legal opinions are critical risk-management tools. Before executing mergers, acquiring land, or terminating large contracts, a formal legal opinion shields directors from claims of negligence.",
    guidelines: "The professional conduct of advocates is strictly governed by the Bangladesh Legal Practitioners and Bar Council Order, 1972. These rules mandate absolute client-attorney privilege and require objective, unbiased advice.",
    deadlines: "Strategic deadlines are not uniform; they depend entirely on the underlying substantive law of the issue. Advocates must act with professional promptness to prevent the expiration of their client's legal rights.",
    rates: "Legal consultation and opinion fees are not statutorily capped. Fees are determined by private contract based on the complexity of the issue, financial stakes, and the seniority of the counsel.",
    documents: "Formal representation requires a duly signed Vokalatnama. Drafting relies on primary evidentiary documents, internal communications, and contracts, cross-referenced with Supreme Court precedents.",
    process: [
      "Initial Briefing: The advocate conducts an in-depth consultation to gather facts and identify commercial objectives.",
      "Legal Research: Comprehensive review of statutory laws and recent Appellate Division case laws (DLR, ALR).",
      "Risk Assessment: Evaluating the strengths, weaknesses, and potential financial exposure of the client's position.",
      "Drafting the Opinion: A formal, written legal opinion is issued, outlining legal merits and recommended preemptive actions."
    ],
    penalties: "Advocates violating the Canons of Professional Conduct (e.g., breaching confidentiality or representing opposing parties) face disciplinary action by the Bar Council Tribunal, up to permanent disbarment."
  },
  // PART II: Tax & VAT Management
  {
    id: 21,
    title: "Corporate Tax Return Filing",
    category: "Tax & VAT Management",
    intro: "Corporate taxation in Bangladesh operates primarily on a universal self-assessment basis. This system is designed to encourage transparency, banking channel transactions, and public listings by offering tiered tax rates. Navigating the corporate tax regime requires meticulous reconciliation of accounting profits with statutory tax rules to avoid massive disallowances.",
    guidelines: "Corporate tax is entirely governed by the new Income Tax Act (ITA), 2023, which replaced the 1984 ordinance. It is augmented annually by the Finance Act passed during the national budget. The ITA mandates that all corporate transactions above BDT 500,000 must be conducted via banking channels to be recognized as allowable expenses.",
    deadlines: "The corporate income year runs from 1 July to 30 June. The statutory deadline for filing the corporate tax return (Tax Day) is the 15th day of the ninth month following the end of the income year, or 15 September, whichever is earlier.",
    rates: "Tax rates are tiered to incentivize formalization. Non-Publicly Traded Companies face a standard rate of 27.5% (reducible to 25.0% if strict banking compliance is met). Publicly Listed companies enjoy lower rates between 20% and 22.5%.",
    documents: "A complete filing requires audited financial statements (with ICAB DVC), complex computation sheets reconciling net profit with taxable income, depreciation schedules, proof of Advance Income Tax (AIT) payments, and a detailed statement of withholding tax compliance.",
    process: [
      "Financial Closure: The company closes its books and undergoes a mandatory statutory audit by a registered CA firm.",
      "Tax Adjustments: Management computes the tax liability by adding back accounting depreciation and 'inadmissible expenses'.",
      "Credit Adjustments: Advance taxes paid at the import stage and TDS deducted by clients are credited against the total liability.",
      "Payment & Filing: Any shortfall is paid into the treasury via an automated A-Challan, and the return is filed."
    ],
    penalties: "Late filing immediately invalidates the self-assessment privilege, subjecting the company to a regular assessment. It incurs a penalty of 10% of the last assessed tax (minimum BDT 1,000) plus BDT 50 for every day of delay."
  },
  {
    id: 22,
    title: "Tax Compliance & Reporting",
    category: "Tax & VAT Management",
    intro: "To ensure a steady flow of revenue, the National Board of Revenue shifts the primary responsibility of tax collection onto corporate entities. Companies act as unpaid tax collectors via the strict mechanisms of ongoing Tax Deducted at Source (TDS).",
    guidelines: "TDS is rigorously governed by Part 7 of the ITA 2023. Sections 108 and 108A dictate the mandatory reporting of employee salary data. Companies are legally bound to deduct tax before making payments to vendors.",
    deadlines: "Quarterly Withholding Tax Returns must be filed by the 15th of October, January, April, and July. The annual 108A statement regarding employee salaries must be filed by April 30th.",
    rates: "TDS rates are highly specific (e.g., 20% for professional services, 10% for dividends, 5-7% for general suppliers). If the payee lacks Proof of Submission of Return (PSR), the TDS rate increases by 50%.",
    documents: "Schedules of all payments made, treasury challans proving TDS was deposited, TDS certificates issued to vendors, and the TIN/PSR serial numbers of all employees.",
    process: [
      "Deduction: Calculate and deduct statutory TDS at the exact moment of payment to a vendor or employee.",
      "Deposit: Aggregate the deducted tax and deposit it into the government treasury via an A-Challan within two weeks.",
      "Certification: Issue a formal Withholding Tax Certificate to the vendor.",
      "Reporting: Compile and reconcile all transactions in the mandatory quarterly withholding return."
    ],
    penalties: "Failure to deduct or deposit TDS results in the complete disallowance of that business expense in the company's own tax assessment, artificially inflating corporate tax liabilities alongside default fines."
  },
  {
    id: 23,
    title: "Tax Planning & Advisory",
    category: "Tax & VAT Management",
    intro: "Effective tax planning ensures that a business optimizes its tax incidence without crossing the line into illegal tax evasion. It involves structuring transactions, supply chains, and employee benefits to maximize statutory allowances.",
    guidelines: "Advisory relies on deep interpretations of the ITA 2023, the utilization of Double Taxation Avoidance Agreements (DTAA) for cross-border transactions, and strict compliance with Transfer Pricing rules.",
    deadlines: "Tax planning must be conducted proactively before commercial transactions are executed or contracts are signed, as post-transaction restructuring is often flagged by the NBR as evasion.",
    rates: "Strategic planning aims to lower the effective corporate tax rate by utilizing sector-specific reduced rates, maximizing export rebates, and ensuring all expenses are legally admissible.",
    documents: "Corporate structure charts, proposed commercial contracts, cross-border loan agreements, and detailed transfer pricing documentation for multinational transactions.",
    process: [
      "Diagnostic Review: Advisors analyze the current corporate structure and historical tax filings.",
      "Transaction Structuring: Restructuring planned M&A or supply chain routes to utilize statutory tax loopholes safely.",
      "DTAA Utilization: For foreign entities, applying treaty benefits to reduce withholding taxes on dividends and royalties.",
      "Implementation: Drafting the necessary board resolutions and contracts to solidify the tax-efficient structure."
    ],
    penalties: "Aggressive tax planning that lacks commercial substance can trigger the General Anti-Avoidance Rules (GAAR), leading the NBR to re-characterize the transaction and apply heavy evasion penalties."
  },
  {
    id: 24,
    title: "Individual Tax Services",
    category: "Tax & VAT Management",
    intro: "Individual taxation in Bangladesh mandates broad inclusion, shifting focus from merely taxing salary to effectively tracking overall wealth accumulation. The NBR enforces mandatory asset declarations to curb black money.",
    guidelines: "The ITA 2023 strictly dictates individual tax thresholds, the calculation of income across seven distinct 'heads' (Salary, Rent, Business, Capital Gains, etc.), and the imposition of net wealth surcharges.",
    deadlines: "The statutory deadline (Tax Day) for individual tax return submission is 30 November of the assessment year. Extensions of up to 90 days can be requested but may attract interest.",
    rates: "The tax-free threshold is currently BDT 350,000. Subsequent income is taxed progressively up to 25%. A Wealth Surcharge (10% to 35% of tax payable) applies if net assets exceed BDT 4 Crore.",
    documents: "A 12-digit e-TIN, National ID, bank statements, salary certificates, proof of investments (for tax rebates), and property deeds to substantiate the IT-10B Wealth Statement.",
    process: [
      "Income Aggregation: Aggregate global income across all statutory heads.",
      "Rebate Calculation: Calculate eligible investments in approved sectors to claim tax rebates.",
      "Asset Declaration: Prepare the IT-10B statement, reconciling year-over-year growth in net wealth.",
      "e-Filing: Submit electronically via the NBR's e-tax portal to generate an instant acknowledgment slip."
    ],
    penalties: "Filing late invalidates the right to claim investment tax rebates. Concealing assets or unexplained wealth attracts penalties ranging from 15% to 35% of the evaded tax, alongside potential prosecution."
  },
  {
    id: 25,
    title: "VAT Registration & Compliance",
    category: "Tax & VAT Management",
    intro: "The Value Added Tax and Supplementary Duty Act, 2012 provides a modern, transaction-based indirect tax regime. Securing the correct VAT registration (BIN) is the first critical step for any commercial operation in Bangladesh.",
    guidelines: "The VAT Act 2012 and VAT Rules 2016 govern registration requirements. Registration is mandatory for manufacturing, importing, and specific service sectors regardless of turnover.",
    deadlines: "A business must apply for VAT registration within 15 days of crossing the statutory turnover threshold or before commencing a mandatory registrable business activity.",
    rates: "Standard VAT is 15% (allowing full input tax credit). Many sectors utilize truncated rates (5%-10%) without input credit. Small entities (turnover BDT 50 Lakhs - 3 Crore) pay a flat 4% Turnover Tax.",
    documents: "Valid Trade License, e-TIN, detailed bank account information, National IDs of directors, MoA/AoA, and a rental agreement for the business premises.",
    process: [
      "Turnover Assessment: Evaluate economic turnover to determine if standard VAT or Turnover Tax applies.",
      "Online Application: Submit Form Mushak 2.1 electronically via the NBR's VAT Online System (IVAS).",
      "Verification: The local VAT Commissionerate verifies data and inspects the premises.",
      "Issuance: The NBR generates a unique 9-digit Business Identification Number (BIN) and issues Mushak 2.3."
    ],
    penalties: "Failure to obtain VAT registration when legally obligated incurs an immediate BDT 10,000 penalty. Authorities can also seize commercial goods and freeze banking activities."
  },
  {
    id: 26,
    title: "VAT Return Filing",
    category: "Tax & VAT Management",
    intro: "VAT compliance in Bangladesh is a continuous, month-by-month obligation. It revolves around strict monthly reporting and rigorous, standardized record-keeping using prescribed 'Mushak' forms.",
    guidelines: "The VAT Act 2012 requires tracking all inputs and outputs. To claim input tax credits, a business must possess valid tax invoices (Mushak 6.3) and price goods according to an approved declaration (Mushak 4.3).",
    deadlines: "The monthly VAT return (Mushak 9.1) must be filed by the 15th day of the month immediately following the respective tax period. There is no grace period.",
    rates: "Net VAT Payable is calculated strictly as Total Output Tax minus eligible Input Tax Credits, adjusted for any Withholding VAT (VDS) deducted by clients.",
    documents: "Mushak 6.1 (Purchase Register), Mushak 6.2 (Sales Register), issued Mushak 6.3 (Tax Invoices), and Mushak 6.6 (VDS Certificates).",
    process: [
      "Ledger Closure: Close monthly sales and purchase ledgers on the last day of the month.",
      "Calculation: Tabulate output VAT, input VAT credits, and adjustments.",
      "Treasury Deposit: Deposit the net payable VAT into the treasury via an e-challan.",
      "Online Filing: Populate Form Mushak 9.1 and submit it on the VAT Online Portal."
    ],
    penalties: "Missing the 15th deadline attracts a non-negotiable BDT 5,000 penalty. Late payment of the tax triggers an additional 2% interest charge per month. Claiming fake input credits is a criminal offense."
  },
  {
    id: 27,
    title: "VAT Advisory",
    category: "Tax & VAT Management",
    intro: "VAT Advisory helps complex supply chains, manufacturers, and importers navigate the highly technical mechanisms of input-output coefficients, truncated rates, and Value Added Tax Deduction at Source (VDS).",
    guidelines: "Strategic advisory relies heavily on mastering the VAT General Orders (SROs) which are updated constantly. A key focus is optimizing the mandatory Input-Output Coefficient Declaration (Mushak 4.3).",
    deadlines: "A Mushak 4.3 price declaration must be filed with the VAT Divisional Officer at least 15 days before introducing a new product or changing the price of an existing product.",
    rates: "Advisory ensures a company correctly chooses between the standard 15% rate (with rebates) vs. truncated rates (without rebates) to minimize the final price impact on the consumer.",
    documents: "Bill of Materials (BOM), commercial contracts, import assessment notices, and precise calculations for Mushak 4.3.",
    process: [
      "Supply Chain Mapping: Advisors map every transaction point from raw material import to final retail sale.",
      "Coefficient Calculation: Draft the Mushak 4.3, ensuring all inputs are declared so credits can be legally claimed.",
      "VDS Strategy: Advise clients on managing cash-flow constraints caused by customers deducting VDS at the point of payment.",
      "Exemption Utilization: Apply relevant SROs to legally exempt specific transactions from VAT."
    ],
    penalties: "Failing to declare or manipulating a Mushak 4.3 results in the immediate rejection of all input tax credits for that product line, leading to catastrophic retrospective VAT demands during audits."
  },
  {
    id: 28,
    title: "Tax Audit Support",
    category: "Tax & VAT Management",
    intro: "To enforce the self-assessment tax regime, the NBR utilizes robust, risk-based post-assessment audits. Failing to navigate the audit process correctly can result in devastating financial assessments and business disruption.",
    guidelines: "Audits are conducted under the authority of Section 182 of the ITA 2023. Files are selected based on risk parameters such as sudden drops in profit margins or discrepancies between VAT and Income Tax returns.",
    deadlines: "A self-assessment return must be selected for audit within two years from the end of the relevant assessment year. The audit must be concluded within two years of the notice.",
    rates: "The primary financial risk is the disallowance of claimed business expenses. If an audit reveals deliberate evasion, an additional penalty of 15% to 35% of the evaded tax is imposed.",
    documents: "Complete access to the general ledger, trial balance, commercial invoices, bank statements, VAT returns, and import/export documents.",
    process: [
      "Notice: The Deputy Commissioner of Taxes (DCT) issues an audit notice requiring appearance within 14 days.",
      "Submission: The authorized tax lawyer submits the requested ledgers, vouchers, and evidence.",
      "Hearing: The DCT holds hearings to question specific large transactions or unverified expenses.",
      "Resolution: The audit is closed, or income is 'reassessed' adding back disallowed expenses."
    ],
    penalties: "Failure to comply with audit notices empowers the DCT to conduct an ex-parte 'Best Judgment Assessment', leading to highly inflated tax demands and the immediate freezing of corporate bank accounts."
  },
  {
    id: 29,
    title: "Tax Dispute Resolution",
    category: "Tax & VAT Management",
    intro: "Disagreements with tax auditors are common. Aggrieved taxpayers in Bangladesh have access to a structured, multi-tiered appellate framework to challenge arbitrary or excessively harsh tax assessments.",
    guidelines: "The appellate framework is established under the ITA 2023 and Taxes Appellate Tribunal Rules. It provides administrative reviews before escalating to the formal judicial system.",
    deadlines: "A First Appeal must be filed within 45 days of receiving the assessment order. A Second Appeal to the Tribunal must be filed within 60 days. Missing deadlines makes the demand legally final.",
    rates: "The law requires a 'pay-to-play' mechanism. The taxpayer must pay a mandatory 10% of the disputed tax amount before filing the First Appeal, and an additional 10% before the Second Appeal.",
    documents: "The prescribed Appeal Form, a detailed Memorandum outlining the 'grounds of appeal', a certified copy of the DCT's order, and original treasury challans proving payment.",
    process: [
      "First Appeal: File an appeal to the Commissioner of Taxes (Appeals), an administrative review within the NBR.",
      "Second Appeal: Escalate to the Taxes Appellate Tribunal, a quasi-judicial body.",
      "High Court Reference: For pure questions of law, file a Reference Application to the High Court Division.",
      "ADR Option: Parties can opt for Alternative Dispute Resolution (ADR) utilizing an independent facilitator."
    ],
    penalties: "Failure to adhere to strict appeal timelines renders the NBR assessment final, initiating aggressive recovery proceedings including freezing accounts and barring directors from leaving the country."
  },
  {
    id: 30,
    title: "Customs & Duty Consulting",
    category: "Tax & VAT Management",
    intro: "Navigating Bangladesh Customs requires meticulous classification and valuation strategies. High tariffs on imports mean that a single classification error can completely destroy the profit margin of a commercial shipment.",
    guidelines: "Import and Export are strictly governed by the Customs Act, 1969, and the annual National Tariff Policy. The primary hurdle is ensuring the correct Harmonized System (HS) Code is applied to goods.",
    deadlines: "Customs declarations (Bill of Entry) must be submitted upon the arrival of goods at the port. Pre-shipment classification rulings can sometimes be requested to avoid port delays.",
    rates: "Total Tax Incidence (TTI) on imports can be massive, compounding Basic Customs Duty (CD), Supplementary Duty (SD), VAT, Advance Income Tax (AIT), and Advance Tax (AT). TTI often ranges from 26% to over 130%.",
    documents: "Commercial Invoice, Packing List, Bill of Lading (BL), Certificate of Origin, active IRC, and LC documents.",
    process: [
      "Classification: Consultants determine the exact 8-digit HS Code for the goods prior to import.",
      "Valuation Assessment: Ensuring the declared invoice value aligns with the Customs Valuation database to prevent 'uplifts'.",
      "Bonded Warehouse: Advising export-oriented industries on utilizing Bonded Warehouse licenses to import raw materials duty-free.",
      "Clearance Support: Resolving disputes with customs assessing officers directly at the port."
    ],
    penalties: "Misdeclaring the HS Code or under-invoicing goods leads to the physical confiscation of the shipment, fines up to three times the value of the goods, and criminal smuggling charges."
  },
  {
    id: 31,
    title: "Tax Incentives & Exemptions",
    category: "Tax & VAT Management",
    intro: "To drive foreign investment and industrial growth, the government of Bangladesh offers highly lucrative, targeted tax holidays and exemptions. However, securing and maintaining these exemptions requires intense bureaucratic maneuvering.",
    guidelines: "Incentives are granted under specific sections of the ITA 2023 (e.g., Section 46 for industrial undertakings) and through Special Regulatory Orders (SROs) for Hi-Tech Parks and Economic Zones (BEZA).",
    deadlines: "Applications for Tax Holidays must strictly be filed with the NBR within 6 months of the date of commercial production. Missing this window permanently forfeits the 10-year exemption.",
    rates: "Exemptions usually offer a graduated tax holiday. For example, 100% exemption for the first 3 years, reducing progressively to 20% by the 10th year for industries set up in specific undeveloped regions.",
    documents: "Detailed project profiles, BIDA/BEZA registration certificates, environmental clearance, audited financials, and proof of commercial production start dates.",
    process: [
      "Eligibility Assessment: Determine if the specific industry or IT-enabled service qualifies under current SROs.",
      "Application: Submit a comprehensive dossier to the NBR for Tax Holiday approval.",
      "Physical Inspection: NBR officers physically inspect the factory to verify the machinery and production capacity.",
      "Maintenance: File regular compliance reports to prove the company is reinvesting profits as required by the exemption conditions."
    ],
    penalties: "If an exempted company fails to meet conditions (like failing to reinvest 30% of its exempted income) or commits tax evasion, the NBR will retroactively cancel the exemption and demand all back taxes."
  },
  // PART III: CORPORATE STRUCTURING & LICENSING 
  {
    id: 32,
    title: "Business Formation & Structuring",
    category: "Corporate Structuring & Licensing",
    intro: "Choosing the correct legal entity is the most critical decision a founder makes. Whether establishing a local Private Limited Company, an NGO, or a Foreign Branch Office, the structural choice dictates tax liabilities, compliance burdens, and equity control in Bangladesh.",
    guidelines: "Formation is governed by the Companies Act 1994, the Partnership Act 1932, and the BIDA Act 2016 for foreign entities. Entities must choose between a proprietorship (unlimited liability), partnership, private limited company (limited liability), or One Person Company (OPC).",
    deadlines: "Structuring decisions must be finalized prior to applying for Name Clearance at the RJSC, as the MoA is specifically tailored to the chosen structure. Changing structure post-incorporation requires High Court intervention.",
    rates: "Formation costs scale with the structure. Proprietorships cost under BDT 5,000 to setup, while a Private Limited Company's formation costs scale linearly with its Authorized Capital due to government stamp duties.",
    documents: "Founders must draft a detailed business plan, select the appropriate NICE classification for their intended trademark, and draft customized Articles of Association that define shareholder voting rights, pre-emption rights, and dividend policies.",
    process: [
      "Consultation: Advisors assess the business model, funding sources, and long-term exit strategy.",
      "Entity Selection: A decision is made between a standard LLC, an OPC, or a Joint Venture.",
      "Equity Structuring: Founders allocate shareholding percentages and define the board structure.",
      "Drafting: Legal counsel drafts the foundational MoA and AoA to reflect the agreed-upon structure."
    ],
    penalties: "Choosing the wrong structure (e.g., operating a high-risk commercial venture as a sole proprietorship) leaves the founder's personal assets (home, personal bank accounts) entirely vulnerable to business creditors and lawsuits."
  },
  {
    id: 33,
    title: "Company Registration",
    category: "Corporate Structuring & Licensing",
    intro: "The incorporation of a company is the foundational step in establishing a formalized business. It creates a distinct legal entity, shielding directors with limited liability and allowing for the raising of equity.",
    guidelines: "The Registrar of Joint Stock Companies and Firms (RJSC) is the sole regulatory authority overseeing formation, governed strictly by the Companies Act, 1994. The process requires establishing a unique identity, defining the business scope, and structuring the authorized and paid-up capital.",
    deadlines: "The first step, Name Clearance, grants the applicant exclusive reservation of the proposed company name. This clearance is valid for exactly 30 days. All subsequent incorporation documents must be drafted, signed, and submitted within this window.",
    rates: "Securing Name Clearance costs BDT 575. The actual incorporation costs (Stamp Duty and RJSC Registration Fees) are dynamically scaled based on the company's declared Authorized Capital.",
    documents: "The core constitutional documents are the Memorandum of Association (MoA) and the Articles of Association (AoA). Additionally, National IDs/Passports of all directors are required. Foreign shareholders require a Bank Encashment Certificate.",
    process: [
      "Name Clearance: Apply for and secure the proposed company name via the RJSC online portal.",
      "Drafting: Legal counsel drafts the MoA and AoA tailored to the specific business objectives.",
      "Bank Account (Foreign Entities): Open a temporary bank account to receive foreign equity.",
      "Submission: File the statutory forms (Form I, VI, IX, and XII) alongside the MoA/AoA.",
      "Incorporation: Upon review, the RJSC issues the digital Certificate of Incorporation."
    ],
    penalties: "Operating a business using 'Ltd.' without proper RJSC registration constitutes corporate fraud, leaving promoters personally liable for all debts."
  },
  {
    id: 34,
    title: "RJSC Compliance",
    category: "Corporate Structuring & Licensing",
    intro: "Securing the Certificate of Incorporation is only the beginning. Post-incorporation, entities must maintain rigorous, ongoing compliance with the RJSC to retain their active legal status and ensure corporate transparency.",
    guidelines: "Corporate compliance is governed by the Companies Act, 1994. It mandates the regular updating of corporate data, requiring companies to formally notify the RJSC of any changes in directors, share transfers, or the creation of mortgages against company assets.",
    deadlines: "Form XII (Changes in Directors) must be filed within 14 days of the change. Mortgages or charges created against company assets must be registered with the RJSC within 21 days to be legally valid against liquidators.",
    rates: "The standard filing fee for routine statutory documents is a nominal BDT 200 to BDT 400 per document, provided they are filed within the statutory deadlines. Late fees compound rapidly.",
    documents: "Compliance requires precise Board Resolutions, EGM/AGM Minutes, completed statutory forms (Form XII, Form 117, Form VIII), and the original certificates of incorporation.",
    process: [
      "Board Action: The Board of Directors passes a resolution approving the specific corporate change.",
      "Form Preparation: The Company Secretary prepares the necessary statutory forms.",
      "Execution: Directors sign the forms and affidavits.",
      "Filing: Documents are uploaded to the RJSC portal, and the relevant filing fees are deposited via treasury challan."
    ],
    penalties: "Late filing incurs an automatic penalty of BDT 500 per day of default. Failing to register a mortgage renders the bank's security interest void, often leading to the immediate recall of the corporate loan."
  },
  {
    id: 35,
    title: "Trade License Processing",
    category: "Corporate Structuring & Licensing",
    intro: "The Trade License is the fundamental, non-negotiable municipal permission required to conduct any commercial activity within a specific jurisdiction in Bangladesh. Without it, a business does not legally exist in the eyes of local authorities.",
    guidelines: "The issuance of Trade Licenses is governed by the City Corporation Ordinance, 1983, and Municipal Taxation Rules. Authorities strictly check commercial zoning; businesses cannot legally operate in areas designated purely for residential use without special waivers.",
    deadlines: "A Trade License is valid for one financial year (July to June), regardless of when it is issued. It must be renewed annually. The standard grace period for renewal without penalty typically ends on September 30th.",
    rates: "Fees range from BDT 1,000 for small proprietorships to BDT 40,000+ for large manufacturing institutions, based on the business category. Additionally, a signboard tax (typically 30% of the base license fee) and 15% VAT are added.",
    documents: "The application requires a prescribed form, RJSC Incorporation Certificate and MoA (for companies), e-TIN certificate, a valid lease agreement for the commercial premises, and property tax receipts.",
    process: [
      "Application: Obtain and submit the designated form from the respective City Corporation zone office.",
      "Inspection: A Licensing Supervisor conducts a physical inspection of the premises to verify zoning.",
      "Assessment: The supervisor assesses the applicable fee tier.",
      "Issuance: The business pays the assessed fee, and the local authority issues the Trade License."
    ],
    penalties: "Operating a business without a valid Trade License grants municipal magistrates the power to conduct mobile courts, impose immediate fines, confiscate goods, and forcibly seal/padlock the business premises."
  },
  {
    id: 36,
    title: "ERC & IRC",
    category: "Corporate Structuring & Licensing",
    intro: "For businesses engaged in cross-border trade, Export Registration Certificates (ERC) and Import Registration Certificates (IRC) are mandatory prerequisites to manage customs clearances and open Letters of Credit (LCs).",
    guidelines: "These certificates are issued and regulated by the Chief Controller of Imports and Exports (CCI&E) under the Import and Export (Control) Act, 1950, and the frequently updated Import and Export Policy Orders.",
    deadlines: "Like the Trade License, ERCs and IRCs are valid for one financial year ending on June 30th. They must be renewed annually. Failure to renew immediately suspends the ability to clear goods.",
    rates: "IRC registration fees are tiered based on the desired annual import value ceiling. For example, importing up to BDT 5 Lakhs costs BDT 5,000, while a ceiling above BDT 50 Crore requires an BDT 80,000 fee.",
    documents: "Required documents include an active Trade License, e-TIN, VAT BIN, a Bank Solvency Certificate, RJSC MoA/AoA, and a mandatory Membership Certificate from a recognized Chamber of Commerce.",
    process: [
      "Prerequisites: Ensure all baseline corporate licenses and Chamber Memberships are active.",
      "Online Submission: Submit the application via the CCI&E's OLM (Online Licensing Module) portal.",
      "Fee Payment: Deposit the specific treasury challan based on the selected import ceiling tier.",
      "Issuance: The CCI&E reviews the documents and issues the digital certificate and Passbook."
    ],
    penalties: "Attempting to open an LC or clear goods without active certificates is impossible. Goods arriving at port without an active IRC face confiscation and accrue massive daily demurrage charges."
  },
  {
    id: 37,
    title: "Trademark Registration",
    category: "Corporate Structuring & Licensing",
    intro: "Trademark registration shields logos, brand names, and slogans under a strict 'first-to-file' framework, preventing competitors from passing off their goods as yours in the open market.",
    guidelines: "Administered by the Department of Patents, Designs and Trademarks (DPDT) under the Trademarks Act, 2009. Bangladesh follows the international NICE Classification system (45 distinct classes of goods/services).",
    deadlines: "After the DPDT accepts and publishes the mark in the Trademarks Journal, third parties have a strict 60-day window to file an Opposition. Registered marks are valid for 7 years initially, renewable every 10 years thereafter.",
    rates: "Fees are charged per class. A pre-filing database search is BDT 1,000. Filing the application is BDT 3,500. Upon approval, the final registration certification fee is BDT 15,000 per class.",
    documents: "Requires Form TM-1, a clear digital representation of the logo, applicant details, and a notarized Power of Attorney (Form TM-48) if filed through a legal agent.",
    process: [
      "Clearance Search: Conduct a thorough search in the DPDT database to ensure exclusivity.",
      "Filing: File the TM-1 specifying the exact goods/services and NICE classification.",
      "Examination: The Registrar examines the mark. If it passes, it is published in the Journal.",
      "Certification: If no opposition is filed within 60 days, the DPDT issues the Certificate. (Takes 24-36 months)."
    ],
    penalties: "Using an unregistered mark offers weak legal protection. Failing to renew a registered mark results in it being struck from the register, allowing competitors to legally hijack the brand name."
  },
  {
    id: 38,
    title: "Share Transfer",
    category: "Corporate Structuring & Licensing",
    intro: "Reallocating equity within a Private Limited Company requires strict adherence to corporate law to ensure the transfer is legally binding and recognized by the government, preventing future ownership disputes.",
    guidelines: "Share transfers are governed by Section 38 of the Companies Act, 1994. The Articles of Association (AoA) usually dictate 'pre-emption rights', meaning shares must first be offered to existing shareholders before an outsider.",
    deadlines: "The executed Instrument of Transfer (Form 117) must be submitted to the RJSC within 14 days of the Board of Directors approving the transfer. Delaying this invalidates the transfer instrument.",
    rates: "The government imposes a heavy Ad Valorem Stamp Duty on share transfers. Currently, the stamp duty is 1.5% of the total face value (or agreed transfer value) of the shares being transferred.",
    documents: "Requires a duly executed and stamped Form 117 (signed by both transferor and transferee), the original Share Certificate, a Board Resolution approving the transfer, and an Affidavit of transfer.",
    process: [
      "Valuation & Agreement: Parties agree on the transfer price and clear any pre-emption rights.",
      "Execution: Both parties sign Form 117 and swear a legal affidavit.",
      "Board Approval: The company's Board officially approves the transfer and cancels the old share certificate.",
      "RJSC Filing: The company secretary files the forms and pays the 1.5% stamp duty to the RJSC."
    ],
    penalties: "Failing to pay the exact 1.5% stamp duty renders the transfer legally void. The RJSC will reject the Annual Return, and the original owner remains legally liable (and legally entitled to dividends) for those shares."
  },
  {
    id: 39,
    title: "Capital Increase",
    category: "Corporate Structuring & Licensing",
    intro: "As a business scales, it often needs to inject new funds. This requires legally increasing the company's 'Authorized Capital' (the maximum it is allowed to raise) and 'Paid-Up Capital' (the actual cash injected).",
    guidelines: "Governed by the Companies Act, 1994. Increasing Authorized Capital requires amending the MoA via an Extraordinary General Meeting (EGM). Increasing Paid-Up Capital requires the formal allotment of new shares to investors.",
    deadlines: "A Special Resolution to increase Authorized Capital must be filed with the RJSC within 15 days of the EGM. Form V (Return of Allotment for paid-up capital) must be filed within 60 days of the actual share allotment.",
    rates: "Increasing Authorized Capital requires paying heavily graduated Stamp Duties to the government based on the new ceiling limit. Filing Form V for paid-up capital incurs standard, nominal filing fees.",
    documents: "Requires EGM Minutes, a Special Resolution, amended MoA/AoA copies, Form III (Notice of Increase), Form V (Allotment), and Bank Statements proving the actual injection of new cash into the corporate account.",
    process: [
      "Board Recommendation: The Board recommends the capital increase to shareholders.",
      "EGM: Shareholders pass a Special Resolution (requires 75% majority).",
      "Filing Form III: Authorized capital is increased and stamp duties paid at RJSC.",
      "Fund Injection: Investors deposit funds into the corporate bank account.",
      "Filing Form V: Shares are formally allotted and Form V is filed to increase Paid-Up capital."
    ],
    penalties: "Allotting shares beyond the Authorized Capital limit is ultra vires (legally void). Failing to file Form V within 60 days results in severe daily compounding fines by the RJSC."
  },
  {
    id: 40,
    title: "Company Name Change",
    category: "Corporate Structuring & Licensing",
    intro: "Rebranding a registered company is a rigorous legal process. You cannot simply start using a new name; the change must be vetted by the RJSC to ensure it doesn't infringe on existing entities and must be updated across all tax and municipal licenses.",
    guidelines: "Name changes are governed by Section 11 of the Companies Act, 1994. The proposed new name must pass the same strict clearance rules as a brand new company. It requires a Special Resolution by shareholders.",
    deadlines: "Once the new Name Clearance is obtained, it is valid for 30 days. The Special Resolution and amended MoA/AoA must be filed with the RJSC within this strict 30-day window.",
    rates: "The Name Clearance fee is BDT 575. Filing the Special Resolution, Form VIII, and amended documents incurs standard RJSC filing fees (approx. BDT 1,500 - 3,000 total).",
    documents: "Requires an approved Name Clearance receipt, EGM Minutes, Special Resolution, printed copies of the newly amended MoA/AoA, and the original old Certificate of Incorporation (to be surrendered).",
    process: [
      "Name Clearance: Apply for the new name on the RJSC portal.",
      "EGM: Shareholders pass a Special Resolution approving the change.",
      "RJSC Filing: Submit the resolution and amended documents.",
      "New Certificate: The RJSC issues a new Certificate of Incorporation reflecting the name change.",
      "License Updates: The company must manually update its Trade License, e-TIN, VAT BIN, and Bank records to reflect the new address."
    ],
    penalties: "Operating under a new name without RJSC approval is illegal. Furthermore, failing to sequentially update the VAT BIN and Bank Accounts will result in frozen funds and rejected tax returns."
  },
  {
    id: 41,
    title: "Company Address Change",
    category: "Corporate Structuring & Licensing",
    intro: "A company's registered office address is its official legal domicile for receiving court summons and government notices. Moving offices requires a formal legal update to ensure the company remains reachable and compliant with jurisdictional rules.",
    guidelines: "Governed by Section 77 of the Companies Act, 1994. If the move is within the same city, it requires a simple Board Resolution. If moving to a different district, it requires a Special Resolution and potentially a more complex RJSC filing.",
    deadlines: "The RJSC must be formally notified of the address change via Form VI within 28 days of the move. Failing to update the address within this window is a statutory default.",
    rates: "Filing Form VI at the RJSC incurs a standard nominal filing fee (approx. BDT 200). However, the primary cost lies in the subsequent mandatory updates to the Trade License and VAT BIN.",
    documents: "Requires a Board Resolution, a newly executed Lease Agreement for the new premises, and a completed Form VI signed by a director or the company secretary.",
    process: [
      "Board Meeting: The Board passes a resolution approving the office relocation.",
      "Execution: Form VI is prepared and signed.",
      "RJSC Filing: The form is filed online, and the treasury challan is paid.",
      "License Updates: The company must now update its Trade License (at the new City Corporation zone), e-TIN, and VAT BIN to match the new address."
    ],
    penalties: "Failing to update the registered address can lead to 'Service of Process' issues where a company loses a court case because it never received the summons sent to its old, abandoned address."
  },
  {
    id: 42,
    title: "Director Appointment & Resignation",
    category: "Corporate Structuring & Licensing",
    intro: "The Board of Directors is the brain of the company. Adding new expertise or managing the exit of a founder requires strict adherence to corporate governance rules to ensure the board's actions remain legally valid.",
    guidelines: "Governed by Sections 90-110 of the Companies Act, 1994. A private company must have at least 2 directors. Directors must hold 'Qualification Shares' as defined in the Articles of Association.",
    deadlines: "Any change in the board (appointment, resignation, or death) must be reported to the RJSC via Form XII within 14 days. Delaying this filing can invalidate the new director's ability to sign bank documents.",
    rates: "Filing Form XII at the RJSC incurs a standard nominal filing fee. If the new director is a foreign national, additional BIDA security clearance may be required for certain sectors.",
    documents: "Requires a Board Resolution, a formal Letter of Resignation (for exits), a Consent to Act as Director (Form IX for appointments), and National IDs/Passports of the individuals involved.",
    process: [
      "Board/Shareholder Action: The board or shareholders (in an AGM/EGM) approve the change.",
      "Documentation: The new director signs Form IX (Consent) and Form XII is prepared.",
      "RJSC Filing: Form XII is filed online within the 14-day window.",
      "Bank Notification: The company provides the certified Form XII to its banks to update the authorized signatories."
    ],
    penalties: "Failing to file Form XII means the RJSC records will still show the old director as being in control. This leads to massive legal disputes over who has the authority to bind the company to contracts or loans."
  },
  {
    id: 43,
    title: "Company Dissolution & Winding Up",
    category: "Corporate Structuring & Licensing",
    intro: "Closing a company is often more legally complex than opening one. It requires a structured process to ensure all creditors are paid, taxes are cleared, and the legal 'personhood' of the company is formally extinguished.",
    guidelines: "Governed by Sections 233-336 of the Companies Act, 1994. Winding up can be 'Voluntary' (by shareholders), 'By the Court' (due to insolvency), or 'Subject to Supervision of the Court'.",
    deadlines: "A voluntary winding-up starts with a Special Resolution. A liquidator must be appointed, and a notice must be published in the Official Gazette within 10 days of the resolution.",
    rates: "Winding up is expensive. It involves liquidator fees, mandatory newspaper advertisement costs, High Court filing fees (if involuntary), and ensuring all outstanding government taxes are paid in full.",
    documents: "Requires a Declaration of Solvency by directors, a Special Resolution, the Liquidator's final report, and a 'Tax Clearance Certificate' from the NBR.",
    process: [
      "Declaration of Solvency: Directors swear they can pay all debts within 12 months.",
      "Special Resolution: Shareholders vote to wind up and appoint a Liquidator.",
      "Liquidation: The liquidator sells assets, pays creditors, and distributes the remainder to shareholders.",
      "Final Meeting: A final general meeting is held to approve the liquidator's accounts.",
      "Dissolution: The RJSC receives the final reports and formally strikes the company from the register."
    ],
    penalties: "Attempting to abandon a company without formal dissolution leaves the directors personally liable for ongoing tax defaults and statutory penalties. The company remains 'active' and accruing fines indefinitely."
  },
  {
    id: 44,
    title: "BIDA Registration",
    category: "Corporate Structuring & Licensing",
    intro: "For foreign investors and industrial projects, BIDA registration is the gateway to Bangladesh. It provides the legal umbrella for importing machinery, securing expatriate work permits, and repatriating profits.",
    guidelines: "Governed by the Bangladesh Investment Development Authority Act, 2016. Registration is mandatory for any industrial project involving foreign equity or seeking government incentives.",
    deadlines: "Registration should be sought immediately after company incorporation and before importing any capital machinery or applying for expatriate visas.",
    rates: "BIDA registration fees are scaled based on the total project investment (including equity and debt). Fees range from BDT 5,000 to BDT 100,000+ for large-scale industrial projects.",
    documents: "Requires the RJSC Incorporation Certificate, MoA/AoA, a detailed Project Profile, a list of machinery to be imported, and a Board Resolution authorizing the investment.",
    process: [
      "Online Application: Submit the project proposal via the BIDA OSS (One Stop Service) portal.",
      "Verification: BIDA officials review the investment plan and the source of funds.",
      "Issuance: BIDA issues the Registration Certificate, which specifies the allowed expatriate ratio and import entitlements.",
      "Post-Registration: The company can now apply for IRC (Industrial) and work permits."
    ],
    penalties: "Operating an industrial project without BIDA registration prevents the legal repatriation of dividends to foreign shareholders and blocks the issuance of work permits for foreign technical experts."
  },
  {
    id: 45,
    title: "Work Permit Processing",
    category: "Corporate Structuring & Licensing",
    intro: "Employing foreign nationals in Bangladesh requires strict adherence to the '1:5' or '1:20' local-to-foreign employee ratios. A valid work permit is the only legal way for an expat to work and pay taxes in the country.",
    guidelines: "Regulated by BIDA (for the private sector) or BEZA/Hi-Tech Park authorities. The standard rule for commercial offices is 5 local employees for every 1 foreign employee.",
    deadlines: "An expat must apply for a work permit within 15 days of arriving in Bangladesh on an 'E' (Employment) or 'PI' (Private Investor) visa.",
    rates: "The government fee for a work permit is BDT 5,000 per year. However, the process involves significant administrative costs for security clearances and mandatory newspaper advertisements for the position.",
    documents: "Requires the expat's Passport, E-visa, educational certificates (attested), a Board Resolution, and proof that the job was advertised in a local newspaper to find a qualified Bangladeshi first.",
    process: [
      "Advertisement: The company must first advertise the position in a national daily.",
      "Application: Submit the application to BIDA with the expat's credentials.",
      "Security Clearance: BIDA forwards the file to the Ministry of Home Affairs and NSI for background checks.",
      "Issuance: Once cleared, BIDA issues the Work Permit (usually for 1-2 years)."
    ],
    penalties: "Employing a foreigner without a work permit is a criminal offense. The company faces massive fines, and the expat faces immediate deportation and a permanent ban from re-entering Bangladesh."
  },
  {
    id: 46,
    title: "Branch & Liaison Office Setup",
    category: "Corporate Structuring & Licensing",
    intro: "Foreign companies often prefer to test the market via a Branch or Liaison Office rather than a full subsidiary. While easier to set up, these offices have strict limitations on the types of commercial activities they can perform.",
    guidelines: "Governed by Section 18 of the BIDA Act, 2016. A Liaison Office *cannot* earn any local income; it must be 100% funded by the parent company. A Branch Office can perform limited commercial activities with prior BIDA approval.",
    deadlines: "BIDA approval for these offices is typically granted for 3 years at a time, renewable. The office must be physically established and the parent company's funds remitted within 2 months of approval.",
    rates: "The BIDA application fee is BDT 25,000. However, the parent company must commit to remitting at least USD 50,000 into Bangladesh as initial setup and operating capital.",
    documents: "Requires the parent company's Certificate of Incorporation, AoA, audited financials, and a formal Board Resolution authorizing the opening of the Bangladesh office (all documents must be attested by the Bangladesh Embassy).",
    process: [
      "Application: Submit the proposal to BIDA outlining the office's purpose.",
      "Inter-Ministerial Review: BIDA coordinates with the Ministry of Home Affairs for security vetting.",
      "Approval: BIDA issues the permission letter with specific conditions.",
      "RJSC Registration: The office must then be formally registered with the RJSC as a foreign entity."
    ],
    penalties: "If a Liaison Office is caught engaging in local sales or invoicing, BIDA will immediately cancel its permission, freeze its bank accounts, and initiate tax evasion proceedings against the parent company."
  },
  {
    id: 47,
    title: "NGO Affairs Bureau Registration",
    category: "Corporate Structuring & Licensing",
    intro: "Non-Governmental Organizations (NGOs) receiving foreign funds must operate under the strict supervision of the NGO Affairs Bureau to ensure transparency and prevent the misuse of international aid.",
    guidelines: "Governed by the Foreign Donations (Voluntary Activities) Regulation Act, 2016. Registration is mandatory for any entity (local or foreign) that intends to utilize foreign grants for social or developmental work.",
    deadlines: "NGO registration is typically granted for 10 years. Project-specific approvals (FD-6) must be obtained before any specific foreign donation can be released from the bank.",
    rates: "The registration fee for a local NGO is BDT 50,000, while a foreign NGO pays USD 2,500. Renewal fees are similarly structured.",
    documents: "Requires the NGO's constitution, list of executive members, a 5-year work plan, and a 'Letter of Intent' from the foreign donor.",
    process: [
      "Application: Submit the dossier to the NGO Affairs Bureau (under the Prime Minister's Office).",
      "Security Vetting: The file undergoes rigorous vetting by the Special Branch and NSI.",
      "Registration: Upon clearance, the Bureau issues the Registration Certificate.",
      "Project Approval: For every grant, the NGO must submit an FD-6 form for specific project approval."
    ],
    penalties: "Utilizing foreign funds without Bureau approval is a serious offense. The Bureau can cancel the NGO's registration, freeze all funds, and prosecute the executive members for money laundering."
  },
  {
    id: 48,
    title: "Environmental Clearance",
    category: "Corporate Structuring & Licensing",
    intro: "Industrial projects in Bangladesh are categorized by their potential impact on the environment. Securing an Environmental Clearance Certificate (ECC) is a mandatory prerequisite for setting up any factory or high-impact commercial building.",
    guidelines: "Governed by the Bangladesh Environment Conservation Act, 1995, and Environment Conservation Rules, 2023. Projects are categorized as Green, Orange-A, Orange-B, or Red based on their pollution levels.",
    deadlines: "An ECC must be obtained *before* starting construction. Red category projects (like tanneries or chemical plants) require a more complex Environmental Impact Assessment (EIA) first.",
    rates: "Fees are scaled based on the total project investment. They range from BDT 1,500 for small Green projects to BDT 500,000+ for massive Red category industrial zones.",
    documents: "Requires a project layout plan, process flow diagram, No Objection Certificate (NOC) from local authorities, and an Effluent Treatment Plant (ETP) design for polluting industries.",
    process: [
      "Categorization: Determine the project's color category based on the 2023 Rules.",
      "Application: Submit the plan to the Department of Environment (DoE).",
      "Site Inspection: DoE officials inspect the site and the proposed pollution control measures.",
      "Issuance: The DoE issues the ECC, often with strict conditions regarding waste management."
    ],
    penalties: "Operating a factory without an ECC or discharging untreated waste results in massive fines by DoE 'Mobile Courts', immediate closure of the factory, and potential criminal imprisonment of the owners."
  },
  {
    id: 49,
    title: "Fire Safety License",
    category: "Corporate Structuring & Licensing",
    intro: "Following several industrial tragedies, fire safety compliance has become a top priority for Bangladeshi regulators. Every commercial building and factory must have a valid Fire License to ensure worker safety and structural integrity.",
    guidelines: "Governed by the Fire Prevention and Fire Fighting Act, 2003. The Fire Service and Civil Defence (FSCD) department mandates specific fire-fighting equipment and emergency exit layouts based on the building's use.",
    deadlines: "The Fire License must be renewed annually. It is a mandatory document for obtaining or renewing a Trade License and for securing insurance coverage for the premises.",
    rates: "Fees are calculated based on the floor area and the nature of the business. Industrial warehouses storing flammable materials pay significantly higher fees than standard retail shops.",
    documents: "Requires a building layout plan (approved by RAJUK or local authority), a fire-fighting plan, and proof of installation of extinguishers, hydrants, and fire alarms.",
    process: [
      "Application: Submit the building plan and fire safety proposal to the FSCD.",
      "Inspection: Fire officers physically inspect the premises to verify exits and equipment functionality.",
      "Assessment: The FSCD assesses the fee and any required structural changes.",
      "Issuance: Once the equipment is verified, the FSCD issues the Fire License."
    ],
    penalties: "Operating without a Fire License or failing to maintain equipment leads to the immediate sealing of the building. In the event of a fire, owners face non-bailable criminal charges if safety rules were ignored."
  },
  {
    id: 50,
    title: "Factory License (DIFE)",
    category: "Corporate Structuring & Licensing",
    intro: "Any establishment employing more than 10 workers for a manufacturing process is legally classified as a 'Factory'. These entities must be licensed and regularly inspected to ensure compliance with labor safety and welfare standards.",
    guidelines: "Governed by the Bangladesh Labour Act, 2006, and Labour Rules, 2015. The Department of Inspection for Factories and Establishments (DIFE) oversees the licensing and safety audits.",
    deadlines: "A Factory License must be obtained before commencing production. The license must be renewed annually by the 31st of December.",
    rates: "Fees are tiered based on the number of workers employed. For example, a factory with 10-30 workers pays a nominal fee, while those with over 1,000 workers pay significantly more.",
    documents: "Requires a layout plan approved by DIFE, a list of machinery, worker safety protocols, and proof of a valid Fire License and Environmental Clearance.",
    process: [
      "Plan Approval: Submit the factory layout plan to DIFE for safety vetting before construction.",
      "Application: Once the factory is ready, apply for the formal license.",
      "Inspection: DIFE inspectors verify machine guarding, ventilation, and worker welfare facilities (toilets, canteens).",
      "Issuance: DIFE issues the Factory License and assigns a unique registration number."
    ],
    penalties: "Operating a factory without a DIFE license results in immediate prosecution in the Labour Court. It also prevents the factory from joining trade associations like BGMEA, effectively blocking export orders."
  },
  // PART IV: FINANCE & ACCOUNTING
  {
    id: 51,
    title: "Statutory Audit Services",
    category: "Finance & Accounting",
    intro: "In Bangladesh, every registered company is legally mandated to undergo an annual statutory audit. This ensures that the financial statements represent a true and fair view of the company's affairs for shareholders and regulators.",
    guidelines: "Audits must be conducted by a Chartered Accountant (CA) firm registered with the Institute of Chartered Accountants of Bangladesh (ICAB). The process must follow International Standards on Auditing (ISA).",
    deadlines: "The audit must be completed in time for the Annual General Meeting (AGM), which must be held within 9 months of the end of the financial year. The audited report is then filed with the RJSC and NBR.",
    rates: "Audit fees are regulated by ICAB guidelines, based on the company's turnover and total assets. Fees are negotiated between the company and the CA firm within these statutory brackets.",
    documents: "Requires the general ledger, trial balance, bank reconciliations, fixed asset register, inventory records, and all supporting vouchers for income and expenditure.",
    process: [
      "Appointment: Shareholders formally appoint the auditor at the AGM.",
      "Fieldwork: The audit team verifies transactions, physically counts inventory, and confirms bank balances.",
      "Review: The CA partner reviews the findings and ensures compliance with IFRS/BFRS.",
      "DVC Generation: The auditor generates a mandatory Document Verification Code (DVC) from the ICAB portal.",
      "Reporting: The final signed audit report is issued to the shareholders."
    ],
    penalties: "Filing financial statements without a valid DVC-verified audit report is illegal. The RJSC and NBR will reject the filing, leading to massive fines and the loss of the company's 'active' status."
  },
  {
    id: 52,
    title: "Bookkeeping & Accounting",
    category: "Finance & Accounting",
    intro: "Accurate bookkeeping is the backbone of business intelligence and tax compliance. In Bangladesh, maintaining standardized ledgers is not just good practice—it is a statutory requirement for VAT and Income Tax purposes.",
    guidelines: "Accounting must follow the International Financial Reporting Standards (IFRS) as adopted in Bangladesh. VAT laws specifically mandate the maintenance of Mushak 6.1 (Purchases) and 6.2 (Sales) registers in real-time.",
    deadlines: "Bookkeeping is a daily obligation. For VAT compliance, registers must be updated at the exact moment a transaction occurs. Monthly reconciliations must be completed before VAT return filing (15th of each month).",
    rates: "Outsourced bookkeeping fees depend on the volume of transactions and the complexity of the business. Many firms offer monthly retainers for ongoing accounting support.",
    documents: "Requires all purchase invoices, sales receipts, bank statements, petty cash vouchers, and payroll records.",
    process: [
      "Data Entry: Recording all financial transactions into accounting software (e.g., Tally, QuickBooks, or specialized ERPs).",
      "Reconciliation: Matching internal records with bank statements and vendor ledgers.",
      "VAT Mapping: Ensuring every transaction is correctly mapped to the corresponding Mushak register.",
      "Reporting: Generating monthly Profit & Loss statements and Balance Sheets for management review."
    ],
    penalties: "Failing to maintain proper books of account allows tax authorities to reject the company's financial statements and perform a 'Best Judgment Assessment', typically resulting in much higher tax demands."
  },
  {
    id: 53,
    title: "Project Profile & Feasibility",
    category: "Finance & Accounting",
    intro: "Before launching a major industrial project or seeking multi-million dollar bank financing, a rigorous Project Profile and Feasibility Study are required to prove the project's technical and financial viability.",
    guidelines: "Feasibility studies must assess market demand, technical requirements, environmental impact, and financial projections (NPV, IRR, Payback Period) based on realistic Bangladeshi market data.",
    deadlines: "These studies must be completed *before* applying for BIDA registration or bank loans. A poorly researched profile can lead to the immediate rejection of funding or licenses.",
    rates: "Fees for professional project profiles depend on the scale of the project. A profile for a small factory is significantly cheaper than a comprehensive study for a power plant or specialized economic zone.",
    documents: "Requires market research data, quotations for machinery, land acquisition plans, process flowcharts, and 5-10 year financial projections.",
    process: [
      "Market Analysis: Evaluating competitors, demand-supply gaps, and pricing strategies.",
      "Technical Assessment: Defining the required machinery, raw materials, and utility (gas/electricity) needs.",
      "Financial Modeling: Creating detailed cash-flow projections and sensitivity analyses.",
      "Reporting: Compiling the findings into a formal Project Profile for investors and regulators."
    ],
    penalties: "Proceeding with a project based on a flawed feasibility study leads to catastrophic financial failure. Banks will recall loans if they find the project profile contained inflated or fraudulent projections."
  },
  {
    id: 54,
    title: "Bank Loan & Project Finance",
    category: "Finance & Accounting",
    intro: "Securing large-scale financing in Bangladesh requires navigating complex collateral requirements and debt-equity ratios. Project finance is specifically tailored for long-term infrastructure and industrial projects.",
    guidelines: "Governed by Bangladesh Bank's Prudential Regulations. Banks typically require a 70:30 or 60:40 debt-to-equity ratio and insist on first-party collateral (land/buildings) for most commercial loans.",
    deadlines: "Loan processing can take 3-6 months. Borrowers must ensure their CIB (Credit Information Bureau) report is 'Clean' before applying; a single default on a personal credit card can block a corporate loan.",
    rates: "Interest rates are currently influenced by the 'SMART' (Six-month Moving Average Rate of Treasury bill) plus a regulated margin. Fees include processing fees (0.5%-1%) and legal documentation costs.",
    documents: "Requires 3 years of audited financials, a clean CIB report, property deeds for collateral, a formal Project Profile, and a Board Resolution authorizing the borrowing.",
    process: [
      "Application: Submit the loan proposal and project profile to the bank.",
      "Due Diligence: The bank conducts a technical and financial audit of the project and values the collateral.",
      "Sanction: The bank issues a Sanction Letter outlining the terms and interest rate.",
      "Documentation: Legal counsel drafts the mortgage deeds and hypothecation agreements.",
      "Disbursement: Funds are released, often in phases based on project milestones."
    ],
    penalties: "Defaulting on a bank loan leads to the immediate filing of an 'Artha Rin' (Money Loan) suit. The bank can then auction the collateral and bar the directors from traveling abroad or holding public office."
  },
  {
    id: 55,
    title: "Internal Audit & Control",
    category: "Finance & Accounting",
    intro: "While statutory audits are for regulators, Internal Audits are for management. They focus on detecting fraud, identifying operational inefficiencies, and ensuring that the company's internal controls are actually being followed.",
    guidelines: "Internal audits follow the International Professional Practices Framework (IPPF). They focus on 'Risk-Based Auditing', prioritizing areas with the highest potential for financial leakage or non-compliance.",
    deadlines: "Internal audits are typically conducted quarterly or semi-annually. They provide a 'early warning system' before the final year-end statutory audit.",
    rates: "Billed as a professional service retainer. The cost depends on the number of branches, the complexity of the inventory, and the depth of the forensic testing required.",
    documents: "Requires access to all internal systems, physical access to warehouses, and the authority to interview employees across all departments.",
    process: [
      "Risk Assessment: Identifying the 'high-risk' areas (e.g., procurement, petty cash, inventory).",
      "Testing: Performing surprise audits, verifying physical stock against digital records, and testing authorization workflows.",
      "Reporting: Issuing a confidential report to the Board/Audit Committee highlighting control weaknesses.",
      "Follow-up: Verifying that management has implemented the recommended fixes."
    ],
    penalties: "Lax internal controls lead to massive internal fraud and embezzlement. Without internal audits, companies often only discover financial leakages during the statutory audit, when it is too late to recover the funds."
  },
  {
    id: 56,
    title: "Fixed Asset Management",
    category: "Finance & Accounting",
    intro: "For asset-heavy industries, tracking the location, condition, and depreciation of machinery and vehicles is a major challenge. Proper management ensures tax benefits are maximized and assets are not 'lost' or stolen.",
    guidelines: "Assets must be recorded at historical cost and depreciated according to the Income Tax Act 2023 (Third Schedule) for tax purposes, and IFRS for accounting purposes.",
    deadlines: "The Fixed Asset Register (FAR) must be updated every time an asset is purchased, moved, or sold. A physical verification should be conducted at least once a year before the statutory audit.",
    rates: "Involves costs for asset tagging (barcodes/RFID), specialized FAR software, and professional valuation services for older assets.",
    documents: "Requires purchase invoices, import documents (Bill of Entry), warranty cards, and a master Fixed Asset Register.",
    process: [
      "Tagging: Every physical asset is assigned a unique ID and a physical barcode/RFID tag.",
      "Recording: Details (make, model, serial number, location, cost) are entered into the FAR.",
      "Depreciation: Calculating monthly/annual depreciation based on the asset's useful life.",
      "Verification: Periodically scanning all tags to ensure assets are still in their designated locations."
    ],
    penalties: "Failing to maintain a FAR leads to the disallowance of depreciation claims by tax authorities. It also makes it impossible to claim insurance in the event of fire or theft, as the company cannot 'prove' the asset existed."
  },
  {
    id: 57,
    title: "Inventory & Stock Audit",
    category: "Finance & Accounting",
    intro: "Inventory is often the largest current asset on a balance sheet. Regular stock audits prevent 'shrinkage' (theft), identify slow-moving or obsolete items, and ensure that the valuation of stock is accurate for financial reporting.",
    guidelines: "Inventory must be valued at the 'Lower of Cost or Net Realizable Value' (IAS 2). VAT laws require maintaining Mushak 6.1 and 6.2 registers to track every unit of raw material and finished good.",
    deadlines: "A full physical stock count is mandatory at the end of the financial year (June 30th). High-value industries (like jewelry or electronics) often perform monthly or even weekly 'cycle counts'.",
    rates: "Stock audit fees are based on the number of warehouse locations and the volume of SKUs (Stock Keeping Units) to be counted.",
    documents: "Requires stock ledgers, Mushak 6.1/6.2, goods received notes (GRN), and delivery challans.",
    process: [
      "Preparation: Freezing all stock movements during the count period.",
      "Counting: Independent teams physically count every item in the warehouse.",
      "Reconciliation: Comparing the physical count against the digital stock ledger.",
      "Adjustment: Identifying discrepancies and investigating the root cause (theft, recording error, or damage)."
    ],
    penalties: "Discrepancies in stock registers trigger immediate VAT penalties. If physical stock is less than the register, authorities assume 'unrecorded sales' and demand VAT and income tax on the missing items."
  },
  {
    id: 58,
    title: "Cost Accounting & Audit",
    category: "Finance & Accounting",
    intro: "For manufacturing industries, understanding the exact cost of production is vital for pricing and efficiency. Certain sectors in Bangladesh are statutorily required to undergo a formal Cost Audit to prevent price gouging and ensure transparency.",
    guidelines: "Governed by the Companies Act 1994 and Cost Audit Rules. Sectors like Sugar, Fuel, and Fertilizer are often mandated by the government to have their cost records audited by a CMA (Cost and Management Accountant).",
    deadlines: "Cost audits must be completed within the timeframe specified by the government order (usually annually). Cost records must be maintained daily to capture raw material, labor, and overhead variances.",
    rates: "Fees are regulated by the Institute of Cost and Management Accountants of Bangladesh (ICMAB). They depend on the complexity of the manufacturing process and the number of products.",
    documents: "Requires detailed Bill of Materials (BOM), labor time-sheets, utility bills, and production logs.",
    process: [
      "Cost Center Mapping: Dividing the factory into specific cost centers (e.g., cutting, assembly, packaging).",
      "Data Collection: Tracking every taka spent on direct materials, direct labor, and factory overheads.",
      "Variance Analysis: Comparing actual costs against 'Standard Costs' to identify inefficiencies.",
      "Reporting: Issuing a formal Cost Audit Report to the management and relevant government ministries."
    ],
    penalties: "Failing to maintain cost records in mandated sectors is a criminal offense under the Companies Act. It also leaves the company blind to its own inefficiencies, often leading to pricing products below their actual cost of production."
  },
  {
    id: 59,
    title: "Financial Due Diligence",
    category: "Finance & Accounting",
    intro: "Before an M&A transaction or a major investment, 'Due Diligence' is performed to verify the target company's financial health. It is the process of looking behind the audited numbers to find hidden liabilities or 'skeletons in the closet'.",
    guidelines: "Due diligence focuses on 'Quality of Earnings', tax compliance, hidden debt, and the validity of assets. It is a comprehensive, multi-disciplinary review involving accountants and lawyers.",
    deadlines: "Due diligence is performed during the 'Pre-Closing' phase of a transaction, usually after a Letter of Intent (LOI) is signed but before the final Share Purchase Agreement (SPA).",
    rates: "Billed as a project-based professional fee. The cost is high due to the seniority of the team and the intense, short-window nature of the work.",
    documents: "Requires 5 years of financials, all tax/VAT files, bank statements, major customer contracts, and employee liability records (gratuity/provident fund).",
    process: [
      "Information Request: The buyer's team sends a comprehensive 'Data Request List' to the target company.",
      "Analysis: Reviewing the data to identify 'Red Flags' (e.g., unrecorded tax liabilities or pending lawsuits).",
      "Site Visits: Interviewing management and inspecting physical assets.",
      "Reporting: Issuing a 'Due Diligence Report' that the buyer uses to negotiate the final purchase price or 'Indemnities'."
    ],
    penalties: "Skipping due diligence is the most common cause of failed corporate acquisitions. Buyers often find themselves inheriting massive back-tax demands or 'ghost' inventory that was never actually there."
  },
  {
    id: 60,
    title: "Valuation Services",
    category: "Finance & Accounting",
    intro: "Determining the 'Fair Value' of a company, its shares, or its intangible assets (like trademarks) is required for share transfers, mergers, and when raising venture capital or private equity.",
    guidelines: "Valuations must follow the International Valuation Standards (IVS). Common methods include Discounted Cash Flow (DCF), Net Asset Value (NAV), and Market Multiples.",
    deadlines: "For share transfers involving foreign nationals, the Bangladesh Bank often requires a formal valuation report to ensure the shares are not being transferred at an 'undervalue' to evade taxes.",
    rates: "Fees depend on the complexity of the business and the valuation method used. A DCF valuation for a tech startup is more complex and expensive than a NAV valuation for a real estate company.",
    documents: "Requires 5-year financial projections, audited historical financials, and a list of all tangible and intangible assets.",
    process: [
      "Method Selection: Choosing the most appropriate valuation model (e.g., DCF for growth companies, NAV for asset-heavy ones).",
      "Modeling: Building a complex financial model to project future cash flows and discount them to 'Present Value'.",
      "Benchmarking: Comparing the company against similar listed peers in the region.",
      "Reporting: Issuing a formal Valuation Certificate signed by a qualified professional (CA/CMA)."
    ],
    penalties: "Using an incorrect or 'inflated' valuation for share transfers can trigger money laundering investigations and lead to the NBR rejecting the transfer price, imposing heavy capital gains taxes on the 'deemed' value."
  },
  // PART V: HR & PAYROLL MANAGEMENT
  {
    id: 61,
    title: "HR Policy & Compliance",
    category: "HR & Payroll Management",
    intro: "A company's HR Policy is its internal constitution. In Bangladesh, these policies must be meticulously aligned with the Labour Act to ensure they are legally enforceable and protect the company from employee litigation.",
    guidelines: "Governed by the Bangladesh Labour Act, 2006, and Labour Rules, 2015. Policies must cover working hours, leave entitlements, disciplinary procedures, and health/safety standards.",
    deadlines: "HR policies should be finalized and distributed to employees upon their joining. Any major changes to the policy must be formally notified to the workers and, in some cases, the DIFE.",
    rates: "Developing a comprehensive HR Policy manual involves professional legal and HR consultancy fees, which vary based on the company's size and industry (e.g., RMG vs. IT).",
    documents: "Requires a draft Employee Handbook, sample Appointment Letters, Leave Policy, and Disciplinary Code.",
    process: [
      "Gap Analysis: Reviewing existing practices against the 2006 Labour Act.",
      "Drafting: Creating a customized HR Manual that covers all statutory requirements.",
      "Legal Review: Ensuring the policy doesn't accidentally waive any statutory employee rights (which is illegal).",
      "Implementation: Formally adopting the policy and training managers on its enforcement."
    ],
    penalties: "Having an HR policy that contradicts the Labour Act is legally void. In a dispute, the Labour Court will ignore the company's policy and apply the Act, often leading to heavy compensation orders against the employer."
  },
  {
    id: 62,
    title: "Payroll Management",
    category: "HR & Payroll Management",
    intro: "Payroll is more than just cutting checks. It involves complex calculations of overtime, festival bonuses, and mandatory tax deductions (TDS), all while ensuring compliance with the 'banking channel' payment rules.",
    guidelines: "The Labour Act mandates that wages must be paid within 7 days of the end of the wage period. The Income Tax Act requires deducting TDS from salaries above the tax-free threshold.",
    deadlines: "Monthly payroll must be processed and paid by the 7th of the following month. Quarterly withholding tax returns (TDS) must be filed by the 15th of the month following each quarter.",
    rates: "Involves costs for payroll software or outsourced payroll service fees. Overtime must be paid at twice the basic hourly rate.",
    documents: "Requires employee attendance records, salary structures (Basic, House Rent, Medical), and bank transfer instructions.",
    process: [
      "Attendance Processing: Calculating total working days, late arrivals, and overtime hours.",
      "Gross-to-Net Calculation: Adding bonuses/allowances and deducting TDS and provident fund contributions.",
      "Disbursement: Transferring salaries via banking channels (mandatory for amounts above BDT 20,000).",
      "Reporting: Issuing payslips and preparing the monthly salary TDS challan."
    ],
    penalties: "Paying salaries in cash (above BDT 20,000) results in the entire salary expense being disallowed for corporate tax purposes. Late payment of wages can trigger labor strikes and DIFE inspections."
  },
  {
    id: 63,
    title: "Provident Fund & Gratuity",
    category: "HR & Payroll Management",
    intro: "Retirement benefits are mandatory for permanent employees in many sectors. Managing these funds requires strict legal separation from the company's operating cash to protect employee interests.",
    guidelines: "Governed by the Labour Act 2006 and Income Tax Rules. A 'Recognized' Provident Fund (PF) offers tax benefits to both the employer and the employee. Gratuity is a mandatory end-of-service benefit.",
    deadlines: "PF contributions must be deposited into the PF Trust bank account within 15 days of the end of the month. Gratuity must be paid within 30 days of an employee's departure.",
    rates: "PF is typically 10% of basic salary (matched by the employer). Gratuity is usually 30 days' basic salary for every year of service (for employees with 5+ years of service).",
    documents: "Requires a PF Trust Deed, NBR Recognition Letter, PF audit reports, and a Gratuity Policy.",
    process: [
      "Trust Formation: Creating a separate legal Trust to hold the PF/Gratuity funds.",
      "NBR Recognition: Applying to the NBR for tax-exempt status for the Trust.",
      "Monthly Management: Deducting, matching, and investing the PF contributions.",
      "Settlement: Calculating and paying out the accumulated balance when an employee leaves."
    ],
    penalties: "Failing to pay gratuity or mismanaging PF funds is a criminal offense. Directors can be prosecuted, and the company faces massive interest penalties on the unpaid amounts."
  },
  {
    id: 64,
    title: "Employee Tax Services",
    category: "HR & Payroll Management",
    intro: "Employers in Bangladesh have a legal duty to ensure their employees are tax-compliant. This includes deducting the correct tax from salaries and ensuring employees file their own annual returns.",
    guidelines: "Governed by Section 108 (Salary Statement) and Section 108A (Return Submission Statement) of the Income Tax Act 2023.",
    deadlines: "The annual Section 108 statement must be filed by 30th September. The Section 108A statement (listing all employees who filed their returns) must be filed by 30th April.",
    rates: "Involves administrative costs for tax counseling for employees. The primary 'cost' is the 50% penalty on TDS if an employee fails to provide their PSR (Proof of Submission of Return).",
    documents: "Requires employee e-TINs, PSR acknowledgment slips, and monthly salary TDS certificates (Form 58).",
    process: [
      "TDS Calculation: Estimating the employee's annual tax and deducting it in 12 monthly installments.",
      "Certificate Issuance: Providing every employee with an annual TDS certificate (Form 58).",
      "Compliance Tracking: Collecting PSR acknowledgment slips from all employees after the November tax deadline.",
      "Reporting: Filing the mandatory 108 and 108A statements with the NBR."
    ],
    penalties: "If a company fails to file the 108A statement or employs people without PSRs, it faces massive fines and the potential disallowance of its entire salary expense during its own tax audit."
  },
  {
    id: 65,
    title: "Labour Law Advisory",
    category: "HR & Payroll Management",
    intro: "Labour disputes can paralyze a business. Proactive advisory on terminations, layoffs, and union negotiations ensures that the company stays on the right side of the law during difficult HR transitions.",
    guidelines: "Relies on deep expertise in the 2006 Labour Act and the 2015 Labour Rules, as well as recent precedents from the Labour Appellate Tribunal.",
    deadlines: "Advisory is most critical *before* a termination or layoff occurs. The law requires specific notice periods (usually 30-120 days) that must be strictly followed.",
    rates: "Billed as professional legal consultation fees. Many companies keep a labour law expert on a monthly retainer to handle ongoing disciplinary issues.",
    documents: "Requires employment contracts, disciplinary records, show-cause notices, and termination letters.",
    process: [
      "Disciplinary Review: Ensuring that 'Due Process' (show-cause, inquiry, hearing) is followed before firing an employee for misconduct.",
      "Restructuring Support: Advising on the legal requirements for 'Retrenchment' or 'Layoff' during economic downturns.",
      "Union Negotiation: Representing the management in collective bargaining with trade unions.",
      "Litigation Defense: Representing the company in the Labour Court if an employee sues for wrongful termination."
    ],
    penalties: "Failing to follow the exact 'Due Process' for termination allows the employee to win a 'Reinstatement' order from the Labour Court, forcing the company to take them back and pay all back-wages."
  },
  {
    id: 66,
    title: "HR Audit & Gap Analysis",
    category: "HR & Payroll Management",
    intro: "An HR Audit is a health check for your workforce management. it identifies hidden legal risks, such as incorrect overtime calculations or missing safety certifications, before they turn into expensive lawsuits or fines.",
    guidelines: "The audit checks compliance against the Labour Act, VAT Act (for employee benefits), and Income Tax Act (for TDS).",
    deadlines: "HR audits are typically conducted annually. They are especially critical before a company undergoes a DIFE inspection or a social compliance audit (like BSCI or SEDEX).",
    rates: "Fees depend on the number of employees and the depth of the file review required.",
    documents: "Requires access to all personnel files, payroll registers, safety records, and training logs.",
    process: [
      "File Review: Checking if every employee has a valid appointment letter, ID, and service book.",
      "Payroll Audit: Verifying that overtime, bonuses, and TDS are calculated with 100% accuracy.",
      "Safety Walkthrough: Inspecting the workplace for fire safety, first aid, and hygiene compliance.",
      "Reporting: Issuing a 'Gap Analysis' report with a prioritized list of corrective actions."
    ],
    penalties: "Discovering non-compliance during a government inspection leads to immediate fines and the potential suspension of the company's export licenses. An internal audit prevents these 'surprises'."
  },
  {
    id: 67,
    title: "Executive Search & Recruitment",
    category: "HR & Payroll Management",
    intro: "Finding the right leadership is a strategic challenge. Executive search goes beyond standard recruitment, utilizing deep industry networks to find 'passive' candidates who aren't actively looking for a job.",
    guidelines: "Recruitment must follow the non-discrimination principles of the Constitution and the Labour Act. Executive contracts often include complex 'Non-Compete' and 'Confidentiality' clauses.",
    deadlines: "Executive searches typically take 2-4 months. The 'Notice Period' of the candidate (often 3-6 months) must also be factored into the timeline.",
    rates: "Executive search firms typically charge a 'Success Fee' ranging from 15% to 25% of the candidate's first-year total annual compensation.",
    documents: "Requires a detailed Job Description (JD), a 'Candidate Persona', and a robust Employment Agreement.",
    process: [
      "Sourcing: Identifying potential candidates through headhunting and networking.",
      "Screening: Conducting deep-dive interviews and 'Culture Fit' assessments.",
      "Reference Checks: Verifying the candidate's track record with previous employers and peers.",
      "Negotiation: Managing the delicate negotiation of the salary and benefits package."
    ],
    penalties: "A 'Bad Hire' at the executive level can cost a company millions in lost revenue and cultural damage. Professional search firms often provide a 'Replacement Guarantee' if the candidate leaves within 6 months."
  },
  {
    id: 68,
    title: "Training & Development",
    category: "HR & Payroll Management",
    intro: "In a rapidly changing economy, upskilling your workforce is a competitive necessity. Training programs in Bangladesh often focus on leadership, technical compliance (VAT/Tax), and soft skills.",
    guidelines: "Training expenses are fully tax-deductible business expenses. Large companies often have a mandatory training budget as part of their CSR or HR strategy.",
    deadlines: "Training should be an ongoing process. 'Compliance Training' (e.g., Fire Safety or VAT updates) should happen immediately after any change in the law.",
    rates: "Fees for professional trainers or training institutes are typically billed per session or per participant.",
    documents: "Requires a Training Needs Assessment (TNA), training modules, and participant feedback forms.",
    process: [
      "TNA: Identifying the specific skill gaps in the workforce.",
      "Module Design: Creating customized training content that is relevant to the Bangladeshi context.",
      "Delivery: Conducting interactive workshops, seminars, or on-the-job training sessions.",
      "Evaluation: Measuring the impact of the training on employee performance."
    ],
    penalties: "A lack of training leads to high error rates, safety accidents, and a stagnant workforce. In sectors like VAT, a single untrained accountant can cost the company millions in avoidable fines."
  },
  // PART VI: TRAINING & ACADEMY
  {
    id: 69,
    title: "Corporate Training Programs",
    category: "Training & Academy",
    intro: "Our Corporate Training programs are designed to bridge the gap between academic knowledge and the practical realities of doing business in Bangladesh. We focus on high-impact areas like Leadership, VAT, and Corporate Governance.",
    guidelines: "Programs are developed by industry experts (CAs, Advocates, and CEOs) and are tailored to the specific needs of the corporate sector.",
    deadlines: "Customized corporate programs can be organized within 2-4 weeks of a request. Public workshops are held according to our annual academic calendar.",
    rates: "Billed as a project fee for customized in-house training, or a per-participant fee for public workshops.",
    documents: "Requires a training brief from the client, customized course materials, and certificates of completion.",
    process: [
      "Needs Assessment: We meet with the client's HR team to define the learning objectives.",
      "Customization: We adapt our core modules to include the client's specific industry challenges.",
      "Execution: Our expert faculty delivers the training at the client's premises or our academy.",
      "Certification: We issue certificates to successful participants."
    ],
    penalties: "Untrained corporate teams are a major liability. Our programs mitigate the risk of 'Compliance Failure' by ensuring that key staff are up-to-date with the latest laws and best practices."
  },
  {
    id: 70,
    title: "VAT & Tax Workshops",
    category: "Training & Academy",
    intro: "With the constant stream of new SROs and the 2023 Income Tax Act, staying compliant is a moving target. Our workshops provide practical, 'hands-on' training for accountants and finance managers.",
    guidelines: "Workshops focus on the practical filing of returns, the maintenance of Mushak registers, and navigating tax audits.",
    deadlines: "We hold intensive 'Budget Update' workshops every June/July immediately after the national budget is passed.",
    rates: "Typically billed as a per-participant registration fee, which includes all course materials and templates.",
    documents: "Participants receive a comprehensive 'Compliance Toolkit' including sample Mushak forms and tax computation sheets.",
    process: [
      "Theory: Explaining the core legal principles of the VAT/Tax Acts.",
      "Practice: Walking through the actual online filing process on the NBR portals.",
      "Case Studies: Solving real-world compliance dilemmas and audit scenarios.",
      "Q&A: Direct interaction with senior tax consultants to resolve specific participant queries."
    ],
    penalties: "VAT and Tax errors are expensive. Our workshops pay for themselves by helping companies avoid the 2% monthly interest and BDT 10,000+ penalties associated with incorrect filings."
  },
  {
    id: 71,
    title: "Legal Awareness Seminars",
    category: "Training & Academy",
    intro: "Most legal problems start because people don't know their rights or obligations. Our seminars aim to democratize legal knowledge, covering topics like Land Law, Family Law, and Consumer Rights for the general public.",
    guidelines: "Seminars are designed to be accessible, using plain language rather than 'legalese' to explain complex legal concepts.",
    deadlines: "These are typically 1-day events held on weekends to ensure maximum participation from working professionals and students.",
    rates: "Often held as free community service events or for a nominal 'venue and materials' fee.",
    documents: "Participants receive 'Know Your Rights' brochures and simplified legal guides.",
    process: [
      "Topic Selection: Focusing on high-relevance areas like 'How to Verify Land Deeds' or 'Understanding Divorce Laws'.",
      "Expert Panel: Inviting senior advocates to share their practical experiences.",
      "Interactive Q&A: Allowing the audience to ask general legal questions in a safe environment.",
      "Networking: Connecting participants with legal aid resources if they need further help."
    ],
    penalties: "Legal ignorance leads to people being cheated in land deals or losing their rights in family disputes. Our seminars provide the 'Legal Shield' of knowledge to prevent these tragedies."
  },
  {
    id: 72,
    title: "Professional Certification Courses",
    category: "Training & Academy",
    intro: "For those looking to build a career in compliance, our certification courses provide a recognized credential. We offer specialized certifications in 'VAT Management', 'Corporate Secretarial Practice', and 'Payroll Administration'.",
    guidelines: "Courses involve 3-6 months of intensive study, including mandatory weekend classes and a final qualifying examination.",
    deadlines: "New batches typically start in January and July of each year.",
    rates: "Billed as a comprehensive course fee, which can often be paid in installments.",
    documents: "Requires educational transcripts for enrollment. Graduates receive a formal 'Professional Certificate' from our Academy.",
    process: [
      "Curriculum: A structured syllabus covering both the law and the practical application.",
      "Instruction: Classes led by practicing professionals (Advocates, CAs, CMAs).",
      "Examination: A rigorous final exam to ensure the candidate has mastered the material.",
      "Placement Support: We help our top graduates find internships or jobs in our network."
    ],
    penalties: "In a competitive job market, a lack of specialized certification limits career growth. Our graduates are highly sought after by corporate HR departments for their practical, 'ready-to-work' skills."
  },
  {
    id: 73,
    title: "Leadership & Management Training",
    category: "Training & Academy",
    intro: "Great managers aren't born; they are trained. Our leadership programs focus on the 'Soft Skills' that are often missing in technical professionals, such as Conflict Resolution, Strategic Thinking, and Emotional Intelligence.",
    guidelines: "Based on global leadership frameworks but adapted for the unique hierarchical and cultural context of the Bangladeshi workplace.",
    deadlines: "Typically delivered as a 2-3 day intensive 'Leadership Retreat' or a series of evening modules.",
    rates: "Billed as a premium professional development fee.",
    documents: "Participants receive leadership assessment reports (e.g., MBTI or 360-degree feedback) and a personal development plan.",
    process: [
      "Self-Assessment: Helping managers understand their own leadership style and blind spots.",
      "Skill Building: Interactive modules on delegation, motivation, and difficult conversations.",
      "Simulation: Role-playing real-world management crises.",
      "Coaching: One-on-one follow-up sessions to help implement the new skills on the job."
    ],
    penalties: "Poor leadership is the #1 cause of employee turnover. Our programs help companies retain their best talent by creating a more engaging and professional management culture."
  },
  {
    id: 74,
    title: "Soft Skills Development",
    category: "Training & Academy",
    intro: "Communication, time management, and professional etiquette are the 'oil' that makes the corporate machine run smoothly. Our soft skills programs are essential for entry-level and mid-level professionals.",
    guidelines: "Focuses on practical, everyday skills like 'Effective Email Writing', 'Presentation Skills', and 'Corporate Grooming'.",
    deadlines: "These are typically short, high-energy 1-day workshops.",
    rates: "Affordable per-participant fees, often sponsored by companies as part of their 'New Hire Orientation'.",
    documents: "Participants receive checklists, templates, and 'cheat sheets' for professional communication.",
    process: [
      "Demonstration: Showing the 'Right vs. Wrong' way to handle professional situations.",
      "Practice: Participants record their own presentations or write sample emails for critique.",
      "Feedback: Immediate, constructive feedback from expert facilitators.",
      "Action Plan: Every participant leaves with 3 specific things they will do differently tomorrow."
    ],
    penalties: "A lack of soft skills leads to miscommunications, missed deadlines, and a 'unprofessional' company image. Our training ensures that your team represents your brand with confidence and clarity."
  },
  {
    id: 75,
    title: "Customized In-House Training",
    category: "Training & Academy",
    intro: "Every company is different. Our 'In-House' service allows us to build a training program from scratch that addresses your specific pain points, using your own internal data and scenarios.",
    guidelines: "We sign a strict Non-Disclosure Agreement (NDA) to ensure that we can work with your sensitive internal information during the training.",
    deadlines: "Requires a 4-week lead time for research and module customization.",
    rates: "Billed as a comprehensive 'Turnkey' project fee.",
    documents: "The client receives a proprietary training manual that they can continue to use for future employees.",
    process: [
      "Diagnostic: We interview your managers and review your processes to find the 'real' problems.",
      "Design: We build a training solution that specifically fixes those problems.",
      "Delivery: We train your team in the comfort of your own office.",
      "Sustainability: We 'Train the Trainer' so your internal HR team can continue the program."
    ],
    penalties: "Off-the-shelf training often fails because it isn't relevant. Our customized approach ensures 100% relevance, leading to a much higher Return on Investment (ROI) for your training budget."
  },
  {
    id: 76,
    title: "Legal & Compliance Academy",
    category: "Training & Academy",
    intro: "The Academy is our flagship long-term learning initiative. It is a community of compliance professionals who share knowledge, stay updated on new laws, and mentor the next generation of legal experts in Bangladesh.",
    guidelines: "Membership-based model providing ongoing access to our library of legal guides, monthly update webinars, and networking events.",
    deadlines: "Memberships are renewed annually. The 'Compliance Library' is updated in real-time as new laws are passed.",
    rates: "Annual membership subscription fee.",
    documents: "Members get exclusive access to our 'Master Templates' for contracts, policies, and court petitions.",
    process: [
      "Knowledge Sharing: Monthly 'Deep Dive' webinars on new SROs or High Court judgments.",
      "Mentorship: Connecting junior compliance officers with senior industry veterans.",
      "Resource Access: A searchable online database of Bangladeshi laws and precedents.",
      "Advocacy: Representing the collective voice of compliance professionals to regulators."
    ],
    penalties: "In the world of compliance, being 'out of the loop' is dangerous. Our Academy ensures that you and your company are always ahead of the curve, minimizing the risk of accidental non-compliance."
  }
];

export const authors = [
  "Ekramul Islam Khandaker", 
  "Advocate Anamul Haque", 
  "Md. Abu Hanif", 
  "Advocate Muzammel Haque",
  "Muhammad Abdul Kader ACCA",
  "Zohir Uddin",
  "Rafi Rahman",
  "Advocate Md. Delower Hossain (Ovi)",
  "Kamrul Hasan",
  "Shofiqul Islam",
  "Kamal Khan",
  "Fardausi Akter"
];

export const dates = ["March 28, 2026", "March 25, 2026", "March 20, 2026", "March 18, 2026", "March 12, 2026", "March 05, 2026", "February 28, 2026"];

export const blogData = blogDataRaw.map((post, index) => {
  const activeCategoryImages = categoryImages[post.category as keyof typeof categoryImages] || categoryImages["Corporate Structuring & Licensing"];
  const id1 = activeCategoryImages[(index) % activeCategoryImages.length];
  const id2 = activeCategoryImages[(index + 3) % activeCategoryImages.length];
  const id3 = activeCategoryImages[(index + 6) % activeCategoryImages.length];

  const height1 = 500 + index;
  const height2 = 501 + index;
  const height3 = 502 + index;

  return {
    ...post,
    title: post.title.replace(/^\d+\.\s*/, ''),
    images: [
      `https://images.unsplash.com/photo-${id1}?auto=format&fit=crop&q=80&w=800&h=${height1}`,
      `https://images.unsplash.com/photo-${id2}?auto=format&fit=crop&q=80&w=800&h=${height2}`,
      `https://images.unsplash.com/photo-${id3}?auto=format&fit=crop&q=80&w=800&h=${height3}`
    ],
    author: authors[index % authors.length],
    date: dates[index % dates.length] || "February 20, 2026",
    readTime: `${Math.floor(Math.random() * 3) + 4} min read`,
    tags: ["Bangladesh Law", post.category.split(' ')[0], "Compliance"]
  };
});
