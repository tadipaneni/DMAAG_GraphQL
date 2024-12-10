// resolvers.js
const resolvers = {
    Query: {
      gsuRecords: async (_, { searchTerm, state, county, limit = 10, offset = 0 }, { AppDataSource }) => {
        try {
          let query = 'SELECT * FROM "DMAAG"."GSU" WHERE 1=1';
          const params = [];
          
          if (searchTerm) {
            query += ` AND (
              COALESCE(seller_firstname, '') || ' ' || COALESCE(seller_lastname, '') ILIKE $${params.length + 1} OR
              COALESCE(buyer_firstname, '') || ' ' || COALESCE(buyer_lastname, '') ILIKE $${params.length + 1} OR
              COALESCE(deed_county, '') ILIKE $${params.length + 1}
            )`;
            params.push(`%${searchTerm}%`);
          }
  
          if (state) {
            query += ` AND deed_state = $${params.length + 1}`;
            params.push(state);
          }
  
          if (county) {
            query += ` AND deed_county = $${params.length + 1}`;
            params.push(county);
          }
  
          query += ` ORDER BY deed_date DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`;
          params.push(limit, offset);
  
          const result = await AppDataSource.query(query, params);
          return result;
        } catch (error) {
          console.error('Error fetching GSU records:', error);
          throw error;
        }
      },
  
      troyRecords: async (_, { searchTerm, enslaved_name, enslaver_name, trans_loc, limit = 10, offset = 0 }, { AppDataSource }) => {
        try {
          let query = 'SELECT * FROM "DMAAG"."TROY" WHERE 1=1';
          const params = [];
  
          if (searchTerm) {
            query += ` AND (
              COALESCE(enslaved_name, '') ILIKE $${params.length + 1} OR
              COALESCE(enslaver1_name, '') ILIKE $${params.length + 1} OR
              COALESCE(trans_loc, '') ILIKE $${params.length + 1}
            )`;
            params.push(`%${searchTerm}%`);
          }
  
          if (enslaved_name) {
            query += ` AND enslaved_name ILIKE $${params.length + 1}`;
            params.push(`%${enslaved_name}%`);
          }
  
          if (enslaver_name) {
            query += ` AND (
              enslaver1_name ILIKE $${params.length + 1} OR
              enslaver2_name ILIKE $${params.length + 1} OR
              enslaver3_name ILIKE $${params.length + 1} OR
              enslaver4_name ILIKE $${params.length + 1} OR
              enslaver5_name ILIKE $${params.length + 1} OR
              enslaver6_name ILIKE $${params.length + 1} OR
              enslaver7_name ILIKE $${params.length + 1}
            )`;
            params.push(`%${enslaver_name}%`);
          }
  
          if (trans_loc) {
            query += ` AND trans_loc ILIKE $${params.length + 1}`;
            params.push(`%${trans_loc}%`);
          }
  
          query += ` ORDER BY trans_record_date DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`;
          params.push(limit, offset);
  
          const result = await AppDataSource.query(query, params);
          return result;
        } catch (error) {
          console.error('Error fetching Troy records:', error);
          throw error;
        }
      }
    }
  };
  
  module.exports = { resolvers };