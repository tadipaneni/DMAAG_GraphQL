// TroyTable.js
const { Entity, Column, PrimaryGeneratedColumn } = require('typeorm');

@Entity({ name: 'TROY', schema: 'DMAAG' })
class Troy {
  @PrimaryGeneratedColumn()
  id;

  @Column({ type: 'varchar', nullable: true })
  rec_number;

  @Column({ type: 'varchar', nullable: true })
  source_pg;

  @Column({ type: 'varchar', nullable: true })
  source_fr;

  @Column({ type: 'varchar', nullable: true })
  enslaved_name;

  @Column({ type: 'varchar', nullable: true })
  enslaved_transrole;

  @Column({ type: 'varchar', nullable: true })
  enslaved_color;

  @Column({ type: 'varchar', nullable: true })
  enslaved_genagedesc;

  @Column({ type: 'varchar', nullable: true })
  enslaved_age;

  @Column({ type: 'varchar', nullable: true })
  enslaved_decage;

  @Column({ type: 'varchar', nullable: true })
  enslaved_est_birth;

  @Column({ type: 'varchar', nullable: true })
  enslaved_est_death;

  @Column({ type: 'varchar', nullable: true })
  enslaved_occ;

  @Column({ type: 'varchar', nullable: true })
  enslaved_health;

  @Column({ type: 'varchar', nullable: true })
  enslaved_unckchild;

  @Column({ type: 'varchar', nullable: true })
  enslaved_famno;

  @Column({ type: 'varchar', nullable: true })
  enslaved_famrel;

  @Column({ type: 'varchar', nullable: true })
  enslaver_business;

  @Column({ type: 'varchar', nullable: true })
  enslaver_businessrole;

  @Column({ type: 'varchar', nullable: true })
  enslaver_businessloc;

  @Column({ type: 'varchar', nullable: true })
  enslaver1_name;

  @Column({ type: 'varchar', nullable: true })
  enslaver1_trans_role;

  @Column({ type: 'varchar', nullable: true })
  enslaver1_loc;

  @Column({ type: 'varchar', nullable: true })
  enslaver2_name;

  @Column({ type: 'varchar', nullable: true })
  enslaver2_trans_role;

  @Column({ type: 'varchar', nullable: true })
  enslaver2_loc;

  @Column({ type: 'varchar', nullable: true })
  enslaver3_name;

  @Column({ type: 'varchar', nullable: true })
  enslaver3_trans_role;

  @Column({ type: 'varchar', nullable: true })
  enslaver3_loc;

  @Column({ type: 'varchar', nullable: true })
  enslaver4_name;

  @Column({ type: 'varchar', nullable: true })
  enslaver4_trans_role;

  @Column({ type: 'varchar', nullable: true })
  enslaver4_loc;

  @Column({ type: 'varchar', nullable: true })
  enslaver5_name;

  @Column({ type: 'varchar', nullable: true })
  enslaver5_trans_role;

  @Column({ type: 'varchar', nullable: true })
  enslaver5_loc;

  @Column({ type: 'varchar', nullable: true })
  enslaver6_name;

  @Column({ type: 'varchar', nullable: true })
  enslaver6_trans_role;

  @Column({ type: 'varchar', nullable: true })
  enslaver6_loc;

  @Column({ type: 'varchar', nullable: true })
  enslaver7_name;

  @Column({ type: 'varchar', nullable: true })
  enslaver7_trans_role;

  @Column({ type: 'varchar', nullable: true })
  enslaver7_loc;

  @Column({ type: 'varchar', nullable: true })
  trans_id;

  @Column({ type: 'varchar', nullable: true })
  trans_loc;

  @Column({ type: 'varchar', nullable: true })
  trans_type;

  @Column({ type: 'varchar', nullable: true })
  trans_record_date;

  @Column({ type: 'varchar', nullable: true })
  trans_begin_date;

  @Column({ type: 'varchar', nullable: true })
  trans_end_date;

  @Column({ type: 'varchar', nullable: true })
  transindv_value;

  @Column({ type: 'varchar', nullable: true })
  transgrp_value;

  @Column({ type: 'varchar', nullable: true })
  source_author;

  @Column({ type: 'varchar', nullable: true })
  source_title;

  @Column({ type: 'varchar', nullable: true })
  source_loc;

  @Column({ type: 'varchar', nullable: true })
  source_film_no;

  @Column({ type: 'varchar', nullable: true })
  url;

  @Column({ type: 'varchar', nullable: true })
  extractor;

  @Column({ type: 'varchar', nullable: true })
  url_1;

  @Column({ type: 'varchar', nullable: true })
  notes;
}

module.exports = Troy;
