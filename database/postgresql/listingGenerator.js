const regen = require('regenerator-runtime');
const fs = require('fs');
const { argv } = require('yargs');

const lines = argv.lines || 100;
const filename = argv.output || 'listingId.csv';

const write = (writer, data) => {
  // return a promise only when we get a drain
  if (!writer.write(data)) {
    return new Promise((resolve) => {
      writer.once('drain', resolve);
    });
  }
};

const run = async () => {
  const write_stream = fs.createWriteStream(filename);
  const max = lines;
  let current = 1;
  write_stream.write('id\n', 'utf-8');
  while (current <= max) {
    const promise = write(write_stream, current+'\n');
    current += 1;
    // since drain happens rarely, awaiting each write call is really slow.
    if (promise) {
      // we got a drain event, therefore we wait
      await promise;
    }
  }
};

run();
