const regen = require('regenerator-runtime');
const fs = require('fs');
const faker = require('faker');
const { argv } = require('yargs');

const lines = argv.lines || 100;
const filename = argv.output || 'reviews.csv';
// for my computer '../../../../../../../../../csv/reviews.csv'

const randomImg = () => {
  let num = (Math.floor(Math.random() * 1000) + 1).toString();
  while (num.length !== 4) {
    num = `0${num}`;
  }
  return num;
};

const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const createReview = (reviewNum, line) => {
  const picNum = randomImg();
  const id = reviewNum;
  const listingId = line;
  const username = faker.name.firstName();
  const image = `https://souperhost.s3-us-west-2.amazonaws.com/0${picNum}.jpg`;
  const review = faker.lorem.sentences();
  const cleanliness = Math.floor(Math.random() * 5) + 1;
  const communication = Math.floor(Math.random() * 5) + 1;
  const checkin = Math.floor(Math.random() * 5) + 1;
  const accuracy = Math.floor(Math.random() * 5) + 1;
  const location = Math.floor(Math.random() * 5) + 1;
  const value = Math.floor(Math.random() * 5) + 1;
  const createdAt = randomDate(new Date(2020, 7, 1), new Date());
  return `${id},${listingId},${username},${image},${review},${cleanliness},${communication},${checkin},${accuracy},${location},${value},${createdAt}\n`;
};

const write = (writer, data) => {
  // return a promise only when we get a drain
  if (!writer.write(data)) {
    return new Promise((resolve) => {
      writer.once('drain', resolve);
    });
  }
};

// usage
const run = async () => {
  const write_stream = fs.createWriteStream(filename);
  const max = lines;
  let current = 1;
  let currentRev = 1;
  write_stream.write('id,listingId,username,image,review,cleanliness,communication,checkin,accuracy,location,value,createdAt\n', 'utf-8');
  while (current <= max) {
    let rando = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < rando; i += 1) {
      const review = createReview(currentRev, current);
      const promise = write(write_stream, review);
      // since drain happens rarely, awaiting each write call is really slow.
      if (promise) {
        // we got a drain event, therefore we wait
        await promise;
      }
      currentRev += 1;
    }
    current += 1;
  }
};

run();
