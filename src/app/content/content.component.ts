import { Component, OnInit, Renderer2, } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  LPXInfo: any[] = [];

  static LPXData: any[] = [];

  myData =
    [
      { "data": "dnContact_USD_GPE-7B_American Honda Master Retirement Trust_Mr. Mike Chang (mike_chang@ahm.honda.com)_15345" },
      { "data": "dnContact_USD_GPE-8B_American Honda Master Retirement Trust_Mr. Mike Chang (mike_chang@ahm.honda.com)_15345" },
      { "data": "dnContact_USD_GPE-9_American Honda Master Retirement Trust_Mr. Mike Chang (mike_chang@ahm.honda.com)_15345" },
      { "data": "dnContact_EUR_GPE-9F_ARIA Co. Pty Ltd as Trustee for PSS CSS Investments Trust_Mr. Glenn Riley (glenn.riley@csc.gov.au)_20067" },
      { "data": "dnContact_EUR_GPE-9F_Arkitekternes Pensionskasse_Ms Charlotte Antonsen Dalgas (CAD@sampension.dk)_27639" },
      { "data": "dnContact_USD_GPE-7C_Board of Fire and Police Pension Commissioners of the City of Los Angeles_Mr. Tom Lopez (tom.lopez@lafpp.com)_14326" },
      { "data": "dnContact_USD_GPE-8 B2_Board of Fire and Police Pension Commissioners of the City of Los Angeles_Mr. Tom Lopez (tom.lopez@lafpp.com)_14326" },
      { "data": "dnContact_USD_GPE-9_Board of Fire and Police Pension Commissioners of the City of Los Angeles_Mr. Tom Lopez (tom.lopez@lafpp.com)_14326" },
      { "data": "dnContact_USD_GPE-7E_Board of Trustees of Michigan State University_Ms. Karine Akopov CPA (akopovka@msu.edu)_26264" },
      { "data": "dnContact_USD_GPE-8B_Board of Trustees of Michigan State University_Ms. Karine Akopov CPA (akopovka@msu.edu)_26264" },
      { "data": "dnContact_USD_GPE-9_Board of Trustees of Michigan State University_Ms. Karine Akopov CPA (akopovka@msu.edu)_26264" },
      { "data": "dnContact_USD_GPE-9G_Bonyan Investments Limited_Ms. Lorna Kennedy (WM_Rhone_Team@ntrs.com)_27830" },
      { "data": "dnContact_USD_GPE-5_California Institute of Technology_Mr. Kirk Kawasawa CPA (kirk.kawasawa@caltech.edu)_11124" },
      { "data": "dnContact_USD_GPE-6A_California Institute of Technology_Mr. Kirk Kawasawa CPA (kirk.kawasawa@caltech.edu)_11124" },
      { "data": "dnContact_USD_GPE-7B_California Institute of Technology_Mr. Kirk Kawasawa CPA (kirk.kawasawa@caltech.edu)_11124" },
      { "data": "dnContact_USD_GPE-8 B2_California Institute of Technology_Mr. Kirk Kawasawa CPA (kirk.kawasawa@caltech.edu)_11124" },
      { "data": "dnContact_USD_GPE-9_California Institute of Technology_Mr. Kirk Kawasawa CPA (kirk.kawasawa@caltech.edu)_11124" },
      { "data": "dnContact_USD_LAPEF-7C_Children's Investment Fund Foundation dba Big Win Philanthropy_Nike Admin - CA Associates (nikeadmin@cambridgeassociates.com)_28721" },
      { "data": "dnContact_USD_GPE-8B_Colgate University_Investments General Staff Colgate University (investments@colgate.edu)_21925" },
      { "data": "dnContact_USD_GPE-8B_Concordia Retirement Plan_Concordia HarbourVest (concordia@harbourvest.com)_21973" },
      { "data": "dnContact_EUR_GPE-9F_Concordia Retirement Plan_Concordia HarbourVest (concordia@harbourvest.com)_21973" },
      { "data": "dnContact_USD_Tech_Concordia Retirement Plan_Concordia HarbourVest (concordia@harbourvest.com)_21973" },
      { "data": "dnContact_USD_GPE-7B_DePauw University_Mr. Robert R Leonard (investments@depauw.edu)_25460" },
      { "data": "dnContact_USD_LAPEF-6C_District of Columbia Retirement Board_Ms. Sheila Morgan-Johnson (sheila.morgan-johnson@dc.gov)_19549" },
      { "data": "dnContact_USD_LAPEF-7_District of Columbia Retirement Board_Ms. Sheila Morgan-Johnson (sheila.morgan-johnson@dc.gov)_19549" },
      { "data": "dnContact_EUR_GPE-6_DMGT Pension Investment Trustees Limited_Mr. Giustino Palazzetti (giustino.palazzetti@dmgt.com)_19214" },
      { "data": "dnContact_EUR_GPE-7_DMGT Pension Investment Trustees Limited_Mr. Giustino Palazzetti (giustino.palazzetti@dmgt.com)_19214" },
      { "data": "dnContact_USD_LAPEF-6H_DMGT Pension Investment Trustees Limited_Mr. Giustino Palazzetti (giustino.palazzetti@dmgt.com)_19214" },
      { "data": "dnContact_USD_GPE-5A_Dow Employees' Pension Plan Trust_Ms. Wanda L Bowrin (faltinv@dow.com)_19638" },
      { "data": "dnContact_USD_GPE-7B_Dow Employees' Pension Plan Trust_Ms. Wanda L Bowrin (faltinv@dow.com)_19638" },
      { "data": "dnContact_USD_GPE-8B_Dow Employees' Pension Plan Trust_Ms. Wanda L Bowrin (faltinv@dow.com)_19638" },
      { "data": "dnContact_USD_GPE-9C_Dow Employees' Pension Plan Trust_Ms. Wanda L Bowrin (faltinv@dow.com)_19638" },
      { "data": "dnContact_USD_LAPEF-6_Dow Employees' Pension Plan Trust_Ms. Wanda L Bowrin (faltinv@dow.com)_19638" },
      { "data": "dnContact_USD_GPE-8B_Employees' Retirement Fund of the City of Fort Worth d.b.a. Fort Worth Employees' Retirement Fund_Mr. Daniel McCarthy (dmccarthy@hamiltonlane.com)_17751" },
      { "data": "dnContact_USD_GPE-9_Employees' Retirement Fund of the City of Fort Worth d.b.a. Fort Worth Employees' Retirement Fund_Mr. Daniel McCarthy (dmccarthy@hamiltonlane.com)_17751" },
      { "data": "dnContact_USD_GPE-9_GHR Foundation_Mr. Jason Matz (jmatz@ghrfoundation.org)_26794" },
      { "data": "dnContact_USD_GPE-8B_Goldstar Limited_Mr. David Auckland (David.Auckland@saidholdings.com)_28185" },
      { "data": "dnContact_USD_GPE-9_Goldstar Limited_Mr. David Auckland (David.Auckland@saidholdings.com)_28185" },
      { "data": "dnContact_USD_GPE-8G_Green Leaf Investment Holdings Sole Proprietorship LLC_Mr. Andre Forsterling (Andre.Forsterling@gpssa.gov.ae)_22784" },
      { "data": "dnContact_USD_GPE-9G_Green Leaf Investment Holdings Sole Proprietorship LLC_Mr. Andre Forsterling (Andre.Forsterling@gpssa.gov.ae)_22784" },
      { "data": "dnContact_USD_Tech-B_Green Leaf Investment Holdings Sole Proprietorship LLC_Mr. Andre Forsterling (Andre.Forsterling@gpssa.gov.ae)_22784" },
      { "data": "dnContact_EUR_GPE-9F_HarbourVest 2018 Global AIF L.P._Ms. Julie Eiermann (analytics@harbourvest.com)_11493" },
      { "data": "dnContact_USD_Tech_HarbourVest 2018 Global AIF L.P._Ms. Julie Eiermann (analytics@harbourvest.com)_11493" },
      { "data": "dnContact_EUR_GPE-9F_HarbourVest 2018 Global Fund L.P._Ms. Julie Eiermann (analytics@harbourvest.com)_11493" },
      { "data": "dnContact_USD_Tech_HarbourVest 2018 Global Fund L.P._Ms. Julie Eiermann (analytics@harbourvest.com)_11493" },
      { "data": "dnContact_EUR_GPE-9F_HarbourVest Braemar Fund L.P._Ms. Julie Eiermann (analytics@harbourvest.com)_11493" },
      { "data": "dnContact_USD_Tech_HarbourVest Braemar Fund L.P._Ms. Julie Eiermann (analytics@harbourvest.com)_11493" },
      { "data": "dnContact_EUR_GPE-9F_HarbourVest Lungo III Fund SCS_Ms. Julie Eiermann (analytics@harbourvest.com)_11493" },
      { "data": "dnContact_USD_Tech_HarbourVest Lungo III Fund SCS_Ms. Julie Eiermann (analytics@harbourvest.com)_11493" },
      { "data": "dnContact_EUR_GPE-9F_HarbourVest New Street L.P._Ms. Julie Eiermann (analytics@harbourvest.com)_11493" },
      { "data": "dnContact_USD_Tech_HarbourVest New Street L.P._Ms. Julie Eiermann (analytics@harbourvest.com)_11493" },
      { "data": "dnContact_EUR_GPE-9F_HarbourVest Reynolds Fund I L.P._Ms. Julie Eiermann (analytics@harbourvest.com)_11493" },
      { "data": "dnContact_USD_Tech_HarbourVest Reynolds Fund I L.P._Ms. Julie Eiermann (analytics@harbourvest.com)_11493" },
      { "data": "dnContact_EUR_GPE-9F_HIPEP VIII Partnership AIF L.P._Ms. Julie Eiermann (analytics@harbourvest.com)_11493" },
      { "data": "dnContact_USD_Tech_HIPEP VIII Partnership AIF L.P._Ms. Julie Eiermann (analytics@harbourvest.com)_11493" },
      { "data": "dnContact_EUR_GPE-9F_HIPEP VIII Partnership Fund L.P._Ms. Julie Eiermann (analytics@harbourvest.com)_11493" },
      { "data": "dnContact_USD_Tech_HIPEP VIII Partnership Fund L.P._Ms. Julie Eiermann (analytics@harbourvest.com)_11493" },
      { "data": "dnContact_EUR_ACEE-4_IBM Personal Pension Plan Trust_Mr. John Picone (jpicone@us.ibm.com)_11558" },
      { "data": "dnContact_EUR_GPE-6_IBM Personal Pension Plan Trust_Mr. John Picone (jpicone@us.ibm.com)_11558" },
      { "data": "dnContact_USD_GPE-7B_IBM Personal Pension Plan Trust_Mr. John Picone (jpicone@us.ibm.com)_11558" },
      { "data": "dnContact_USD_GPE-8B_IBM Personal Pension Plan Trust_Mr. John Picone (jpicone@us.ibm.com)_11558" },
      { "data": "dnContact_EUR_GPE-6_IBM United Kingdom Pensions Trust Limited as Corporate Trustee of the IBM Pension Plan_Ms. Jo Hill (jo_hill@uk.ibm.com)_22405" },
      { "data": "dnContact_USD_GPE-7E_IBM United Kingdom Pensions Trust Limited as Corporate Trustee of the IBM Pension Plan_Ms. Jo Hill (jo_hill@uk.ibm.com)_22405" },
      { "data": "dnContact_EUR_GPE-8A_IBM United Kingdom Pensions Trust Limited as Corporate Trustee of the IBM Pension Plan_Ms. Jo Hill (jo_hill@uk.ibm.com)_22405" },
      { "data": "dnContact_USD_GPE-6A_Illinois State Board of Investment_Ms. Johara Farhadieh (jfarhadieh@isbinvestment.com)_22551" },
      { "data": "dnContact_USD_GPE-7B_Jaguar Land Rover Pension Trustees Limited as trustee of the Jaguar Pension Plan_Mr. Noel Grant (noel.grant@willistowerswatson.com)_22531" },
      { "data": "dnContact_USD_GPE-7B_Jaguar Land Rover Pension Trustees Limited as trustee of the Land Rover Pension Scheme_Mr. Noel Grant (noel.grant@willistowerswatson.com)_22531" },
      { "data": "dnContact_USD_LAPEF-4F_John D. and Catherine T. MacArthur Foundation_Mr. Mark J Franke (mfranke@macfound.org)_11612" },
      { "data": "dnContact_EUR_GPE-8A_Lepton Fund Ltd. - Class Y_Mr. Edson Fujimori (operations@bwgi.com.br)_22133" },
      { "data": "dnContact_USD_GPE-9G_Lepton Fund Ltd. - Class Y_Mr. Edson Fujimori (operations@bwgi.com.br)_22133" },
      { "data": "dnContact_USD_GPE-7B_Lockheed Martin Corporation Master Retirement Trust_Mr. Scott Jacobsen CFA (scott.m.jacobsen@lmco.com)_22836" },
      { "data": "dnContact_USD_GPE-8 B3_Lockheed Martin Corporation Master Retirement Trust_Mr. Scott Jacobsen CFA (scott.m.jacobsen@lmco.com)_22836" },
      { "data": "dnContact_USD_GPE-9_Lockheed Martin Corporation Master Retirement Trust_Mr. Scott Jacobsen CFA (scott.m.jacobsen@lmco.com)_22836" },
      { "data": "dnContact_USD_Tech_Lockheed Martin Corporation Master Retirement Trust_Mr. Scott Jacobsen CFA (scott.m.jacobsen@lmco.com)_22836" },
      { "data": "dnContact_USD_GPE-8B_London Borough of Barking and Dagenham as the Administering Authority of the London Borough of Barking and Dagenham Superannuation Fund_Mr. Alan Gauld (alan.gauld@aberdeen-asset.com)_19675" },
      { "data": "dnContact_USD_GPE-9D_London Borough of Barking and Dagenham as the Administering Authority of the London Borough of Barking and Dagenham Superannuation Fund_Mr. Alan Gauld (alan.gauld@aberdeen-asset.com)_19675" },
      { "data": "dnContact_USD_GPE-8C_Marsh & McLennan Master Retirement Trust_Mr. Stanislav Nokhrin (stanislav.nokhrin@mmc.com)_22440" },
      { "data": "dnContact_USD_GPE-9_Marsh & McLennan Master Retirement Trust_Mr. Stanislav Nokhrin (stanislav.nokhrin@mmc.com)_22440" },
      { "data": "dnContact_USD_GPE-8C_McAuley Portfolio Management Company_Ms. Elizabeth Jourdan (Elizabeth.Jourdan@Mercy.Net)_23037" },
      { "data": "dnContact_USD_GPE-9C_McAuley Portfolio Management Company_Ms. Elizabeth Jourdan (Elizabeth.Jourdan@Mercy.Net)_23037" },
      { "data": "dnContact_USD_GPE-7B_MF Hope Venture III LLC_Mr. Eric F Achepohl (eachepohl@benida.com)_14132" },
      { "data": "dnContact_USD_GPE-8B_MF Hope Venture IV LLC_Mr. Eric F Achepohl (eachepohl@benida.com)_14132" },
      { "data": "dnContact_USD_GPE-9_MF Hope Venture VI  LLC_Mr. Eric F Achepohl (eachepohl@benida.com)_14132" },
      { "data": "dnContact_USD_GPE-8B_Modern Woodmen of America Employees' Retirement Plan_Ms. Beth E McDermott CFA, CAIA (beth.mcdermott@modern-woodmen.org)_22056" },
      { "data": "dnContact_USD_GPE-9_Modern Woodmen of America Employees' Retirement Plan_Ms. Beth E McDermott CFA, CAIA (beth.mcdermott@modern-woodmen.org)_22056" },
      { "data": "dnContact_EUR_ACEE-4_National Railroad Retirement Investment Trust_Mr. Michael A Reeves (mreeves@nrrit.com)_11829" },
      { "data": "dnContact_USD_GPE-6A_National Railroad Retirement Investment Trust_Mr. Michael A Reeves (mreeves@nrrit.com)_11829" },
      { "data": "dnContact_USD_GPE-7E_National Railroad Retirement Investment Trust_Mr. Michael A Reeves (mreeves@nrrit.com)_11829" },
      { "data": "dnContact_USD_GPE-8B_National Railroad Retirement Investment Trust_Mr. Michael A Reeves (mreeves@nrrit.com)_11829" },
      { "data": "dnContact_USD_GPE-9_National Railroad Retirement Investment Trust_Mr. Michael A Reeves (mreeves@nrrit.com)_11829" },
      { "data": "dnContact_USD_GPE-8C_National University of Singapore_Ms. Ho Li Fung (ivohlf@nus.edu.sg)_22067" },
      { "data": "dnContact_USD_GPE-9C_National University of Singapore_Ms. Ho Li Fung (ivohlf@nus.edu.sg)_22067" },
      { "data": "dnContact_USD_GPE-7B_New York State Nurses Association Pension Plan_Ms. Araceli Avalos (corplp@notes.ntrs.com)_14163" },
      { "data": "dnContact_USD_GPE-7B_New York State Nurses Association Pension Plan_Ms. Carmen Lopez (corplp@notes.ntrs.com)_14162" },
      { "data": "dnContact_USD_GPE-7B_New York State Nurses Association Pension Plan_Monitoring Department Pathway Capital (monitoring@pathwaycapital.com)_14045" },
      { "data": "dnContact_USD_GPE-7B_New York State Nurses Association Pension Plan_Mr. Russ Nieme (privateinvestments@rnbenefits.org)_14158" },
      { "data": "dnContact_USD_GPE-7B_New York State Nurses Association Pension Plan_Ms. Eileen Schwartzbach (privateinvestments@rnbenefits.org)_14161" },
      { "data": "dnContact_USD_GPE-8 B3_New York State Nurses Association Pension Plan_Ms. Araceli Avalos (corplp@notes.ntrs.com)_14163" },
      { "data": "dnContact_USD_GPE-8 B3_New York State Nurses Association Pension Plan_Ms. Carmen Lopez (corplp@notes.ntrs.com)_14162" },
      { "data": "dnContact_USD_GPE-8 B3_New York State Nurses Association Pension Plan_Monitoring Department Pathway Capital (monitoring@pathwaycapital.com)_14045" },
      { "data": "dnContact_USD_GPE-8 B3_New York State Nurses Association Pension Plan_Mr. Russ Nieme (privateinvestments@rnbenefits.org)_14158" },
      { "data": "dnContact_USD_GPE-8 B3_New York State Nurses Association Pension Plan_Ms. Eileen Schwartzbach (privateinvestments@rnbenefits.org)_14161" },
      { "data": "dnContact_USD_GPE-9_New York State Nurses Association Pension Plan_Ms. Araceli Avalos (corplp@notes.ntrs.com)_14163" },
      { "data": "dnContact_USD_GPE-9_New York State Nurses Association Pension Plan_Ms. Carmen Lopez (corplp@notes.ntrs.com)_14162" },
      { "data": "dnContact_USD_GPE-9_New York State Nurses Association Pension Plan_Monitoring Department Pathway Capital (monitoring@pathwaycapital.com)_14045" },
      { "data": "dnContact_USD_GPE-9_New York State Nurses Association Pension Plan_Mr. Russ Nieme (privateinvestments@rnbenefits.org)_14158" },
      { "data": "dnContact_USD_GPE-9_New York State Nurses Association Pension Plan_Ms. Eileen Schwartzbach (privateinvestments@rnbenefits.org)_14161" },
      { "data": "dnContact_USD_GPE-9G_Norastars Ltd_Ms. Lorna Kennedy (WM_Rhone_Team@ntrs.com)_27830" },
      { "data": "dnContact_USD_LAPEF-4E_Nuclear Electric Insurance Limited_Mr. Gregory J. Blackburn CFA (gblackburn@myneil.com)_11906" },
      { "data": "dnContact_EUR_GPE-9F_Pensionskassen for Jordbrugsakademikere og Dyrlæger_Ms Charlotte Antonsen Dalgas (CAD@sampension.dk)_27639" },
      { "data": "dnContact_EUR_GPE-9F_Pensionskassen for teknikum- og diplomingeniører_Ms Charlotte Antonsen Dalgas (CAD@sampension.dk)_27639" },
      { "data": "dnContact_USD_LAPEF-3F_Private Syndicate Pty Ltd, Ttee. of the Alt. Inv. Pvt. Syn._Mr. Stephen Milburn-Pyle (stephen.milburn-pyle@auspost.com.au)_10969" },
      { "data": "dnContact_USD_GPE-9I_Public Pension Agency_RIC Investments Operations Team (investment_operations@ric.sa)_28422" },
      { "data": "dnContact_USD_Tech-B_Public Pension Agency_RIC Investments Operations Team (investment_operations@ric.sa)_28422" },
      { "data": "dnContact_USD_GPE-8C_Retirement Plan for Employees of Rady Children’s Hospital and Health Center_Mr. Mark van den Herik (mvandenherik@rchsd.org)_21864" },
      { "data": "dnContact_EUR_GPE-7A_Robusta Private Equity Fund of Funds II_Ms. Julie Eiermann (analytics@harbourvest.com)_11493" },
      { "data": "dnContact_EUR_GPE-9F_Sampension Livsforsikring A/S_Ms Charlotte Antonsen Dalgas (CAD@sampension.dk)_27639" },
      { "data": "dnContact_EUR_GPE-5C_Sampension Private Equity K/S_Ms. Anja Bach Eriksson (alternatives@sampension.dk)_12119" },
      { "data": "dnContact_EUR_GPE-6_Sampension Private Equity K/S_Ms. Anja Bach Eriksson (alternatives@sampension.dk)_12119" },
      { "data": "dnContact_EUR_GPE-7_Sampension Private Equity K/S_Ms. Anja Bach Eriksson (alternatives@sampension.dk)_12119" },
      { "data": "dnContact_EUR_GPE-8_Sampension Private Equity K/S_Ms. Anja Bach Eriksson (alternatives@sampension.dk)_12119" },
      { "data": "dnContact_USD_LAPEF-4F_Sampension Private Equity K/S_Ms. Anja Bach Eriksson (alternatives@sampension.dk)_12119" },
      { "data": "dnContact_USD_GPE-7E_Sanabil Private Equity Investments Company_Mr. Turki Almalik (pe@sanabil.sa)_15010" },
      { "data": "dnContact_USD_GPE-9C_Sidley Austin Master Pension Trust by The Northern Trust Co., Directed Trustee of such Trust_Ms. Michelle A Potter (mpotter@sidley.com)_12164" },
      { "data": "dnContact_USD_LAPEF-4E_Sidley Austin Master Pension Trust by The Northern Trust Co., Directed Trustee of such Trust_Ms. Michelle A Potter (mpotter@sidley.com)_12164" },
      { "data": "dnContact_EUR_GPE-6_Stichting Pensioenfonds IBM Nederland_Mr. Pieter Martijn Winkelhagen (martijn.winkelhagen@spin.nl)_12284" },
      { "data": "dnContact_EUR_GPE-7_Stichting Pensioenfonds IBM Nederland_Mr. Pieter Martijn Winkelhagen (martijn.winkelhagen@spin.nl)_12284" },
      { "data": "dnContact_EUR_GPE-8_Stichting Pensioenfonds IBM Nederland_Mr. Pieter Martijn Winkelhagen (martijn.winkelhagen@spin.nl)_12284" },
      { "data": "dnContact_EUR_GPE-8A_Tameside Metropolitan Borough Council (as the Administering Authority of the Greater Manchester Pension Fund)_Mr. Neil Cooper (neil.cooper@gmpf.org.uk)_22117" },
      { "data": "dnContact_USD_GPE-5_The Andrew W. Mellon Foundation_Ms. Monica C Spencer (peinv@mellon.org)_12330" },
      { "data": "dnContact_EUR_GPE-6_The Andrew W. Mellon Foundation_Ms. Monica C Spencer (peinv@mellon.org)_12330" },
      { "data": "dnContact_EUR_GPE-7A_The Andrew W. Mellon Foundation_Ms. Monica C Spencer (peinv@mellon.org)_12330" },
      { "data": "dnContact_USD_GPE-8B_The Andrew W. Mellon Foundation_Ms. Monica C Spencer (peinv@mellon.org)_12330" },
      { "data": "dnContact_USD_GPE-9_The Andrew W. Mellon Foundation_Ms. Monica C Spencer (peinv@mellon.org)_12330" },
      { "data": "dnContact_EUR_GPE-6_The Northern Trust Company in its capacity as custodian for MRFF Investment Company No. 2 Pty Ltd_Private Equity Team (private.equity@futurefund.gov.au)_9061" },
      { "data": "dnContact_USD_GPE-6A_The Pennsylvania State University_Mr. David E Branigan (OIMinfo@psu.edu)_12397" },
      { "data": "dnContact_EUR_GPE-7A_The Trustees of the Bank of Ireland Staff Pensions Fund_Mr. Paul Droop (paul.droop@boi.com)_14035" },
      { "data": "dnContact_USD_GPE-8F_The United Nations on behalf of the United Nations Joint Staff Pension Fund_Ms. Tereza Hesounova Trivell (terezie.hesounova@unoim.org)_21841" },
      { "data": "dnContact_USD_GPE-8B_The University of Georgia Foundation_Ms. Christina Davis Moffett (cmoffett@uga.edu)_22165" },
      { "data": "dnContact_USD_GPE-9_The University of Georgia Foundation_Ms. Christina Davis Moffett (cmoffett@uga.edu)_22165" },
      { "data": "dnContact_USD_GPE-8B_The University of Maryland Foundation, Inc._Mr. Tanner Johnson (monitor@hamiltonlane.com)_22163" },
      { "data": "dnContact_USD_GPE-9C_The University of Maryland Foundation, Inc._Mr. Tanner Johnson (monitor@hamiltonlane.com)_22163" },
      { "data": "dnContact_USD_GPE-6A_Thorndale Farm Private Equity Fund 1, LLC_Mr. David Purcell CPA (dmove@thorndalefarm.com)_19574" },
      { "data": "dnContact_EUR_GPE-8A_Tredje AP-fonden_Mr. Bengt Hellström (bengt.hellstrom@ap3.se)_12442" },
      { "data": "dnContact_EUR_GPE-9A_Tredje AP-fonden_Mr. Bengt Hellström (bengt.hellstrom@ap3.se)_12442" },
      { "data": "dnContact_EUR_GPE-6_Trustee of the Towers Watson Pension Scheme_TWPS - UK Group (TWPSUK@willistowerswatson.com)_25599" },
      { "data": "dnContact_USD_GPE-5A_Union Carbide Employees' Pension Plan_Ms. Wanda L Bowrin (faltinv@dow.com)_19638" },
      { "data": "dnContact_USD_GPE-7B_Union Carbide Employees' Pension Plan_Ms. Wanda L Bowrin (faltinv@dow.com)_19638" },
      { "data": "dnContact_USD_GPE-8B_Union Carbide Employees' Pension Plan_Ms. Wanda L Bowrin (faltinv@dow.com)_19638" },
      { "data": "dnContact_USD_GPE-8B_University of Delaware_Mr. Keith M Walter CFA (kw@udel.edu)_22168" },
      { "data": "dnContact_USD_GPE-9_University of Delaware_Mr. Keith M Walter CFA (kw@udel.edu)_22168" },
      { "data": "dnContact_USD_GPE-8 B2_W. K. Kellogg Foundation Trust_Kellogg Team - NTRS (kelloggteam@ntrs.com)_24811" },
      { "data": "dnContact_USD_GPE-9C_W. K. Kellogg Foundation Trust_Kellogg Team - NTRS (kelloggteam@ntrs.com)_24811" },
      { "data": "dnContact_USD_GPE-7B_WGM Master Trust_Mr. Dennis D Foley (dennis.foley@weil.com)_14996" },
      { "data": "dnContact_USD_GPE-8 B2_WGM Master Trust_Mr. Dennis D Foley (dennis.foley@weil.com)_14996" },
      { "data": "dnContact_USD_GPE-9_WGM Master Trust_Mr. Dennis D Foley (dennis.foley@weil.com)_14996" },
      { "data": "dnContact_USD_Tech_WGM Master Trust_Mr. Dennis D Foley (dennis.foley@weil.com)_14996" },
      { "data": "dnContact_EUR_GPE-6_Whitbread Pension Trustees as Trustee of the Whitbread Group Pension Fund_Investment Team (investment@whitbread.com)_8989" },
      { "data": "dnContact_USD_GPE-7E_Whitbread Pension Trustees as Trustee of the Whitbread Group Pension Fund_Investment Team (investment@whitbread.com)_8989" }
    ];
  data: any;
  InvestorSelectedVal: any;
  InvestorDisabled: any;
  parentInvestor: boolean;
  FundSelectedIndex: any;
  addBtnClckd: any = null;
  FundSelected: any;
  ContactSelected: any;
  InvestorSelected: any;
  getSelectedInvestor: any;
  InvestorComp: boolean;
  FundComp: boolean;
  selectedRecIndex: number;
  duplicateRecIndex: number;
  getValue: string;
  addRec: any[] = [];
  removeBtnNotClckd: boolean;

  constructor(private getdata: DataService) { }

  ngOnInit(): void {

    $('#FundsDropdown').hide();
    $('#ContactsDropdown').hide();
    $('#AddButton').hide();
    $('#GroupsContainer').hide();
    $('#SubmitButton').hide();

    for (var i = 0; i < this.myData.length; i++) {
      var theText = this.myData[i].data;

      if (theText.startsWith("dnContact_")) {
        var investorName = theText.split("_")[3];

        investorName = investorName.replace(/[\r\n]+/gm, " ");

        var fundName = theText.split("_")[2];
        var fundCat = theText.split("_")[1];

        var start_pos = theText.split("_")[4];
        var x = theText.split('_', 4).join('_').length;

        var y = theText.lastIndexOf('_');
        var contName = theText.substring(x + 1, y);
        var contVal = theText.substring(y + 1, theText.length);

        this.LPXInfo.push({ Investor: investorName, FundCategory: fundCat, Fund: fundName, isDisabledFund: false, ContactVal: contVal, ContactName: contName });

      }

    }

    this.LPXInfo = this.LPXInfo.sort(function (a, b) { return a.Investor.localeCompare(b.Investor) });

    ContentComponent.LPXData = [...this.LPXInfo];

  }

  //AddButton click function
  //$("#AddButton").on("click",function(e){
  AddData1(val1: any): void {

    this.InvestorSelected = val1;

    this.InvestorComp = true;

  }

  AddData2(val2: any): void {

    this.FundSelected = val2;

    this.FundComp = true;

  }

  AddData3(val3: any): void {

    this.ContactSelected = val3;

  }

  Add(): void {

    //console.log(this.InvestorSelected);
    //console.log(this.FundSelected);
    //console.log(this.ContactSelected);
    
    $('#GroupsContainer').show();

      //Getting the index of desired record the array
      this.selectedRecIndex = ContentComponent.LPXData.findIndex(x => x.Investor == this.InvestorSelected && x.FundCategory == this.FundSelected.FundCat
        && x.Fund == this.FundSelected.FundVal && x.ContactVal == this.ContactSelected.ContactVal && x.ContactName == this.ContactSelected.ContactName);

      //Testing for duplicate record existence in the array
      this.duplicateRecIndex = this.addRec.findIndex(x => x.Investor == this.InvestorSelected
        && x.ContactVal == this.ContactSelected.ContactVal && x.ContactName == this.ContactSelected.ContactName);
      console.log(this.selectedRecIndex);
      console.log(this.duplicateRecIndex);

      //Taking the id of each class GroupDiv element in a variable
      //let getDivID = $('.GroupDiv').attr('id');
      //Testing for all the conditions
      //Testing for all the conditions
      if (this.selectedRecIndex >= 0) {

        if (this.duplicateRecIndex == -1) {

          if (this.FundSelected.FundCat == 'EUR') {

            //Taking the whole div to be appended into a variable
            this.getValue = '<div id="' + this.ContactSelected.ContactVal + '" class="GroupDiv"><div class="ContactDiv"><br><h3 style="color:blue;">' + this.ContactSelected.ContactName + '-' + this.ContactSelected.ContactVal + '</h3><div class="InvestorDiv"><h4>' + this.InvestorSelected + '</h4><div class="EURDiv"><h5>EUR FUNDS</h5><div class="EURFundvalues"><ul><li>' + this.FundSelected.FundVal + '</li></ul></div></div><div class="USDiv"><h5>USD FUNDS</h5><div class="USFundvalues"><ul><li></li></ul></div></div></div></div></div>';

            $('#GroupsContainer').append(this.getValue);

          }
          else {

            //Taking the whole div to be appended into a variable
            this.getValue = '<div id="' + this.ContactSelected.ContactVal + '" class="GroupDiv"><div class="ContactDiv"><br><h3 style="color:blue;">' + this.ContactSelected.ContactName + '-' + this.ContactSelected.ContactVal + '</h3><div class="InvestorDiv"><h4>' + this.InvestorSelected + '</h4><div class="EURDiv"><h5>EUR FUNDS</h5><div class="EURFundvalues"><ul><li></li></ul></div></div><div class="USDiv"><h5>USD FUNDS</h5><div class="USFundvalues"><ul><li>' + this.FundSelected.FundVal + '</li></ul></div></div></div></div></div>';

            $('#GroupsContainer').append(this.getValue);

          }

        } else {

          if (this.FundSelected.FundCat == 'EUR') {
            //Appending the required fundvalue to the exact div id
            $('#' + this.ContactSelected.ContactVal).find('.EURFundvalues>ul').append('<li>' + this.FundSelected.FundVal + '</li>');

          }
          else {

            //Appending the required fundvalue to the exact div id
            $('#' + this.ContactSelected.ContactVal).find('.USFundvalues>ul').append('<li>' + this.FundSelected.FundVal + '</li>');
          }

        }

        //Pushing the record values of the array pointing to the specific index into another empty array.
        this.addRec.push(ContentComponent.LPXData[this.selectedRecIndex]);

      }

      this.parentInvestor = true;

      for (let i = 0; i < ContentComponent.LPXData.length; i++) {

        if (ContentComponent.LPXData[i].Fund == this.FundSelected.FundVal) {

          this.removeBtnNotClckd = true;
          this.addBtnClckd = true;

        }

      }

    }

  }

