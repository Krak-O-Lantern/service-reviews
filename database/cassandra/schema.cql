create table reviews(
  listingid int,
  username text,
  image text,
  review text,
  cleanliness int,
  communication int,
  checkin int,
  accuracy int,
  location int,
  value int,
  createdAt text,
  primary key(listingid, createdAt)
);
