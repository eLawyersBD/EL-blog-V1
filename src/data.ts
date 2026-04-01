export const categories = [
  "All",
  "Dispute Resolution & Litigation",
  "Corporate & Individual Tax",
  "Corporate Structuring & Licensing",
  "Finance & Accounting",
  "Human Capital & Labour Law"
];

export const uniqueUnsplashIds = [
  "1589829085413-56de8ae18c73", // Gavel
  "1505664194779-8beaceb93744", // Scale of justice
  "1528747045269-390fe33c19f2", // Law books
  "1589391886645-051940f421f1", // Justice statue
  "1563986768609-322da13575f3", // Courtroom/Law
  "1450101499162-43fcb1a11471", // Legal pillars
  "1603796846097-03a510105531", // Lawyer desk
  "1589828135870-8bbdbd26a27e", // Law books stack
  "1554224155-8d04cb21cd6c", // Tax/Calculator
  "1460925895917-afdab827c52f", // Financial chart
  "1664575602276-acd073f104c1", // Signing doc
  "1554224154-26032ffc0d07", // Financial papers
  "1507925922837-326f12ab0009", // Auditing/Coffee
  "1590283603385-17ffb3a7f29f", // Stock market
  "1486406146926-c627a92ad1ab", // Corporate building
  "1507679799987-c73779587ccf", // Handshake
  "1454165804606-c3d57bc86b40", // Consulting/Laptop
  "1521791136064-7986c2920216", // Team hands
  "1444653614773-995cb1ef9efa", // Business architecture
  "1436450412740-6b188f2e4754", // Presentation
  "1600880292203-757bb62b4baf", // Deal/Meeting
  "1556155092-490a1ba16284", // Planning board
  "1453728018264-4414a92c3061", // Writing notes
  "1512314889357-e157c22f938d", // Legal paper/Pen
  "1503422421313-91ee7387cc31", // Tax/Invoice
  "1521737604893-d14cc237f11d", // HR Team
  "1542744173-8e7e53415bb0", // Office meeting
  "1573496359142-b8d87734a5a2", // Interview
  "1556761175-5973dc0f32e7"  // HR Teamwork
];

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
    title: "Land & Property Disputes",
    category: "Dispute Resolution & Litigation",
    intro: "Land disputes represent a massive proportion of civil litigation in Bangladesh due to historical fragmentation, rapid urbanization, unrecorded inheritances, and complex overlapping land laws. Resolving these disputes requires a deep dive into historical land records spanning over a century, tracing titles from the British era to modern-day surveys.",
    guidelines: "Title disputes and possessory rights are resolved via the Specific Relief Act, 1877 (specifically Sections 8, 9, and 42). Partition of joint family properties is governed by the Partition Act, 1893. Furthermore, the State Acquisition and Tenancy Act, 1950, and the Non-Agricultural Tenancy Act, 1949, govern statutory tenancy, pre-emption rights, and the relationship between the state and the landowner.",
    deadlines: "Under the Limitation Act, suits for recovery of possession based on title must generally be filed within 12 years of dispossession. However, a summary suit under Section 9 of the Specific Relief Act (recovery of possession without proving title, just prior possession) must be filed within 6 months. Suits for a simple declaration of title without consequential relief must be filed within 3 years of the right to sue accruing.",
    rates: "Ad valorem court fees (capped at BDT 40,000) apply for suits involving the recovery of possession or partition. However, a pure declaration suit without consequential relief attracts a fixed, nominal court fee (typically BDT 300). Land mutation (Namjari) fees at the AC Land office are statutorily fixed at BDT 1,170.",
    documents: "Mandatory documents include the original purchase deed (Saf Kabala), inheritance documents (Warishan certificate), a complete chain of historical and recent land records (CS, SA, RS, BS/City Jorip Khatians), up-to-date land development tax (Khajna) receipts, and the DCR (Duplicate Carbon Receipt) for mutation.",
    process: [
      "Title Vetting: The aggrieved party's lawyer assesses the chain of title, cross-referencing deeds with government Khatian records to identify the break in the chain.",
      "Filing the Suit: A plaint is filed in the civil court for declaration of title, partition, or cancellation of a fraudulent deed.",
      "Injunction: The plaintiff typically files an application under Order 39 of the CPC for a temporary injunction to stop the opposing party from selling or altering the land during the trial.",
      "Summoning Authorities: The court summons the opposing parties and often makes the local AC Land or Sub-Registrar a pro-forma defendant.",
      "Commissioning: The court may appoint an Advocate Commissioner to physically measure the land and submit a topographical report.",
      "Final Decree: After evidence collection, the court declares the rightful ownership, nullifies fraudulent deeds, and orders the land registry to update their records."
    ],
    penalties: "Presenting forged deeds (Jal Dalil) in land disputes can trigger parallel criminal proceedings for perjury, cheating, and forgery under the Penal Code. Failure to legally partition property prevents lawful transfer, mutation, or commercial development of the land, rendering the asset commercially dead."
  },
  {
    id: 7,
    title: "Corporate Tax Return Filing",
    category: "Corporate & Individual Tax",
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
    id: 13,
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
    id: 14,
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
    id: 15,
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
    id: 16,
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
    id: 17,
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
    id: 18,
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
    id: 19,
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
    id: 20,
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
    id: 21,
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
      "License Updates: The company must manually update its Trade License, e-TIN, VAT BIN, and Bank Accounts."
    ],
    penalties: "Operating under a new name without RJSC approval is illegal. Furthermore, failing to sequentially update the VAT BIN and Bank Accounts will result in frozen funds and rejected tax returns."
  },
  {
    id: 22,
    title: "Annual Filing",
    category: "Corporate Structuring & Licensing",
    intro: "Annual Filing is the most critical recurring compliance task for any registered company. It ensures the government and public have an accurate, up-to-date snapshot of the company's financial health, directorship, and shareholding structure.",
    guidelines: "Mandated by Sections 36 and 183 of the Companies Act, 1994. Every company must hold an Annual General Meeting (AGM) once a calendar year, with no more than 15 months elapsing between two AGMs.",
    deadlines: "The Annual Return (Schedule X) must be filed with the RJSC within 21 days of the AGM. The Audited Balance Sheet and Profit & Loss account must be filed within 30 days of the AGM.",
    rates: "Filing Schedule X and the Audited Financials on time incurs a nominal fee (approx. BDT 400 each). However, late fees are applied strictly per document, per day of delay.",
    documents: "Requires the ICAB-verified Audited Financial Statements, the fully completed Schedule X (listing all current shares and directors), and the signed minutes of the AGM.",
    process: [
      "Audit Completion: External auditors finalize the financial statements.",
      "Board Approval: The Board approves the financials and sets the AGM date.",
      "AGM: Shareholders adopt the financials and elect directors.",
      "RJSC Upload: The Company Secretary uploads the Schedule X and financials to the RJSC portal."
    ],
    penalties: "Late filing incurs an automatic penalty of BDT 500 per day of default. Failing to file for three consecutive years triggers 'Strike Off' proceedings, where the government forcibly dissolves the company and freezes its assets."
  },
  {
    id: 23,
    title: "Entity Liquidation",
    category: "Corporate Structuring & Licensing",
    intro: "When a business reaches the end of its lifecycle, it cannot simply be abandoned. Entity Liquidation (Winding Up) is the formal legal process of settling all corporate debts, distributing remaining assets, and officially extinguishing the company's legal existence.",
    guidelines: "Winding up is governed by Part V of the Companies Act, 1994. It can be executed via a 'Members Voluntary Winding Up' (if the company is solvent) or a 'Creditors Voluntary Winding Up' / High Court Order (if insolvent).",
    deadlines: "A Declaration of Solvency must be filed with the RJSC exactly 5 weeks before the resolution for winding up is passed. The appointed Liquidator must publish a notice in the official Gazette within 30 days of appointment.",
    rates: "Liquidation is expensive. Costs include Liquidator professional fees, publication fees in national dailies, and clearing all outstanding RJSC, NBR (Tax/VAT), and municipal dues before the final dissolution order is granted.",
    documents: "Requires a Board Declaration of Solvency, EGM Special Resolution, Appointment Letter of the Liquidator, final audited accounts, No Objection Certificates (NOCs) from the NBR and creditor banks, and the Liquidator’s Final Report.",
    process: [
      "Solvency Declaration: Directors swear an affidavit that the company can pay its debts in full.",
      "Resolution & Appointment: Shareholders pass a winding-up resolution and appoint a Liquidator.",
      "Asset Realization: The Liquidator takes control, sells assets, and pays off all creditors and taxes.",
      "Final Meeting: The Liquidator presents the final accounts to the shareholders.",
      "Dissolution: The RJSC reviews the final report and strikes the company off the register."
    ],
    penalties: "Abandoning a company without formal liquidation leaves directors personally liable for accumulating annual RJSC fines, ongoing corporate tax demands, and potential lawsuits from unpaid creditors."
  },
  {
    id: 24,
    title: "Work Permit Processing",
    category: "Corporate Structuring & Licensing",
    intro: "To facilitate Foreign Direct Investment while protecting the local labor market, the employment of foreign nationals is heavily scrutinized. Bringing in expatriate experts requires navigating a strict, multi-agency clearance process.",
    guidelines: "Governed by the BIDA Act, 2016, and the Foreign Exchange Regulation Act. Companies must maintain a strict ratio: 1 foreign employee for every 5 local employees (1:5) in commercial sectors, or 1:20 in industrial sectors.",
    deadlines: "The employer must apply for the formal Work Permit within 15 days of the expatriate arriving in Bangladesh on a specific 'E-Visa' (Employment Visa). The initial Work Permit is usually granted for one year.",
    rates: "The official BIDA fee for issuing a new Work Permit is BDT 5,000 per year. However, the broader requirement includes proving a minimum inward remittance (usually USD 50,000) to establish the entity initially.",
    documents: "Requires evidence of local newspaper job advertisements (proving no local expert was available), Board resolutions, attested academic certificates, an Encashment Certificate, the employment contract, and passport copies.",
    process: [
      "Visa Recommendation: The employer applies to BIDA for a Visa Recommendation Letter.",
      "E-Visa Issuance: The expat obtains an E-Visa from the Bangladesh Embassy in their home country.",
      "Arrival & Application: Upon arrival, the formal Work Permit application is submitted to BIDA within 15 days.",
      "Security Clearance: BIDA initiates a mandatory security clearance check via the Special Branch (SB) of Police."
    ],
    penalties: "Employing an expatriate on a Tourist (T) or Business (B) visa leads to the immediate deportation of the expatriate, massive fines for the employer, and the cancellation of the company's operational licenses."
  },
  {
    id: 25,
    title: "BIDA Permission & Renewal",
    category: "Corporate Structuring & Licensing",
    intro: "Foreign corporations wishing to establish a physical presence in Bangladesh without forming a local subsidiary must obtain direct permission from the Bangladesh Investment Development Authority (BIDA) to open a Branch or Liaison Office.",
    guidelines: "Regulated under the BIDA Act, 2016. A Branch Office can engage in commercial activities and generate local revenue, whereas a Liaison/Representative Office is strictly limited to maintaining communications and quality control, and cannot earn local income.",
    deadlines: "Initial BIDA permission is typically granted for 3 years. Applications for renewal must be submitted with full compliance reports at least 2 months prior to the expiration date of the current permission.",
    rates: "The government fee for establishing a Branch or Liaison office is BDT 25,000. Additionally, the foreign parent company must bring in a mandatory inward remittance of USD 50,000 within 2 months of approval.",
    documents: "Requires the foreign parent company's Certificate of Incorporation, MoA/AoA, audited financials for the last financial year, a Board Resolution authorizing the Bangladesh office, and a designated local representative's details.",
    process: [
      "Application: Submit the required documents (attested by the Bangladesh Embassy in the origin country) via the BIDA portal.",
      "Inter-Ministerial Review: BIDA routes the application through an inter-ministerial committee, including the central bank and intelligence agencies.",
      "Approval: BIDA issues the approval letter with specific operational conditions.",
      "Fund Injection: The required USD 50,000 is remitted into the newly opened local bank account."
    ],
    penalties: "Operating a branch or liaison office without valid BIDA permission is a violation of foreign exchange laws. Banks will immediately freeze accounts, and all foreign staff will have their visas revoked."
  },
  {
    id: 26,
    title: "Profit Remittance",
    category: "Corporate Structuring & Licensing",
    intro: "For foreign investors, the ability to smoothly repatriate profits and dividends back to their home country is paramount. Bangladesh allows full repatriation, but the process is highly regulated by the central bank to prevent capital flight and money laundering.",
    guidelines: "Governed by the Foreign Exchange Regulation Act, 1947, and Bangladesh Bank’s Guidelines for Foreign Exchange Transactions (GFET). Remittance is facilitated through Authorized Dealer (AD) branches of commercial banks.",
    deadlines: "Dividends must be declared at the AGM. Before remittance can occur, the company must ensure all corporate taxes and individual withholding taxes for the fiscal year have been completely assessed and paid to the NBR.",
    rates: "The repatriation itself is not restricted, but it is subject to a strict Withholding Tax on Dividends. Under the ITA 2023, a 20% tax is deducted at source on dividends paid to foreign companies, though this may be reduced if a Double Taxation Avoidance Agreement (DTAA) exists.",
    documents: "Requires the Board Resolution declaring the dividend, Audited Financial Statements, an Auditor’s Certificate confirming the dividend calculation, tax clearance certificates from the NBR, and the original RJSC Schedule X.",
    process: [
      "Dividend Declaration: The AGM officially approves the dividend payout.",
      "Tax Clearance: The company pays all applicable corporate and withholding taxes and secures NBR clearance.",
      "AD Bank Submission: The required dossier is submitted to the company's designated Authorized Dealer bank.",
      "Bangladesh Bank Verification: The AD bank verifies the documents and processes the outbound foreign exchange remittance."
    ],
    penalties: "Attempting to remit funds using unauthorized channels (Hundi) or falsifying profit statements is a severe criminal offense under the Money Laundering Prevention Act, leading to asset seizure and imprisonment of directors."
  },
  {
    id: 27,
    title: "Address Change",
    category: "Corporate Structuring & Licensing",
    intro: "Changing the registered office address of a company is not just a logistical move; it is a statutory update. The registered address is the official location where courts, the NBR, and the RJSC send binding legal notices and summons.",
    guidelines: "Governed by Section 77 of the Companies Act, 1994. The company must maintain a registered office from the day it commences business. Shifting the address requires formal board approval and subsequent notification to the RJSC.",
    deadlines: "The RJSC must be officially notified of any change in the registered office address within exactly 28 days of the physical move. Delaying this notification violates corporate compliance mandates.",
    rates: "Filing the statutory form (Form VI) to update the address incurs a standard, nominal RJSC filing fee (approximately BDT 400), provided it is submitted within the 28-day window.",
    documents: "Requires a formal Board Resolution approving the change of address, the newly executed lease agreement for the new premises, and a completed and signed Form VI (Notice of Situation of Registered Office).",
    process: [
      "Board Resolution: The Directors hold a meeting and pass a resolution to shift the registered office.",
      "Lease Execution: A valid commercial lease agreement is signed for the new location.",
      "RJSC Filing: The Company Secretary submits Form VI and the resolution to the RJSC portal.",
      "License Updates: The company must manually update its Trade License, e-TIN, VAT BIN, and Bank records to reflect the new address."
    ],
    penalties: "Failure to update the address means legal notices (like tax audit demands or court summons) sent to the old address are considered legally served. This often results in ex-parte judgments or massive tax defaults against the company without their knowledge."
  },
  {
    id: 28,
    title: "Foreign Entity Compliance",
    category: "Corporate Structuring & Licensing",
    intro: "Foreign Branch and Liaison offices operating in Bangladesh face an ongoing, dual-layer compliance burden. They must satisfy both the investment authority (BIDA) and the central bank (Bangladesh Bank) continuously to maintain their operational status.",
    guidelines: "Compliance is strictly mandated by Section 18B of the Foreign Exchange Regulation Act, 1947, and the conditions set out in the initial BIDA approval letter. Liaison offices must prove they are funded entirely from abroad and are generating zero local revenue.",
    deadlines: "Foreign entities must submit quarterly operational and financial reports to both BIDA and Bangladesh Bank within 30 days of the end of each quarter. Annual audited accounts must be submitted within 6 months of the fiscal year-end.",
    rates: "While reporting itself does not carry high government fees, the cost of maintaining specialized compliance teams and Tier-1 chartered accounting firms to audit these specific foreign exchange reports is substantial.",
    documents: "Quarterly submissions require detailed statements of inward remittances, bank encashment certificates, payroll statements, tax deduction certificates (TDS/VDS), and a comprehensive report of the office's activities in Bangladesh.",
    process: [
      "Fund Monitoring: The local office strictly tracks all inward foreign remittances used for operational expenses.",
      "Quarterly Compilation: Accountants compile the 18B reports, matching every local expense against the foreign funds received.",
      "Audit & Submission: The quarterly and annual reports are audited and submitted to the BIDA compliance department and the Bangladesh Bank Foreign Exchange Investment Department."
    ],
    penalties: "Failure to submit quarterly 18B reports or proving local revenue generation by a Liaison office triggers immediate action. Bangladesh Bank will freeze the entity's local accounts, block all future inward remittances, and BIDA will cancel the office's operational permission."
  },
  {
    id: 29,
    title: "Bookkeeping",
    category: "Finance & Accounting",
    intro: "Systematic bookkeeping is the foundational bedrock upon which all corporate reporting, tax compliance, and financial auditing are built. Maintaining arbitrary or incomplete accounts is not just bad business practice; it is a direct violation of corporate and tax laws.",
    guidelines: "Section 181 of the Companies Act, 1994, strictly mandates the maintenance of proper books of accounts reflecting a true and fair view of the state of affairs. Concurrently, the VAT Act 2012 demands parallel maintenance of highly specific 'Mushak' registers.",
    deadlines: "Books of accounts must be continuously updated and maintained in real-time. Statutory records must be preserved for a minimum of 12 years and be available for unannounced inspections.",
    rates: "Companies with an annual turnover exceeding BDT 5 Crore are legally mandated by the NBR to utilize specific, NBR-approved VAT management software rather than manual ledgers.",
    documents: "A compliant bookkeeping system requires a Cash Book, Bank Book, General Ledger, Fixed Asset Register, and Sales/Purchase registers, all fully supported by sequential physical or digital vouchers.",
    process: [
      "Transaction Logging: Record financial transactions daily using double-entry bookkeeping principles.",
      "Software Integration: Integrate NBR-approved accounting software to log real-time inventory and sales data if applicable.",
      "Reconciliation: Generate monthly bank reconciliations and trial balances to verify accuracy.",
      "Preparation for Audit: Finalize the trial balance to generate draft financial statements."
    ],
    penalties: "Failure to maintain statutory books constitutes an offense rendering directors liable to fines. Incomplete books empower NBR tax authorities to impose devastating 'Best Judgment Assessments'."
  },
  {
    id: 30,
    title: "General Ledger Maintenance",
    category: "Finance & Accounting",
    intro: "The General Ledger (GL) is the central repository for accounting data transferred from all subledgers. Accurate GL maintenance ensures financial integrity and enables precise and actionable reporting.",
    guidelines: "Must be maintained in accordance with Bangladesh Financial Reporting Standards (BFRS) and International Accounting Standards (IAS). It must accurately categorize assets, liabilities, equity, revenues, and expenses.",
    deadlines: "Month-end closing of the GL should typically be completed within the first 5 to 7 working days of the subsequent month to allow for timely management reporting.",
    rates: "Accuracy in the GL directly impacts corporate tax efficiency by ensuring all deductible business expenses are properly categorized and admissible under the ITA 2023.",
    documents: "Journal entries, validated sub-ledger reconciliations (AP, AR, Fixed Assets), and a meticulously extracted unadjusted and adjusted Trial Balance.",
    process: [
      "Data Entry: Post daily operational transactions securely.",
      "Sub-ledger Sync: Reconcile Accounts Payable and Receivable modules with the main GL control accounts.",
      "Adjustments: Post month-end accruals, prepayments, and statutory depreciation.",
      "Trial Balance: Extract and verify the trial balance to ensure debits strictly equal credits."
    ],
    penalties: "Misclassification of expenses in the GL leads directly to heavy disallowances during NBR tax audits, triggering corporate tax shortfalls and strict concealment penalties."
  },
  {
    id: 31,
    title: "Accounts Payable/Receivable",
    category: "Finance & Accounting",
    intro: "Effective management of Accounts Payable (AP) and Accounts Receivable (AR) is vital for optimizing working capital, maintaining vendor relationships, and ensuring a healthy corporate cash flow.",
    guidelines: "Governed by the Contract Act 1872 regarding enforceable payment terms, and the Negotiable Instruments Act 1881 for check and promissory note collections.",
    deadlines: "Standard commercial credit terms apply (e.g., Net 30, Net 60). Uncollected AR aging beyond statutory limits requires formal board-approved bad debt write-off procedures.",
    rates: "Late payments in AR may accrue interest depending on specific contract terms. Businesses may use factoring or invoice discounting where rates vary by financial institution.",
    documents: "Purchase Orders (POs), Goods Receipt Notes (GRNs), commercial invoices, delivery challans, and formal aging reports (30/60/90 days).",
    process: [
      "Invoice Receipt: Log incoming vendor invoices systematically.",
      "3-Way Matching: Verify that the PO, GRN, and Invoice amounts match exactly before authorizing AP payment.",
      "Payment & Collection: Execute vendor payments on schedule and aggressively pursue overdue AR accounts.",
      "Reconciliation: Regularly update AP/AR sub-ledgers against the central GL."
    ],
    penalties: "Failure to manage AP risks severed supplier relations and halted supply chains. Poor AR tracking leads to undocumented bad debt write-offs, which are rejected as deductible expenses by tax authorities."
  },
  {
    id: 32,
    title: "Bank Reconciliation",
    category: "Finance & Accounting",
    intro: "Bank Reconciliation acts as the primary internal control mechanism to detect discrepancies, data entry errors, or outright fraud by mathematically matching internal cash books with external bank statements.",
    guidelines: "Standard internal corporate governance controls mandate regular, documented reconciliations to ensure the absolute integrity of the 'Cash and Cash Equivalents' reported in financial statements.",
    deadlines: "Must be performed strictly on a monthly basis, immediately following the receipt of the end-of-month bank statement, and finalized by the 5th of the next month.",
    rates: "Crucial for identifying hidden bank transaction charges, unexpected overdraft interest fees, and ensuring funds aren't sitting idle in non-interest-bearing accounts.",
    documents: "Monthly official Bank Statements, internal Cash/Bank Book ledgers, and formal, signed Bank Reconciliation Statements (BRS).",
    process: [
      "Comparison: Match cleared checks and deposits on the statement line-by-line against the cash book.",
      "Identify Variances: Locate outstanding unpresented checks, deposits in transit, and unexpected bank fees.",
      "Adjustments: Post required journal entries into the GL for bank fees or direct debits.",
      "Finalize: Review and sign off on the reconciled BRS by a senior finance officer."
    ],
    penalties: "Delayed reconciliation obscures true cash-flow realities, increases the risk of undetected internal embezzlement, and leads to bounced checks resulting in severe legal action."
  },
  {
    id: 33,
    title: "Financial Statements Preparation",
    category: "Finance & Accounting",
    intro: "Translating raw bookkeeping data into formalized financial reporting is highly regulated to protect the interests of shareholders, creditors, and the public investment market.",
    guidelines: "Regulated by the Financial Reporting Act (FRA), 2015, which established the Financial Reporting Council (FRC). Mandates strict adherence to BFRS, fundamentally aligned with IFRS.",
    deadlines: "Draft financial statements must be finalized and audited before the AGM, typically within 6 months of the fiscal year-end. Publicly listed companies face much tighter quarterly BSEC deadlines.",
    rates: "Public Interest Entities (PIEs) must adhere to rigorous IFRS compliance (Level 1 standards), while smaller entities may be permitted to use simplified SME accounting standards.",
    documents: "Balance Sheet (Statement of Financial Position), Statement of Profit & Loss, Statement of Cash Flows, Statement of Changes in Equity, and detailed explanatory notes.",
    process: [
      "Drafting: Prepare draft statements in strict accordance with applicable BFRS/IFRS frameworks.",
      "Board Approval: The Board of Directors reviews and officially adopts the draft financials.",
      "External Audit: Hand the statements over to independent statutory auditors for verification.",
      "Filing: Circulate the final audited statements to shareholders and file with the RJSC and NBR."
    ],
    penalties: "Non-compliance with reporting standards under the FRA 2015 grants the FRC immense punitive powers, including massive financial penalties and criminal proceedings against directors for corporate fraud."
  },
  {
    id: 34,
    title: "Management Reporting",
    category: "Finance & Accounting",
    intro: "While statutory reporting looks outward to regulators, Management Reporting provides internal executive stakeholders with granular, customized data necessary to make rapid strategic operational decisions.",
    guidelines: "Internal reporting is driven by customized Corporate Governance guidelines and the specific Key Performance Indicators (KPIs) set by the Board of Directors.",
    deadlines: "Reporting cycles are typically aligned with the monthly or quarterly executive management and board meeting schedules.",
    rates: "Management reports analyze critical internal performance metrics such as Gross Margin, Customer Acquisition Cost (CAC), Return on Investment (ROI), and EBITDA margins.",
    documents: "Management Information System (MIS) reports, departmental variance analyses, daily cash flow forecasts, and visual executive dashboards.",
    process: [
      "Data Aggregation: Pull real-time operational and financial data from internal ERPs.",
      "Analysis: Compare actual performance heavily against budgeted targets.",
      "Visualization: Present data using clear charts, graphs, and dashboards.",
      "Strategic Review: Management utilizes these reports to pivot operational strategies immediately."
    ],
    penalties: "Inaccurate, obfuscated, or delayed management reporting leads directly to blinded decision-making, strategic corporate missteps, and severe, unexpected cash flow crunches."
  },
  {
    id: 35,
    title: "Budgeting & Forecasting",
    category: "Finance & Accounting",
    intro: "Forward-looking financial planning is essential for future survival. It acts as a financial roadmap, establishing revenue targets and setting hard expense constraints over the upcoming fiscal year.",
    guidelines: "For listed entities, the BSEC Corporate Governance Code mandates forward-looking disclosures. For the non-profit sector, the NGO Affairs Bureau (NGOAB) enforces rigid budget approvals.",
    deadlines: "Annual budgets must be drafted, reviewed, and board-approved prior to the commencement of the new financial year (typically before July 1st).",
    rates: "Budget variances (the actual vs. forecast difference) are heavily scrutinized. NGOs deviating from approved budget line items by more than 10% risk severe compliance breaches.",
    documents: "Master Annual Budget, Cash Flow Projections, Capital Expenditure (CAPEX) budgets, and for NGOs, detailed FD-6/FD-7 project proposals.",
    process: [
      "Departmental Input: Gather bottom-up financial requirements from all business units.",
      "Consolidation: The Finance team merges inputs into a cohesive corporate Master Budget.",
      "Review & Adjustment: The CFO and Board revise targets based on macroeconomic market conditions.",
      "Approval & Tracking: Finalize the budget and aggressively track monthly performance variances."
    ],
    penalties: "Listed companies failing to justify massive deviations face BSEC investigations. NGOs deviating without explicit permission face blocked foreign funds and potential cancellation of registration."
  },
  {
    id: 36,
    title: "Fixed Asset Management",
    category: "Finance & Accounting",
    intro: "Fixed assets represent significant capital investments. Proper management tracks their entire lifecycle from acquisition to disposal, ensuring accurate corporate valuation and maximizing tax benefits.",
    guidelines: "Governed by IAS 16 (Property, Plant and Equipment) for accounting purposes, and the Third Schedule of the ITA 2023 for determining allowable, statutory tax depreciation.",
    deadlines: "A comprehensive physical verification of all fixed assets must be completed annually before the commencement of the external statutory audit.",
    rates: "Tax depreciation rates differ significantly from accounting depreciation (e.g., general machinery may receive 20% normal tax depreciation, plus potential initial depreciation allowances).",
    documents: "Fixed Asset Register (FAR), capitalization memos, purchase deeds, import Letters of Credit (LCs), and physical verification reports.",
    process: [
      "Capitalization: Record the asset in the GL upon successful installation and commercial readiness.",
      "Tagging: Apply physical barcodes or RFID tags to the asset for physical tracking.",
      "Depreciation: Run monthly accounting depreciation schedules in the ERP.",
      "Verification: Conduct annual physical counts to identify ghost assets or require impairments."
    ],
    penalties: "Overstating assets artificially inflates company value, constituting corporate fraud. Failing to maintain a verified FAR results in the complete disallowance of tax depreciation claims by the NBR."
  },
  {
    id: 37,
    title: "Inventory Management",
    category: "Finance & Accounting",
    intro: "For manufacturing and trading entities, inventory is often the largest current asset. Meticulous management prevents stock-outs, minimizes holding costs, and is an absolute necessity for VAT compliance.",
    guidelines: "Inventory valuation is dictated globally by IAS 2 (Inventories). Locally, raw materials and finished goods tracking must strictly align with VAT Rules 2016.",
    deadlines: "Monthly closing inventory valuations are required for accurate management accounts, alongside a mandatory, auditor-observed physical stock-take at the fiscal year-end.",
    rates: "Inventory must be valued at the lower of cost or net realizable value (NRV). Efficient management directly optimizes the Inventory Turnover Ratio.",
    documents: "Bin cards, Goods Receipt Notes (GRN), Material Requisition Slips, and mandatory NBR registers like Mushak 6.1 (Purchase Register) and 6.2 (Sales Register).",
    process: [
      "Receiving: Log incoming goods via GRNs directly into the warehouse system.",
      "Issuance: Issue raw materials to production floors exclusively against authorized slips.",
      "Valuation: Apply consistent FIFO or Weighted Average Cost methods.",
      "Physical Count: Reconcile physical warehouse stock with ERP balances frequently."
    ],
    penalties: "Discrepancies between physical stock and declared VAT registers trigger immediate NBR fines, confiscation of commercial goods, and severe penalties for alleged tax evasion."
  },
  {
    id: 38,
    title: "Tax Statements",
    category: "Finance & Accounting",
    intro: "Tax statement preparation involves translating corporate financial records into the highly specific, rigid formats demanded by the National Board of Revenue (NBR) to determine statutory liabilities.",
    guidelines: "Governed meticulously by the Income Tax Act (ITA) 2023 and VAT & SD Act 2012. It requires reconciling 'Accounting Profit' to 'Taxable Profit' by removing inadmissible expenses.",
    deadlines: "Corporate tax returns are due by the 15th day of the ninth month following the income year. Employee and supplier withholding tax statements (TDS/VDS) are due quarterly.",
    rates: "Corporate tax ranges from 20% (listed) to 27.5% (non-listed), up to 40% for banks/telcos. TDS and VDS deduction rates vary dynamically by specific service/goods category.",
    documents: "Tax computation sheets, Form IT-10B, Mushak 9.1 returns, treasury A-Challans proving deposit, and detailed TDS/VDS deduction schedules.",
    process: [
      "Reconciliation: Add back accounting depreciation and unallowable perquisites to net profit.",
      "Deduction Application: Apply statutory tax depreciation and eligible advance tax credits.",
      "Challan Generation: Deposit net payable taxes via automated treasury challans.",
      "Submission: File the comprehensive return with the Deputy Commissioner of Taxes."
    ],
    penalties: "Errors or aggressive tax positions result in 'reassessments' creating massive new tax demands. Late filing incurs a 10% penalty plus daily compounding default fines."
  },
  {
    id: 39,
    title: "Audit Preparation",
    category: "Finance & Accounting",
    intro: "The external statutory audit is the ultimate test of a company's financial integrity. Thorough internal audit preparation ensures a smooth review process and avoids damaging 'qualified' audit opinions.",
    guidelines: "Audits are conducted under the Companies Act 1994 and International Standards on Auditing (ISA) as adopted by the Institute of Chartered Accountants of Bangladesh (ICAB).",
    deadlines: "Preparation must commence weeks before the fiscal year-end. The audit must be fully completed in time for the AGM and the tax return filing deadline (September 15th).",
    rates: "Audit fees are driven by market forces and the complexity of the engagement, ranging from BDT 30,000 for small entities to millions for large multinational conglomerates.",
    documents: "Finalized Trial Balance, General Ledger, physical stock count sheets, direct bank balance confirmation certificates, and formal management representation letters.",
    process: [
      "Pre-Audit Review: Finance teams conduct internal checks to clear any suspense accounts.",
      "Documentation: Compile a comprehensive 'Audit File' with all supporting vouchers.",
      "Fieldwork Support: Host external auditors, providing transparent access to records and answering queries.",
      "Sign-off: Resolve auditor queries to secure an unqualified audit report with a valid Document Verification Code (DVC)."
    ],
    penalties: "A 'Qualified' or 'Adverse' audit opinion destroys investor confidence, freezes bank credit lines, and triggers immediate, aggressive scrutiny from the FRC and NBR."
  },
  {
    id: 40,
    title: "Internal Audit Support",
    category: "Finance & Accounting",
    intro: "Internal Auditing is an independent, objective assurance function designed to evaluate and systematically improve the effectiveness of risk management, control, and governance processes.",
    guidelines: "Publicly listed companies are required by the BSEC Corporate Governance Guidelines to maintain an independent Internal Audit department reporting directly to the Board’s Audit Committee.",
    deadlines: "Unlike statutory audits, internal audits are continuous and year-round, with formal reports submitted to the Audit Committee on a quarterly basis.",
    rates: "Effective internal auditing saves companies millions by identifying revenue leakages, operational inefficiencies, and preemptively correcting compliance errors before external regulators find them.",
    documents: "Internal Audit Charter, Annual Risk-Based Audit Plan, Risk Control Matrices (RCM), and Internal Audit Exception Reports.",
    process: [
      "Risk Assessment: Identify high-risk financial and operational areas across the business.",
      "Testing: Sample transactions to test the operational effectiveness of internal controls.",
      "Reporting: Draft findings, outlining specific risks and management action plans.",
      "Follow-up: Track whether management has successfully implemented the recommended corrective actions."
    ],
    penalties: "Weak internal controls expose the company to massive internal fraud, embezzlement, and catastrophic regulatory fines when external audits eventually uncover the unmanaged issues."
  },
  {
    id: 41,
    title: "Compliance Reporting",
    category: "Finance & Accounting",
    intro: "Corporate entities must systematically report to various regulatory bodies to maintain their licenses to operate. Compliance reporting consolidates financial, operational, and legal data for state oversight.",
    guidelines: "Dictated by multiple overlapping bodies: RJSC (Companies Act), Bangladesh Bank (Foreign Exchange Guidelines), BIDA, BSEC, and sector-specific regulators (e.g., BTRC).",
    deadlines: "Highly fragmented. RJSC Annual Returns are due within 21 days of AGM. Bangladesh Bank 18B reports for foreign branches are due 30 days post-quarter.",
    rates: "Filing fees are generally nominal if done on time. The true cost to the business lies in maintaining specialized compliance personnel and systems to track these metrics.",
    documents: "Schedule X for RJSC, Section 18B reports for Bangladesh Bank, and quarterly corporate governance compliance certificates for the BSEC.",
    process: [
      "Monitoring: Track all upcoming statutory deadlines via rigid corporate compliance calendars.",
      "Data Collation: Gather required financial and legal data from relevant operational departments.",
      "Review: The Legal/Company Secretary team extensively reviews reports for absolute accuracy.",
      "Submission: File electronically or physically with the respective regulatory portal on time."
    ],
    penalties: "Failure to submit compliance reports results in devastating consequences: frozen bank accounts (Bangladesh Bank), revoked operational licenses (BIDA), or forced liquidation proceedings (RJSC)."
  },
  {
    id: 42,
    title: "Payroll Processing & HR",
    category: "Human Capital & Labour Law",
    intro: "Payroll in Bangladesh extends far beyond simple salary disbursement; it is a critical nexus of tax compliance and stringent labor rights. Errors in payroll processing not only anger employees but directly violate laws enforced by the Department of Inspection for Factories and Establishments (DIFE).",
    guidelines: "Payroll is heavily governed by the Bangladesh Labour Act (BLA), 2006 (specifically the Payment of Wages chapter), and the Income Tax Act (ITA), 2023, which mandates the deduction of taxes at source. The law requires utmost transparency in how wages are calculated and disbursed.",
    deadlines: "Wages must be disbursed within exactly 7 working days of the end of the wage period (typically the end of the month). Additionally, Tax Deducted at Source (TDS) from employee salaries must be deposited to the government treasury within 2 weeks of the deduction.",
    rates: "Minimum wages are strictly enforced by sector (e.g., the current minimum for RMG workers is BDT 12,500/month). The BLA mandates a specific salary structure: the 'Basic Wage' must constitute at least 50% to 60% of the Gross Salary, ensuring benefits like gratuity are calculated fairly.",
    documents: "Mandatory statutory documents include Form 8 (Workers Register), a detailed Wage Register outlining all allowances and deductions, individual Pay slips for every worker, and treasury A-Challans proving the deposit of TDS.",
    process: [
      "Data Consolidation: HR consolidates daily attendance, approved leave, and overtime hours from the factory floor.",
      "Gross Calculation: Gross wages are calculated ensuring strict adherence to gazetted sector minimums.",
      "Deductions: Statutory deductions (TDS, Provident Fund contributions) are subtracted to find the net pay.",
      "Disbursement: Net pay is disbursed, increasingly mandated via bank transfer or Mobile Financial Services (MFS)."
    ],
    penalties: "Underpaying minimum wage or delaying payment beyond the 7th day empowers workers to file cases in the Labour Court, leading to back-pay orders and heavy fines."
  },
  {
    id: 43,
    title: "Employee Management & Terminations",
    category: "Human Capital & Labour Law",
    intro: "The entire lifecycle of an employee, from recruitment to termination, must be meticulously documented. In a highly protective labor environment, informal hiring and firing practices are the leading cause of costly corporate litigation in the Labour Courts.",
    guidelines: "The BLA 2006 and BLR 2015 comprehensively dictate hiring protocols, maximum probation limits, and the exact procedures for resignation, retrenchment, and disciplinary termination. The law heavily favors documented evidence over verbal agreements.",
    deadlines: "Service Books must be opened within 15 days of a worker's appointment. For regular termination (without fault), a permanent worker must be given 120 days' written notice (or 120 days' pay in lieu of notice).",
    rates: "Statutory severance is high. A worker resigning after 5 years receives 14-30 days' basic wage per year of service. Retrenchment guarantees 30 days' basic wage for every completed year of service.",
    documents: "Essential onboarding documents include the formal Appointment Letter detailing the probationary period, Form 6 (Employee ID Card), and Form 7 (The statutory Service Book).",
    process: [
      "Onboarding: The employee is hired and issued a legally compliant Appointment Letter.",
      "Documentation: Upon confirmation, the Service Book is continuously maintained.",
      "Discipline: Termination for 'misconduct' bypasses severance pay but requires a rigorous legal process: issuing a formal show-cause notice and conducting an independent domestic inquiry."
    ],
    penalties: "Summarily firing an employee without following the 120-day notice rule or the strict domestic inquiry procedure constitutes 'unlawful termination'. Labour Courts routinely order immediate reinstatement with full back pay."
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
  const id1 = uniqueUnsplashIds[index % uniqueUnsplashIds.length];
  const id2 = uniqueUnsplashIds[(index + 7) % uniqueUnsplashIds.length];
  const id3 = uniqueUnsplashIds[(index + 14) % uniqueUnsplashIds.length];

  return {
    ...post,
    title: post.title.replace(/^\d+\.\s*/, ''),
    images: [
      `https://images.unsplash.com/photo-${id1}?auto=format&fit=crop&q=80&w=800`,
      `https://images.unsplash.com/photo-${id2}?auto=format&fit=crop&q=80&w=800`,
      `https://images.unsplash.com/photo-${id3}?auto=format&fit=crop&q=80&w=800`
    ],
    author: authors[index % authors.length],
    date: dates[index % dates.length] || "February 20, 2026",
    readTime: `${Math.floor(Math.random() * 3) + 4} min read`,
    tags: ["Bangladesh Law", post.category.split(' ')[0], "Compliance"]
  };
});
