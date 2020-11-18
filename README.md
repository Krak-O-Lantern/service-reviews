# Krak-O-Lantern Reviews Module

[![souperhost-3000](https://circleci.com/gh/Krak-O-Lantern/service-reviews.svg?style=shield)](https://circleci.com/gh//Krak-O-Lantern/service-reviews)

# Reviews

> Krak-O-Lantern is an open source accomodation booking application using service-oriented architecture. This is legacy code originally for MongoDB reworked for CassandraDB.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- CassandraDB 3.11.9
- or MongoDB 4.4.1

## Getting Started

clone this repository
`$ git clone https://github.com/Krak-O-Lantern/service-reviews.git`

Install dependencies
`npm install`

Seed database if necessary

`npm run seed`
> creates a csv file with reviews for 10,000,000 listings

If using Cassandra...
#Todo

Start your server
`npm run cass`
> start the server on port:3002

## Related Projects

  - [Calendar](https://github.com/Krak-O-Lantern/Calendar)
  - [Gallery](https://github.com/Krak-O-Lantern/photoGallery-service)
  - [Carousel](https://github.com/Krak-O-Lantern/carousel-service)

## Table of Contents

1. [Overview](#reviews)
2. [Requirements](#requirements)
