const { Entity, Column, PrimaryGeneratedColumn } = require('typeorm');

@Entity({ name: 'GSU', schema: 'DMAAG' })
class Gsu {
  @PrimaryGeneratedColumn()
  id;

  @Column({ name: 'Timestamp' })
  timestamp;

  @Column({ name: 'Email_Address' })
  emailAddress;

  @Column({ name: 'deed_state' })
  deedState;

  @Column({ name: 'deed_county' })
  deedCounty;

  @Column({ name: 'deed_date' })
  deedDate;

  @Column({ name: 'seller_firstname' })
  sellerFirstName;

  @Column({ name: 'seller_lastname' })
  sellerLastName;

  @Column({ name: 'seller_county' })
  sellerCounty;

  @Column({ name: 'seller_state' })
  sellerState;

  @Column({ name: 'seller_administrator_guardian' })
  sellerAdministratorGuardian;

  @Column({ name: 'seller_administrator_guardian_firstname' })
  sellerAdministratorGuardianFirstName;

  @Column({ name: 'seller_administrator_guardian_lastname' })
  sellerAdministratorGuardianLastName;

  @Column({ name: 'buyer_firstname' })
  buyerFirstName;

  @Column({ name: 'buyer_lastname' })
  buyerLastName;

  @Column({ name: 'buyer_county' })
  buyerCounty;

  @Column({ name: 'buyer_state' })
  buyerState;

  @Column({ name: 'buyer_amount' })
  buyerAmount;

  @Column({ name: 'buyer_purchased_county_district_lot_number' })
  buyerPurchasedCountyDistrictLotNumber;

  @Column({ name: 'lotnumber_countysection' })
  lotNumberCountySection;

  @Column({ name: 'buyerpurchased_acres' })
  buyerPurchasedAcres;

  @Column({ name: 'deed_link' })
  deedLink;

  @Column({ name: 'Notes' })
  notes;
}

module.exports = Gsu;
