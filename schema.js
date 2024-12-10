// schema.js
const { gql } = require('apollo-server');

const typeDefs = gql`
  type GsuRecord {
    Timestamp: String
    Email_Address: String
    deed_state: String
    deed_county: String
    deed_date: String
    seller_firstname: String
    seller_lastname: String
    seller_county: String
    seller_state: String
    seller_administrator_guardian: String
    seller_administrator_guardian_firstname: String
    seller_administrator_guardian_lastname: String
    buyer_firstname: String
    buyer_lastname: String
    buyer_county: String
    buyer_state: String
    buyer_amount: String
    buyer_purchased_county_district_lot: String
    number: String
    lotnumber_countysection: String
    buyerpurchased_acres: String
    deed_link: String
    Notes: String
  }

  type TroyRecord {
    rec_number: String
    source_pg: String
    source_fr: String
    enslaved_name: String
    enslaved_transrole: String
    enslaved_color: String
    enslaved_genagedesc: String
    enslaved_age: String
    enslaved_decage: String
    enslaved_est_birth: String
    enslaved_est_death: String
    enslaved_occ: String
    enslaved_health: String
    enslaved_unkchild: String
    enslaved_famno: String
    enslaved_famrel: String
    enslaver_business: String
    enslaver_businessrole: String
    enslaver_businessloc: String
    enslaver1_name: String
    enslaver1_trans_role: String
    enslaver1_loc: String
    enslaver2_name: String
    enslaver2_trans_role: String
    enslaver2_loc: String
    enslaver3_name: String
    enslaver3_trans_role: String
    enslaver3_loc: String
    enslaver4_name: String
    enslaver4_trans_role: String
    enslaver4_loc: String
    enslaver5_name: String
    enslaver5_trans_role: String
    enslaver5_loc: String
    enslaver6_name: String
    enslaver6_trans_role: String
    enslaver6_loc: String
    enslaver7_name: String
    enslaver7_trans_role: String
    enslaver7_loc: String
    trans_id: String
    trans_loc: String
    trans_type: String
    trans_record_date: String
    trans_begin_date: String
    trans_end_date: String
    transindv_value: String
    transgrp_value: String
    source_author: String
    source_title: String
    source_loc: String
    source_film_no: String
    url: String
    extractor: String
    url_1: String
    notes: String
  }

  type Query {
    gsuRecords(
      searchTerm: String,
      state: String,
      county: String,
      limit: Int,
      offset: Int
    ): [GsuRecord]
    
    troyRecords(
      searchTerm: String,
      enslaved_name: String,
      enslaver_name: String,
      trans_loc: String,
      limit: Int,
      offset: Int
    ): [TroyRecord]
  }
`;

module.exports = { typeDefs };